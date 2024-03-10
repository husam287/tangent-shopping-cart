import { TouchableOpacity, View } from "react-native";
import { Entypo, MaterialIcons, Octicons } from "@expo/vector-icons";
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
    navigation.navigate("Search", { search: searchValue });
  };

  const clearSearch = () => {
    navigation.setParams({ search: "" });
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

      {!isSearchHidden && !!searchValue && (
        <Button
          backgroundColor={COLORS.transparent}
          borderColor={COLORS.danger}
          onPress={clearSearch}
          prefix={
            <MaterialIcons
              name="search-off"
              size={moderateScale(21)}
              color={COLORS.danger}
            />
          }
        />
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
