import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import localproducts from "../../data/localProducts.json";

const API_URL = "https://fakestoreapi.com/products";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      console.error(
        "Failed to fetch products from API, using local data:",
        error
      );
      return localproducts;
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(
        "Failed to fetch product from API, using local data:",
        error
      );
      const product = localproducts.find(
        (product) => product.id === parseInt(id)
      );
      if (product) {
        return product;
      } else {
        throw new Error("Product not found in local data");
      }
    }
  }
);

// Slice för produkterna
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: null,
    selectedProduct: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Hanterar alla produkter
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    
    // Hanterar en specifik produkt
    builder
      .addCase(fetchProductById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;