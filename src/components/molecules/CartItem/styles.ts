import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "@/constants/Metrics";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  cartInnerContainer: {
    ...GLOBAL_STYLES.row,
    flex: 1,
    gap: horizontalScale(10),
  },
  container: {
    ...GLOBAL_STYLES.rowJustifyBetween,
    alignItems: "flex-start",
    gap: horizontalScale(20),
  },
  image: {
    height: moderateScale(120),
    width: moderateScale(120),
  },
});

export default styles;
