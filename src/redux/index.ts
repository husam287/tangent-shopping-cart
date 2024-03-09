import { configureStore } from "@reduxjs/toolkit";
import api from "@/apis";
import rtkQueryErrorLogger from "@/apis/middlewares/errorMiddleware";
import appReducer from "./appReducer";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import cartBottomSheetReducer from "./cartBottomSheetReducer";
import wishlistReducer from "./wishlistReducer";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer,
    app: appReducer,
    cart: cartReducer,
    cartBottomSheet: cartBottomSheetReducer,
    wishlist: wishlistReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(rtkQueryErrorLogger),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
