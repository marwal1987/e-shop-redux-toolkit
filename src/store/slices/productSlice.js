import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id) => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  }
);

// Slice för produkterna
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: null,
    selectedProduct: null,
    error: null,
  },
  reducers: {
    clearProduct: (state) => {
      state.selectedProduct = null;
      state.status = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // Hanterar alla produkter
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    // Hanterar en specifik produkt
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { clearProduct } = productSlice.actions;
export default productSlice.reducer;
