import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice"; // Importera Redux action
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full p-8 gap-12 rounded-sm shadow-md flex flex-col items-center justify-between border-b-2 border-gray-300">
      <Link
        to={`/product/${product.id}`}
        className="w-full flex flex-col items-center gap-6"
      >
        <img src={product.image} alt={product.title} className="h-72" />
        <h2 className="text-lg font-bold text-center drop-shadow">
          {product.title}
        </h2>
      </Link>
      <div className="w-full flex items-center justify-between">
        <p className="text-gray-800 font-bold text-center text-xl font-serif drop-shadow rounded-xl">
          ${product.price.toFixed(2)}
        </p>
        <button
          onClick={() => dispatch(addToCart(product))} // Använd Redux för att lägga till produkt i kundvagnen
        >
          <FaShoppingBag className="text-[#f3929c] " />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
