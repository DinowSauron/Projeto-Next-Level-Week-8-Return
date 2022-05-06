import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { getBottomSpace } from "react-native-iphone-x-helper"

export const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  options: {
    width: "100%",
    marginBottom: 48,
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    marginBottom: 32,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_primary
  }
})