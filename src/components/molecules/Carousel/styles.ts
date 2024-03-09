import { I18nManager, StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";

const styles = StyleSheet.create({
  dotContainer: {
    flexDirection: I18nManager.isRTL ? "row-reverse" : "row",
    top: 0,
  },
  dotStyle: {
    borderRadius: 3,
    height: moderateScale(8),
    marginHorizontal: horizontalScale(4),
    width: moderateScale(8),
  },
  spaceBottom: {
    paddingBottom: verticalScale(15),
  },
});

export default styles;
