import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Button from "@/components/atoms/Button";
import { moderateScale } from "@/constants/Metrics";
import COLORS from "@/constants/Colors";

export default function MainHeaderSearchIcon() {
  const navigation = useNavigation();

  const goToSearchScreen = () => {
    navigation.navigate("Search");
  };

  return (
    <Button
      backgroundColor={COLORS.transparent}
      onPress={goToSearchScreen}
      prefix={
        <Feather
          name="search"
          size={moderateScale(21)}
          color={COLORS.primary}
        />
      }
    />
  );
}
