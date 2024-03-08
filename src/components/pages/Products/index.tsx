import { useState } from "react";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import usePaginatedRequest from "@/hooks/usePaginatedRequest";
import { Product } from "@/apis/@types/product";
import { useLazyGetProductsQuery } from "@/apis/services/product";
import ProductsList from "@/components/organisms/ProductsList";
import ListActionsHeader from "@/components/organisms/ListActionsHeader";

export default function ProductsScreen() {
  const [page, setPage] = useState(1);
  const [isListView, setIsListView] = useState(false);

  const { data, loadMoreData, isLoading } = usePaginatedRequest<{
    products: Product[];
  }>({
    page,
    setPage,
    params: {},
    rtkLazyHook: useLazyGetProductsQuery,
  });

  const ProductListHeaderMarkup = (
    <ListActionsHeader
      searchValue="Hosam"
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
