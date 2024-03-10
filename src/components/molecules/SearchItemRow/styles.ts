import { StyleSheet } from "react-native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { horizontalScale, verticalScale } from "@/constants/Metrics";

const styles = StyleSheet.create({
  container: {
    ...GLOBAL_STYLES.row,
    gap: horizontalScale(5),
    paddingVertical: verticalScale(5),
  },
});

export default styles;
