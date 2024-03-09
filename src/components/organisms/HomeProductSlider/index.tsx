import { ListRenderItem, View } from "react-native";
import { HomeProductSliderProps } from "./types";
import styles from "./styles";
import ListHeader from "@/components/molecules/ListHeader";
import List from "@/components/molecules/List";
import { Product } from "@/apis/@types/product";
import ProductCard from "@/components/molecules/ProductCard";
import { horizontalScale } from "@/constants/Metrics";

export default function HomeProductSlider({
  listTitle,
  listNavAction,
  products,
  isLoading,
}: HomeProductSliderProps) {
  const renderProduct: ListRenderItem<Product> = ({ item }) => (
    <ProductCard product={item} containerStyle={styles.productContainer} />
  );

  return (
    <View style={styles.container}>
      <ListHeader title={listTitle} onPressSeeMore={listNavAction} />

      <View style={styles.listContainer}>
        <List
          mode="horizontal"
          data={products}
          isLoading={isLoading}
          renderItem={renderProduct}
          columnGap={horizontalScale(10)}
        />
      </View>
    </View>
  );
}
