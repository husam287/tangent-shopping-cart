import { StyleSheet } from "react-native";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "@/constants/Metrics";
import COLORS from "@/constants/Colors";

const styles = StyleSheet.create({
  advContainer: {
    borderRadius: moderateScale(20),
    overflow: "hidden",
    position: "relative",
  },
  advInfoContainer: {
    backgroundColor: `${COLORS.dark}55`,
    gap: verticalScale(5),
    justifyContent: "flex-end",
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(10),
    ...StyleSheet.absoluteFillObject,
  },
  descText: {
    lineHeight: verticalScale(18),
  },
  dotsContainer: {
    marginTop: verticalScale(10),
  },
  image: {
    height: "100%",
  },
});

export default styles;
