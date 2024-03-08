import { I18nManager, StyleSheet } from "react-native";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";

const styles = StyleSheet.create({
  errorBorder: {
    borderColor: COLORS.danger,
    borderWidth: 1,
  },
  errorText: {
    ...GLOBAL_STYLES.font400,
    color: COLORS.danger,
    fontSize: moderateScale(12),
  },
  hintText: {
    color: COLORS.secondary,
    fontSize: moderateScale(14),
    ...GLOBAL_STYLES.font400,
  },
  input: {
    color: COLORS.dark,
    flex: 1,
    fontSize: moderateScale(14),
    textAlign: I18nManager.isRTL ? "right" : "left",
    textAlignVertical: "center",
    width: "100%",
    ...GLOBAL_STYLES.font500,
  },
  inputContainer: {
    alignItems: "center",
    backgroundColor: COLORS.light,
    borderColor: COLORS.grey,
    borderRadius: moderateScale(16),
    borderWidth: 1,
    flexDirection: "row",
    height: verticalScale(48),
    paddingHorizontal: horizontalScale(15),
  },
  labelText: {
    color: COLORS.dark,
    fontSize: moderateScale(14),
    marginStart: horizontalScale(5),
    ...GLOBAL_STYLES.font500,
  },
  spaceAround: { marginHorizontal: horizontalScale(5) },
  spaceBottom: { marginBottom: verticalScale(16) },
  spaceEnd10: { marginEnd: horizontalScale(10) },
  textAreaContainer: {
    alignItems: "flex-start",
    height: verticalScale(140),
    paddingVertical: verticalScale(20),
  },
  textAreaInput: {
    marginTop: -verticalScale(7),
    textAlignVertical: "top",
  },
});

export default styles;
