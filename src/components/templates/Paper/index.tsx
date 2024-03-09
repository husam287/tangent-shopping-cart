import { View, ViewStyle } from "react-native";
import Text from "@/components/atoms/Text";
import { PaperProps } from "./types";
import styles from "./styles";
import { moderateScale } from "@/constants/Metrics";

export default function Paper({ children, bottomSpace = 'sm', topSpace }: PaperProps) {
  const sizeNumberMap = {
    sm: moderateScale(10),
    md: moderateScale(15),
    l: moderateScale(20)
  }

  const containerStyle: ViewStyle = {
    marginTop: topSpace ? sizeNumberMap[topSpace] : undefined,
    marginBottom: sizeNumberMap[bottomSpace]
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {children}
    </View>
  );
}
