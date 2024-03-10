import { View } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { SearchSuggestSectionProps } from "./types";
import styles from "./styles";
import { useGetProductSuggestionListQuery } from "@/apis/services/product";
import LoadingComponent from "@/components/atoms/LoadingComponent";
import ProductSuggestionList from "@/components/molecules/ProductSuggestionList";

export default function SearchSuggestSection({
  searchValue,
  onSubmitSearchHandler,
}: SearchSuggestSectionProps) {
  const { data: productSuggestions, isFetching: isProductSuggestionLoading } =
    useGetProductSuggestionListQuery(searchValue as string, {
      skip: !searchValue,
    });

  return (
    <View style={styles.container}>
      {!!isProductSuggestionLoading && <LoadingComponent />}
      {!!searchValue && !isProductSuggestionLoading && (
        <Animated.View entering={FadeInUp} exiting={FadeOutUp}>
          <ProductSuggestionList
            suggestions={productSuggestions?.products || []}
            onSubmitSearch={onSubmitSearchHandler}
          />
        </Animated.View>
      )}
    </View>
  );
}
