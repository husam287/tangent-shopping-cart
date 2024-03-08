import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale } from "@/constants/Metrics";
import GLOBAL_STYLES from "@/constants/GlobalStyles";

const styles = StyleSheet.create({
  cartInnerContainer: {
    ...GLOBAL_STYLES.row,
    gap: horizontalScale(10),
  },
  container: {},
  image: {
    height: moderateScale(120),
    width: moderateScale(120),
  },
});

export default styles;
