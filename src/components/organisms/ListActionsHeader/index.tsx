import { TouchableOpacity, View } from "react-native";
import { Entypo, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ListActionsHeaderProps } from "./types";
import PureInput from "@/components/atoms/PureInput";
import Button from "@/components/atoms/Button";
import { moderateScale } from "@/constants/Metrics";
import COLORS from "@/constants/Colors";
import GLOBAL_STYLES from "@/constants/GlobalStyles";
import styles from "./styles";

export default function ListActionsHeader({
  onListViewChange,
  isListView = false,
  searchValue = "",
  isSearchHidden = false,
}: ListActionsHeaderProps) {
  const navigation = useNavigation();

  const goToSearchScreen = () => {
    navigation.navigate("CategoryProducts");
  };

  return (
    <View style={[styles.row, isSearchHidden && styles.justifyEnd]}>
      {!isSearchHidden && (
        <TouchableOpacity
          onPress={goToSearchScreen}
          style={GLOBAL_STYLES.fullSize}
        >
          <PureInput
            editable={false}
            value={searchValue}
            customInputColorWhenDisabled={COLORS.dark}
            suffix={null}
            prefix={
              <Octicons
                name="search"
                size={moderateScale(14)}
                color={COLORS.dark}
              />
            }
          />
        </TouchableOpacity>
      )}

      <Button
        onPress={onListViewChange}
        prefix={
          <Entypo
            name={isListView ? "grid" : "list"}
            size={moderateScale(21)}
            color={COLORS.primary}
          />
        }
        backgroundColor={COLORS.transparent}
        borderColor={COLORS.primary}
      />
    </View>
  );
}
