import { ReactNode } from "react";
import { Product } from "@/apis/@types/product";

export interface ProductsListProps {
  products?: Product[];
  HeaderComponent?: ReactNode;
  loadMoreData?: () => void;
  isLoading?: boolean;
  isListView?: boolean;
}
