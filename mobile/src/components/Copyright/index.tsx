import React from "react";
import { styles } from "./styles";
import { theme } from "../../theme";
import { Text, View } from "react-native";


export function Copyright() {

  return (
    <View>
      <Text style={styles.text}>
        Feito com 🤍 por Luiz Claudio!
      </Text>
    </View>
  )
}
