import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";

const styles = StyleSheet.create({
  sheetContainer: {
    justifyContent: "flex-end",
    padding: moderateScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  spaceTop: { marginTop: verticalScale(10) },
  spacing: {
    marginStart: -horizontalScale(20),
    marginTop: -verticalScale(20),
    paddingStart: horizontalScale(20),
    paddingTop: verticalScale(20),
  },
});

export default styles;
