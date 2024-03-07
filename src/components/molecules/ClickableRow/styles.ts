import { StyleSheet } from "react-native";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { verticalScale } from "@/constants/Metrics";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  categoryText: { textTransform: "capitalize" },
  container: {
    ...GLOBAL_STYLES.rowJustifyBetween,
    borderBottomColor: COLORS.dark,
    borderBottomWidth: 1,
    marginBottom: verticalScale(5),
    paddingVertical: verticalScale(10),
  },
});

export default styles;
