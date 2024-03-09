import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/apis/@types/product";

interface ICartBottomSheetState {
  selectedProduct?: Product;
}
const initialState: ICartBottomSheetState = {
  selectedProduct: undefined,
};

export const cartBottomSheetSlice = createSlice({
  name: "cartBottomSheet",
  initialState,
  reducers: {
    openCartBottomSheet: (state, action: PayloadAction<Product>) => ({
      ...state,
      selectedProduct: action.payload,
    }),

    closeCartBottomSheet: (state) => ({
      ...state,
      ...initialState,
    }),
  },
});

// Action creators are generated for each case reducer function
export const { openCartBottomSheet, closeCartBottomSheet } =
  cartBottomSheetSlice.actions;

export default cartBottomSheetSlice.reducer;
