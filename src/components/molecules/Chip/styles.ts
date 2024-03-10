import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${COLORS.grey}33`,
    borderRadius: moderateScale(30),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
  },
});

export default styles;
