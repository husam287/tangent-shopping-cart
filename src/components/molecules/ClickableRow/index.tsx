import { TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import Text from "@/components/atoms/Text";
import { ClickableRowProps } from "./types";
import styles from "./styles";
import { moderateScale } from "@/constants/Metrics";

export default function ClickableRow({ text, onClick }: ClickableRowProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onClick}
      disabled={!onClick}
    >
      <Text fontSize={moderateScale(21)} style={styles.categoryText}>
        {text}
      </Text>

      <Entypo
        name="chevron-thin-right"
        size={moderateScale(21)}
        color="black"
      />
    </TouchableOpacity>
  );
}
