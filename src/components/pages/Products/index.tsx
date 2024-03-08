import { useState } from "react";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import usePaginatedRequest from "@/hooks/usePaginatedRequest";
import { Product } from "@/apis/@types/product";
import { useLazyGetProductsQuery } from "@/apis/services/product";
import ProductsList from "@/components/organisms/ProductsList";

export default function ProductsScreen() {
  const [page, setPage] = useState(1);

  const { data, loadMoreData, isLoading } = usePaginatedRequest<{
    products: Product[];
  }>({
    page,
    setPage,
    params: {},
    rtkLazyHook: useLazyGetProductsQuery,
  });

  return (
    <ScreenWrapper>
      <ProductsList
        products={data?.products}
        loadMoreData={loadMoreData}
        isLoading={isLoading}
      />
    </ScreenWrapper>
  );
}
