import React from "react";
import { styles } from "./styles";
import { theme } from "../../theme";
import { View, Text } from "react-native";
import { Option } from "../Option"
import { Copyright } from "../Copyright";
import { feedbackTypes } from "../../utils/feedbackTypes";

export function Options() {

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Deixe seu Feedback
      </Text>

      <View style={styles.options}>
        {
          Object
          .entries(feedbackTypes)
          .map(([key,value]) => (
            <Option
              key={key}
              title={value.title}
              image={value.image}
            />
          ))
        }
      </View>
      <Copyright />

    </View>
  )
}
