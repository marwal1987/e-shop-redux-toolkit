import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice"; // Importera Redux action

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="container p-6 gap-6 rounded-md shadow-md grid grid-rows-1 border-b-2 border-gray-300">
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="max-h-72"
        />
      </Link>
      <div className="w-full min-h-40 flex flex-col items-center justify-end gap-4 ">
        <h2 className="text-lg text-gray-900 text-left drop-shadow w-full">
          {product.title.substring(0, 61)} ...
        </h2>
        <div className="w-full flex items-center justify-between">
          <p className="text-gray-950 font-bold text-left text-xl font-serif drop-shadow rounded-xl">
            ${product.price.toFixed(2)}
          </p>

          <button
            className="flex items-center hover:text-gray-100  hover:bg-[#3a3f54] ease-in font-bold border-2 border-[#3a3f54] px-2 rounded-md"
            onClick={() => dispatch(addToCart(product))} // Använd Redux för att lägga till produkt i kundvagnen
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
