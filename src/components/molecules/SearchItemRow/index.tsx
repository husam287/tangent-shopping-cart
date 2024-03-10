import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Text from "@/components/atoms/Text";
import { SearchItemRowProps } from "./types";
import styles from "./styles";
import { moderateScale } from "@/constants/Metrics";
import COLORS from "@/constants/Colors";

export default function SearchItemRow({ title, onPress }: SearchItemRowProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name="arrow-top-right"
        size={moderateScale(18)}
        color={COLORS.dark}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
