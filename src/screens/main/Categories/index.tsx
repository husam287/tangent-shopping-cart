import Animated, { SlideInDown } from "react-native-reanimated";
import ScreenWrapper from "@/components/organisms/ScreenWrapper";
import Text from "@/components/atoms/Text";

export default function CategoriesScreen() {
  return (
    <ScreenWrapper>
      <Animated.View entering={SlideInDown}>
        <Text>Tab Two</Text>
      </Animated.View>
    </ScreenWrapper>
  );
}
