import { View } from "react-native";
import Text from "@/components/atoms/Text";
import ScreenWrapper from "@/components/organisms/ScreenWrapper";
import styles from "./styles";

export default function Payment() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Text>Payment</Text>
      </View>
    </ScreenWrapper>
  );
}
