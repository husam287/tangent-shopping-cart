import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product } from "@/apis/@types/product";
import { RootState } from "@/redux";
import {
  addToWishlist as reduxAddToWishlist,
  initWishlist,
  removeFromWishlist as reduxRemoveFromWishlist,
} from "@/redux/wishlistReducer";

export default function useWishlistProducts({ allowSaving = false } = {}) {
  const { getItem, setItem } = useAsyncStorage("wishlist");
  const dispatch = useDispatch();

  const { products: wishlistProducts, isInitialized: isInitializedWishlist } =
    useSelector((state: RootState) => state.wishlist);

  const isWishlistedProduct = (productId: number) => {
    const isProductAlreaderWishlisted = wishlistProducts.find(
      (item) => item.id === productId
    );

    return !!isProductAlreaderWishlisted;
  };

  const addToWishlist = (product: Product) => {
    if (isWishlistedProduct(product.id)) return;

    dispatch(reduxAddToWishlist(product));
  };

  const removeFromWishlist = (productId: number) => {
    if (!isWishlistedProduct(productId)) return;

    dispatch(reduxRemoveFromWishlist(productId));
  };

  const saveWishlist = () => {
    setItem(JSON.stringify(wishlistProducts));
  };

  useEffect(() => {
    if (isInitializedWishlist) return;
    if (!allowSaving) return;

    getItem().then((res) => {
      dispatch(initWishlist(res ? JSON.parse(res) : []));
    });
  }, []);

  useEffect(() => {
    if (!isInitializedWishlist) return;
    if (!allowSaving) return;

    saveWishlist();
  }, [wishlistProducts]);

  return {
    wishlistProducts,
    addToWishlist,
    isWishlistedProduct,
    removeFromWishlist,
  };
}
