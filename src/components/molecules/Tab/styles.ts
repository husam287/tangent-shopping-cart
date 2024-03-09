import { StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { moderateScale, verticalScale } from "@/constants/Metrics";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: verticalScale(10),
    paddingVertical: verticalScale(6),
  },
  text: {
    color: COLORS.dark,
    flexWrap: "nowrap",
    fontSize: moderateScale(10),
    ...GLOBAL_STYLES.font700,
  },
});

export default styles;
