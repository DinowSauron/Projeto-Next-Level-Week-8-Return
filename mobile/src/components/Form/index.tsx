import React from "react";
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
import { feedbackTypes } from "../../utils/feedbackTypes"

interface Props {
  feedbackType: FeedbackType;
}

export function Form({feedbackType}: Props) {

  var feedbacktypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
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
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={() => { }}
          onRemoveShot={() => { }}
          screenshot=""
        />
      </View>
    </View>
  )
}
