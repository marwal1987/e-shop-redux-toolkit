import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice"; // Importera Redux action
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="container p-8 gap-12 rounded-md shadow-md flex flex-col items-center justify-between border-b-2 border-gray-300">
      <Link
        to={`/product/${product.id}`}
        className="w-full flex flex-col items-center gap-12"
      >
        <img src={product.image} alt={product.title} loading="lazy" className="max-h-72" />
      </Link>
        <h2 className="text-lg font-bold text-left drop-shadow w-full">
          {product.title}
        </h2>
      <div className="w-full flex items-center justify-between">
        <p className="text-gray-800 font-bold text-left text-xl font-serif drop-shadow rounded-xl">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={() => dispatch(addToCart(product))} // Använd Redux för att lägga till produkt i kundvagnen
        >
          <FaShoppingBag className="text-[#f3929c] hover:text-gray-800 ease-in " />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
