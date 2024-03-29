import { I18nManager, StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import { moderateScale } from "@/constants/Metrics";

const styles = StyleSheet.create({
  text: {
    color: COLORS.dark,
    fontSize: moderateScale(14),
    writingDirection: I18nManager.isRTL ? "rtl" : "ltr",
    ...GLOBAL_STYLES.font500,
  },
});

export default styles;
