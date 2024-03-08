import { View } from "react-native";
import Text from "@/components/atoms/Text";
import { TextWithIconProps } from "./types";
import styles from "./styles";
import { moderateScale } from "@/constants/Metrics";
import COLORS from "@/constants/Colors";

export default function TextWithIcon({
  text,
  IconComponent,
  iconName,
}: TextWithIconProps) {
  return (
    <View style={styles.container}>
      <IconComponent
        name={iconName}
        size={moderateScale(14)}
        color={COLORS.primary}
      />

      <Text fontSize={moderateScale(12)} fontFamily="font500" color="primary">
        {text}
      </Text>
    </View>
  );
}
