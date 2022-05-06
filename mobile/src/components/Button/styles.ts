import { StyleSheet } from "react-native";
import { theme } from "../../theme";
import { getBottomSpace } from "react-native-iphone-x-helper"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 40,
    borderRadius: 4,
    backgroundColor: theme.colors.brand,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.text_on_brand_color
  }
})