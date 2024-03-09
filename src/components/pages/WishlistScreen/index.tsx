import { ListRenderItem } from "react-native";
import { Product } from "@/apis/@types/product";
import List from "@/components/molecules/List";
import ProductCard from "@/components/molecules/ProductCard";
import ScreenWrapper from "@/components/templates/ScreenWrapper";
import useWishlistProducts from "@/hooks/useWishlistProducts";
import { verticalScale } from "@/constants/Metrics";

export default function WishlistScreen() {
  const { wishlistProducts } = useWishlistProducts();

  const productRenderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} />
  );

  return (
    <ScreenWrapper>
      <List
        data={wishlistProducts}
        renderItem={productRenderItem}
        columnGap={verticalScale(10)}
      />
    </ScreenWrapper>
  );
}
