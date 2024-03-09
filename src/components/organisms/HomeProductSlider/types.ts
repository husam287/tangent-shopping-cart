import { Product } from "@/apis/@types/product";

export interface HomeProductSliderProps {
  listTitle: string;
  listNavAction?: () => void;
  products: Product[];
  isLoading?: boolean;
}
