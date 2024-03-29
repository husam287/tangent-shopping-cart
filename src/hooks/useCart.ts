import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { RootState } from "@/redux";
import {
  addCartItem,
  editCartItem,
  initiateCart,
  markAsInitiated,
  removeAll,
  removeCartItem,
} from "@/redux/cartReducer";
import { CartItem } from "@/apis/@types/cart";

export default function useCart() {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const isInitiatedCart = useSelector(
    (state: RootState) => state.cart.initiated
  );

  const [isCartLoading, setisCartLoading] = useState(false);

  const dispatch = useDispatch();
  const { setItem, getItem } = useAsyncStorage("cart");

  const addToCart = (cartItem: CartItem) => {
    dispatch(addCartItem(cartItem));
  };

  const removeFromCart = (productId: number) => {
    dispatch(removeCartItem({ productId }));
  };

  const clearCart = () => {
    dispatch(removeAll());
  };

  const editCartItemQuantity = (productId: number, quantity: number) => {
    dispatch(editCartItem({ productId, quantity }));
  };

  // Retrive from storage
  useEffect(() => {
    if (isInitiatedCart) {
      dispatch(markAsInitiated());
      return;
    }

    setisCartLoading(true);
    getItem().then((res) => {
      const savedCart = res ? JSON.parse(res) : [];
      dispatch(initiateCart(savedCart));
      setisCartLoading(false);
      dispatch(markAsInitiated());
    });
  }, []);

  // Saving to storage
  useEffect(() => {
    if (!isInitiatedCart) return;

    setItem(JSON.stringify(cart));
  }, [cart]);

  return {
    cart,
    isCartLoading,
    addToCart,
    removeFromCart,
    clearCart,
    editCartItemQuantity,
  };
}
