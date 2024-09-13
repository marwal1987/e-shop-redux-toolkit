import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array för produkter i kundvagnen
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // Lägg till produkt i kundvagnen
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Ta bort produkt från kundvagnen
    },
    clearCart: (state) => {
      state.items = []; // Rensa kundvagnen
    },
  },
});

// Exportera reducer actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
