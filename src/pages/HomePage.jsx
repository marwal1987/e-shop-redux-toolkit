import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/slices/productSlice"; // Importera din thunk
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items); // Hämta alla produkter från Redux Store
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchAllProducts()); // Trigga API-anrop för att hämta produkter
  }, [dispatch]);

  return (
    <>
      <HeroSection />
      {status === "loading" && (
        <div className="max-w-full h-screen flex items-center justify-center m-auto">
          Loading products...
        </div>
      )}

      {status === "failed" && (
        <div className="max-w-full h-screen flex items-center justify-center m-auto">
          Failed to load products. Please try again later.
        </div>
      )}

      {status === "succeeded" && products.length === 0 && (
        <div className="max-w-full h-screen flex items-center justify-center m-auto">
          No products found.
        </div>
      )}

      {status === "succeeded" && products.length > 0 && (
        <div className="max-w-[90%] flex flex-col items-center justify-center m-auto gap-12">
          <h1 className="text-3xl font-bold mt-12">All Products</h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} /> // Rendera ProductCard för varje produkt, skickar med produktdatat
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
