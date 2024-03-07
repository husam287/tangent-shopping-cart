import { Dimensions, PixelRatio, Platform } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const widthScale = WIDTH / 375;
const HeightScale = HEIGHT / 812;

export function moderateScale(size: number) {
  const newSize = size * widthScale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
}

export function horizontalScale(width: number) {
  return widthScale * width;
}

export function verticalScale(height: number) {
  return HeightScale * height;
}

const METRICS = {
  screenWidth: WIDTH,
  screenHeight: HEIGHT,
  bottomTabsHeight: Platform.select({
    android: verticalScale(66),
    ios: verticalScale(80),
  }),
  headerHeight: getStatusBarHeight() + verticalScale(54),
  generalSpacingValue: WIDTH * 0.035,
};

export default METRICS;
