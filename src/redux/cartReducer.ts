import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/apis/@types/product";
import { CartItem } from "@/apis/@types/cart";

interface ICartState {
  cart: CartItem[];
  initiated: boolean;
}

const initialState: ICartState = {
  cart: [],
  initiated: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initiateCart: (state, action: PayloadAction<CartItem[]>) => ({
      ...state,
      cart: action.payload,
    }),

    removeAll: (state) => ({
      ...state,
      ...initialState,
    }),

    removeCartItem: (state, action: PayloadAction<{ productId: number }>) => ({
      ...state,
      cart: state.cart?.filter(
        (item) => item.product.id !== action.payload.productId
      ),
    }),

    addCartItem: (
      state,
      action: PayloadAction<{ product: Product; quantity: number }>
    ) => {
      const { cart } = state;
      const targetCartItem = cart?.find(
        (item) => item.product.id === action.payload.product.id
      );
      if (targetCartItem) {
        targetCartItem.quantity += action.payload.quantity;
      } else {
        cart?.push(action.payload);
      }
    },

    editCartItem: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) => {
      const { cart } = state;
      const targetCartItem = cart?.find(
        (item) => item.product.id === action.payload.productId
      );
      if (targetCartItem) {
        targetCartItem.quantity = action.payload.quantity;
      }
    },

    markAsInitiated: (state) => ({
      ...state,
      initiated: true,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  initiateCart,
  removeAll,
  removeCartItem,
  addCartItem,
  editCartItem,
  markAsInitiated,
} = cartSlice.actions;

export default cartSlice.reducer;
