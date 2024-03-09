import { StyleSheet } from "react-native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.rowJustifyBetween,
  },
  underline: {
    textDecorationLine: "underline",
  },
});

export default styles;
