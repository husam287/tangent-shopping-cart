import { StyleSheet, TouchableOpacity } from "react-native";
import { useMemo, useEffect, useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { debounce } from "lodash-es";
import Colors from "@/constants/Colors";
import PureInput from "@/components/atoms/PureInput";
import { moderateScale } from "@/constants/Metrics";

const styles = StyleSheet.create({
  spaceEnd: {
    marginEnd: 10,
  },
});

export default function DebouncedSearchField({
  defaultValue = "",
  onSearchChange = (_e: string | undefined) => {},
  withCloseButton = false,
  onSubmit = () => {},
}) {
  const [searchValue, setSearchValue] = useState<string | undefined>(
    defaultValue
  );

  const debouncedSearchHandler = useMemo(
    () => debounce(onSearchChange, 300),
    []
  );

  useEffect(() => {
    if (searchValue === undefined) return;

    debouncedSearchHandler(searchValue);
  }, [searchValue, debouncedSearchHandler]);

  const onDismiss = () => {
    setSearchValue("");
  };

  return (
    <PureInput
      prefix={
        <Ionicons
          style={styles.spaceEnd}
          name="search"
          size={24}
          color={Colors.dark}
        />
      }
      placeholder="Search here"
      onChangeText={setSearchValue}
      onSubmitEditing={onSubmit}
      value={searchValue}
      returnKeyType="search"
      suffix={
        withCloseButton && searchValue ? (
          <TouchableOpacity onPress={onDismiss}>
            <AntDesign
              name="close"
              size={moderateScale(20)}
              color={Colors.dark}
            />
          </TouchableOpacity>
        ) : null
      }
    />
  );
}
