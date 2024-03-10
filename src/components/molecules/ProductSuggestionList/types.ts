import { Product } from "@/apis/@types/product";

export interface ProductSuggestionListProps {
  suggestions: Partial<Product>[];
  isLoading?: boolean;
  onSubmitSearch?: (e: string) => void;
}
