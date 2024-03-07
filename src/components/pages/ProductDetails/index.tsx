import { StyleSheet, View } from "react-native";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import Text from "@/components/atoms/Text";
import Img from "@/components/atoms/Image";

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 20,
  },
});

export default function ProductDetails() {
  return (
    <ScreenWrapper>
      <View>
        <Text style={styles.title}>ProductDetails</Text>

        <Img
          style={styles.imageStyle}
          source="https://vastphotos.com/files/uploads/social/good-morning-new-york.jpg"
        />
      </View>
    </ScreenWrapper>
  );
}
