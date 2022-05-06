;import React, { useRef, useState } from "react";
import "react-native-gesture-handler";
import { TouchableOpacity, View, Text } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { Options } from "../Options";
import { Form } from "../Form";
import { Success } from "../Success";

import { styles } from "./styles";
import { theme } from "../../theme";
import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;


function WidgetFrame() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }
  function handleRestartFeedback() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }
  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color}
        />

      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        { feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback}/>
        ) : feedbackType ? (
          <Form 
            feedbackType={feedbackType}
            onFeedbackCanceled={handleRestartFeedback}
            onFeedbackSent={handleFeedbackSent}
          />
        ) : (
          <Options onFeedbackTypeChanged={setFeedbackType}/>
        )}

      </BottomSheet>
    </>
  );
}


// Tentativa de resolver o erro
// você pode exportar diretamente esta função e utiliza-la no app
// Não consigo tirar este erro, e por algum motivo não está afetando a aplicação, apenas o emulador...
// acredito ser algo na tipagem, ou então um erro do modulo

const Frame = gestureHandlerRootHOC(WidgetFrame);

export function Widget() {
  return (
    <>
      <Frame/>
    </>
  )
}

