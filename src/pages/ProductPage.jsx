import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../store/slices/productSlice"; // Importera thunk
import { addToCart } from "../store/slices/cartSlice"; // Importera action addToCart

const ProductPage = () => {
  const { id } = useParams(); // Hämta produktens id från URL:en
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Hämtar data från Redux store
  const product = useSelector((state) => state.products.selectedProduct);
  const status = useSelector((state) => state.products.status);

  // Trigga thunk för att hämta produktdata när komponenten laddas
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]); // Lyssna på dispatch och id

  return (
    <div className="container m-auto h-screen flex flex-col items-center justify-center">
      {status === "loading" ? (
        <div className="max-w-full h-screen flex flex-col items-center justify-center m-auto">
          Loading product...
        </div>
      ) : (
        <div className="flex gap-12 items-center justify-around shadow-lg p-12 border-b-2 border-gray-200">
          <img src={product.image} alt={product.title} className="max-w-sm" />

          <div className="flex flex-col items-start justify-evenly gap-12 max-w-sm h-full">
            <h1 className="text-2xl font-bold">{product.title}</h1>
            <p className="text-lg text-gray-600">{product.description}</p>
            <p className="text-2xl font-bold font-serif ">
              ${product.price.toFixed(2)}
            </p>

            <div className="flex gap-6">
              <button
                className="bg-[#f3929c] text-gray-100 p-2 rounded font-bold hover:bg-[#3a3f54] "
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </button>
              <button
                className="bg-[#3a3f54] text-gray-100 p-2 rounded hover:bg-[#f3929c] "
                onClick={() => navigate("/cart")}
              >
                Checkout Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
