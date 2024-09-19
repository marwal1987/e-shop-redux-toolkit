import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice"; // Importera Redux action
import { FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="container p-6 gap-6 rounded-md shadow-md grid grid-rows-1 border-b-2 border-gray-300">
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center"
      >
        <img src={product.image} alt={product.title} loading="lazy" className="max-h-72" />
      </Link>
      <div className="w-full min-h-40 flex flex-col items-center justify-end gap-4">
        <h2 className="text-md font-bold text-left drop-shadow w-full">
          {product.title.substring(0, 61)} ...
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
    </div>
  );
};

export default ProductCard;
