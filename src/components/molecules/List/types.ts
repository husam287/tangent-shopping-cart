import { FlatListProps } from "react-native";
import { TranslationKeyEnum } from "@/@types/TranslationKeyEnum";

export interface ListProps<T> extends FlatListProps<T> {
  mode?: "vertical" | "horizontal";
  emptyI18nKey?: TranslationKeyEnum;
  isLoading?: boolean;
  rowGap?: number;
  columnGap?: number;
}
