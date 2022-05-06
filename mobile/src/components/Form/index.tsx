import React, { useState} from "react";
import { styles } from "./styles";
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from "react-native";
import { ArrowLeft } from "phosphor-react-native";
import { theme } from "../../theme";
import { FeedbackType } from "../Widget"
import { ScreenshotButton } from "../ScreenshotButton"
import { Button } from "../Button"
import { feedbackTypes } from "../../utils/feedbackTypes"
import { captureScreen } from "react-native-view-shot";
import { api } from "../../libs/api";
import * as FileSystem from "expo-file-system";


interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void
}

export function Form({feedbackType, onFeedbackCanceled, onFeedbackSent}: Props) {

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState("");
  const feedbacktypeInfo = feedbackTypes[feedbackType];

  function handleScreenshot()  {
    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(uri => setScreenshot(uri))
    .catch(console.log)
  }
  function handleScreenshotRemove() {
    setScreenshot(null)
  }


  async function handleSendFeedback() {
    if(isSendingFeedback) return;

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, { encoding: "base64"});

    
    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        screenshot: screenshot && `data:image/png;base64, ${screenshotBase64}`,
        comment
      });

      onFeedbackSent();
    }catch(err){
      console.log(err)
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image
            source={feedbacktypeInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
            {feedbacktypeInfo.title}
          </Text>

        </View>

      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />
        <Button
          onPress={handleSendFeedback}
          isLoading={isSendingFeedback}
        />
      </View>
    </View>
  )
}
