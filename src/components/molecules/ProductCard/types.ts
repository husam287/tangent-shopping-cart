import { Product } from "@/apis/@types/product";

export interface ProductCardProps {
  product: Product;
  isFav?: boolean;
}
