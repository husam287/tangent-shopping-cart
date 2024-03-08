import { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import ProductsList from "@/components/organisms/ProductsList";
import usePaginatedRequest from "@/hooks/usePaginatedRequest";
import { useLazyGetCategoryProductsQuery } from "@/apis/services/category";
import { Product } from "@/apis/@types/product";
import { MainStackParamList } from "@/routes/types";
import ListActionsHeader from "@/components/organisms/ListActionsHeader";

export default function CategoryProducts() {
  const navigation = useNavigation();
  const [isListView, setIsListView] = useState(false);

  const selectedCategory =
    useRoute<RouteProp<MainStackParamList, "CategoryProducts">>()?.params
      ?.category;

  const [page, setPage] = useState(1);

  const { data, loadMoreData, isLoading } = usePaginatedRequest<{
    products: Product[];
  }>({
    page,
    setPage,
    params: { category: selectedCategory },
    rtkLazyHook: useLazyGetCategoryProductsQuery,
  });

  useEffect(() => {
    navigation.setParams({ title: selectedCategory });
  }, []);

  const ProductListHeaderMarkup = (
    <ListActionsHeader
      searchValue="Hosam"
      onListViewChange={() => setIsListView(!isListView)}
      isListView={isListView}
      isSearchHidden
    />
  );

  return (
    <ScreenWrapper>
      <ProductsList
        products={data?.products}
        loadMoreData={loadMoreData}
        isLoading={isLoading}
        isListView={isListView}
        HeaderComponent={ProductListHeaderMarkup}
      />
    </ScreenWrapper>
  );
}
