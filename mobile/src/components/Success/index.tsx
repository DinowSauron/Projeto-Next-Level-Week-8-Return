import React from "react";
import { styles } from "./styles";
import { theme } from "../../theme";
import { TouchableOpacity, Text, Image, View } from "react-native";
import { Camera, Trash } from "phosphor-react-native";
import successImg from "../../assets/success.png";
import { Copyright } from "../Copyright";


interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({ onSendAnotherFeedback }: Props) {

  return (
    <View
      style={styles.container}
    >
      <Image 
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>Agradecemos o Feedback</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright/>
    </View>
  )
}
