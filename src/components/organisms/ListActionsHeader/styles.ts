import { StyleSheet } from "react-native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { horizontalScale, verticalScale } from "@/constants/Metrics";

const styles = StyleSheet.create({
  justifyEnd: { justifyContent: "flex-end" },
  row: {
    ...GLOBAL_STYLES.rowJustifyBetween,
    gap: horizontalScale(10),
    marginBottom: verticalScale(15),
  },
});

export default styles;
