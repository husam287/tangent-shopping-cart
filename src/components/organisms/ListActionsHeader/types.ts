import { ViewStyle } from "react-native";

export interface ListActionsHeaderProps {
  containerStyle?: ViewStyle;
  onListViewChange: () => void;
  isListView?: boolean;
  searchValue?: string;
  isSearchHidden?: boolean;
}
