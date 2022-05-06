import React from "react";
import { styles } from "./styles";
import { theme } from "../../theme";
import { Copyright } from "../Copyright";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  Image,
  ImageProps,
  Text
} from "react-native";


interface Props extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export function Option({title, image, ...rest}: Props) {

  return (
    <TouchableOpacity 
      {...rest} 
      style={styles.container}
    >
      <Image
        source={image}
        style={styles.image}
      />
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}
