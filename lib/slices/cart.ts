import { product } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:{product:product, count:number}[] = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    initCart: () => {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    },
    addToCart: (
      state,
      action: PayloadAction<{ product: product; count: number }>
    ) => {
      const found = state.find((element) => {
        return element.product.id === action.payload.product.id;
      });
      if (found) {
        state.map((el) => {
          if (
            el.product.id === action.payload.product.id &&
            el.count + action.payload.count > 0
          )
            return (el.count += action.payload.count);
          return el;
        });
      } else
        state.push({
          product: action.payload.product,
          count: action.payload.count,
        });

      localStorage.setItem("cart", JSON.stringify(state));
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const newState = state.filter((element) => {
        return element.product.id !== action.payload;
      });

      localStorage.setItem("cart", JSON.stringify(newState));

      return newState;
    },
    clearCart: () => {
      localStorage.setItem("cart", "[]");
      return [];
    },
  },
});

export const { initCart, addToCart, deleteFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;