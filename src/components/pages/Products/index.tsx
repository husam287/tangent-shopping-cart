import { useState } from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import usePaginatedRequest from "@/hooks/usePaginatedRequest";
import { Product } from "@/apis/@types/product";
import { useLazyGetProductsQuery } from "@/apis/services/product";
import ProductsList from "@/components/organisms/ProductsList";
import ListActionsHeader from "@/components/organisms/ListActionsHeader";
import { TabParamList } from "@/routes/types";

export default function ProductsScreen() {
  const search =
    useRoute<RouteProp<TabParamList, "ProductsScreen">>()?.params?.search;

  const [page, setPage] = useState(1);
  const [isListView, setIsListView] = useState(false);

  const { data, loadMoreData, isLoading } = usePaginatedRequest<{
    products: Product[];
  }>({
    page,
    setPage,
    params: { q: search },
    rtkLazyHook: useLazyGetProductsQuery,
  });

  const ProductListHeaderMarkup = (
    <ListActionsHeader
      searchValue={search}
      onListViewChange={() => setIsListView(!isListView)}
      isListView={isListView}
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
