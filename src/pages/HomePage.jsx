import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/slices/productSlice"; // Importera din thunk
import { addToCart } from "../store/slices/cartSlice"; // Importera Redux action
import ProductCard from "../components/ProductCard";
import HeroSection from "../components/HeroSection";

const HomePage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items); // Hämta produkter från Redux
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(fetchAllProducts()); // Trigga API-anrop för att hämta produkter
  }, [dispatch]);

  if (status === "loading") {
    return <div className="max-w-full h-screen flex items-center justify-center m-auto">Loading products...</div>;
  }

  return (
    <>
      <HeroSection />
    <div className="max-w-[90%] flex flex-col items-center justify-center m-auto gap-12">
      <h1 className="text-3xl font-bold mt-12">All Products</h1>
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          /> // Rendera ProductCard för varje produkt och skicka med addToCart funktionen från App.jsx
        ))}
      </div>
    </div>
    </>
  );
};

export default HomePage;
