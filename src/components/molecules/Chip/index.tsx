import { TouchableOpacity } from "react-native";
import Text from "@/components/atoms/Text";
import { ChipProps } from "./types";
import styles from "./styles";
import { moderateScale } from "@/constants/Metrics";
import getShadowStyle from "@/utils/getShadowStyle";

export default function Chip({ text, onPress }: ChipProps) {
  return (
    <TouchableOpacity
      style={[styles.container, getShadowStyle({ radius: 3 })]}
      onPress={onPress}
    >
      <Text fontSize={moderateScale(12)} color="primary" fontFamily="font500">
        {text}
      </Text>
    </TouchableOpacity>
  );
}
