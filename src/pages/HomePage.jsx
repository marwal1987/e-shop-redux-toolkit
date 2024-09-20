import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/slices/productSlice"; // Importera din thunk
import MetaTags from "../components/MetaTags";
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
      <MetaTags
        title="Home - E-Shop with Redux Toolkit"
        description="Explore our wide range of products at E-shop, powered by React and Redux Toolkit. Shop for your favorite items today!"
      />

      <HeroSection />
      {status === "loading" && (
        <h1 className="text-3xl font-serif font-bold text-center">
          Loading products...
        </h1>
      )}

      {status === "failed" && (
        <h1 className="text-3xl font-serif font-bold text-center">
          Failed to load products. Please try again later.
        </h1>
      )}

      {status === "succeeded" && products.length === 0 && (
        <h1 className="text-3xl font-serif font-bold text-center">
          No products found.
        </h1>
      )}

      {status === "succeeded" && products.length > 0 && (
        <div className="max-w-[90%] flex flex-col items-center justify-center m-auto gap-12">
          <h1 className="text-3xl font-bold mt-12 font-serif">All Products</h1>
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
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
