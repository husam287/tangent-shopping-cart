import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/apis/@types/product";

interface IwishlistState {
  products: Product[];
  isInitialized: boolean;
}
const initialState: IwishlistState = {
  products: [],
  isInitialized: false,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    initWishlist: (state, action: PayloadAction<Product[]>) => ({
      ...state,
      products: action.payload,
      isInitialized: true,
    }),

    addToWishlist: (state, action: PayloadAction<Product>) => ({
      ...state,
      products: [...state.products, action.payload],
    }),

    removeFromWishlist: (state, action: PayloadAction<number>) => ({
      ...state,
      products: state.products.filter((item) => item.id !== action.payload),
    }),
  },
});

// Action creators are generated for each case reducer function
export const { addToWishlist, removeFromWishlist, initWishlist } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
