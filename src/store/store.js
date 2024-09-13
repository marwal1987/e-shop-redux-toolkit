import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice'; // Importera din cartSlice reducer
import productReducer from './slices/productSlice'; // Importera din productSlice reducer

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default store;