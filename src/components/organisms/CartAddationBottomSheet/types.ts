import ModalVisibilityType from "@/@types/ModalVisibilityType";
import { Product } from "@/apis/@types/product";

export interface CartAddationBottomSheetProps extends ModalVisibilityType {
  product?: Product;
}
