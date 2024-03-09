import { TouchableOpacity, View } from "react-native";
import Text from "@/components/atoms/Text";
import { ListHeaderProps } from "./types";
import styles from "./styles";
import { moderateScale } from "@/constants/Metrics";

export default function ListHeader({ title, onPressSeeMore }: ListHeaderProps) {
  return (
    <View style={styles.container}>
      <Text fontSize={moderateScale(14)} fontFamily="font700" color="primary">
        {title}
      </Text>

      {!!onPressSeeMore && (
        <TouchableOpacity onPress={onPressSeeMore}>
          <Text
            fontSize={moderateScale(12)}
            color="dark"
            style={styles.underline}
          >
            See more
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
