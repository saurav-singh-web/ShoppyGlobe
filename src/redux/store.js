import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import searchReducer from "./search/searchSlice";

const loadCartFromStorage = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

const saveCartToStorage = (state) => {
  try {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch {}
};


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    search: searchReducer,
  },
  preloadedState: {
    cart: loadCartFromStorage(),
  },
});

store.subscribe(() => {
  saveCartToStorage(store.getState());
});