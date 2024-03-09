import { FlatList } from "react-native";
import { ListProps } from "./types";
import EmptyComponent from "../../atoms/EmptyComponent";
import LoadingComponent from "../../atoms/LoadingComponent";

export default function List<T>({
  mode = "vertical",
  data,
  renderItem,
  emptyI18nKey = "EMPTY",
  isLoading,
  rowGap,
  columnGap,
  ...otherProps
}: ListProps<T>) {
  const isHorizontal = mode === "horizontal";

  const listHeaderComponentModeMap = {
    horizontal: isLoading ? <LoadingComponent /> : null,
    vertical: otherProps.ListHeaderComponent,
  };

  const footerHeaderComponentModeMap = {
    horizontal: otherProps.ListFooterComponent,
    vertical: isLoading ? <LoadingComponent /> : null,
  };

  const isListView = !otherProps.numColumns || otherProps.numColumns === 1;

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      horizontal={isHorizontal}
      data={data}
      columnWrapperStyle={!isListView && { gap: rowGap }}
      contentContainerStyle={{ gap: columnGap }}
      renderItem={renderItem}
      ListHeaderComponent={listHeaderComponentModeMap[mode]}
      ListFooterComponent={footerHeaderComponentModeMap[mode]}
      ListEmptyComponent={
        !isLoading ? <EmptyComponent i18nKey={emptyI18nKey} /> : null
      }
      {...otherProps}
    />
  );
}
