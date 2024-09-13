import axios from "axios";
import localProducts from "../data/localProducts.json";

const API_URL = "https://fakestoreapi.com/products";

//hämta alla produkter (GET)
const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error(
      "Failed to fetch products from API, using local data:",
      error
    );
    return localProducts; // Använder lokal data om fetch till API misslyckas (Martin)
  }
};

//produkter via id
const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch product from API, using local data:", error);
    const product = localProducts.find(
      (product) => product.id === parseInt(id)
    );
    if (product) {
      return product;
    } else {
      throw new Error("Product not found in local data");
    }
  }
};

const productService = {
  getAllProducts,
  getProductById,
};

export default productService;
