import { createSlice } from "@reduxjs/toolkit";

// Funktion för att pusha till dataLayer
const pushToDataLayer = (event, data) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
  console.log("Data Layer pushed: ", { event, ...data });
};

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += 1;
      } else {
        const newProduct = { ...action.payload, quantity: 1 };
        state.cartItems.push(newProduct);
      }

      // Datalayer push GTM för addToCart
      pushToDataLayer("add_to_cart", {
        product_id: action.payload.id,
        product_name: action.payload.title,
        product_price: action.payload.price,
        quantity: 1,
      });
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      // Datalayer push GTM för removeFromCart
      pushToDataLayer("remove_from_cart", {
        product_id: action.payload.id,
      });
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;

        // Datalayer push för GTM quantity
        pushToDataLayer("update_cart_quantity", {
          product_id: id,
          quantity: quantity,
        });
      }
    },
    clearCart: (state) => {
      state.cartItems = [];

      // Datalayer push GTM clearCart
      pushToDataLayer("clear_cart", {});
    },
  },
});

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
