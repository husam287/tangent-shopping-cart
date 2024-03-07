import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: moderateScale(16),
    flexDirection: "row",
    height: verticalScale(40),
    justifyContent: "center",
    paddingHorizontal: horizontalScale(15),
  },
  prefixSpacing: {
    marginEnd: horizontalScale(10),
  },
  smallSpaceEnd: { marginEnd: horizontalScale(4) },
  suffixSpacing: {
    marginStart: horizontalScale(10),
  },
  text: {
    color: COLORS.light,
    fontSize: moderateScale(16),
    textAlign: "center",
    ...GLOBAL_STYLES.font700,
  },
});

export default styles;
