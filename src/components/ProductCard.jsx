import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import { FaBagShopping } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="container flex flex-col items-center gap-12 p-4 shadow-md ">
      <Link
        to={`/product/${product.id}`}
        className="flex flex-col items-center w-full"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-fit h-64"
          loading="lazy"
        />
      </Link>

      <div className="w-full flex items-end">
        <div className="w-full flex flex-col items-start justify-between">
          <h3 className="text-sm text-gray-900 text-left font font-thin drop-shadow w-full">
            {product.title.substring(0, 36)}..
          </h3>
          <p className="text-gray-950 font-bold text-left text-md drop-shadow">
            ${product.price.toFixed(2)}
          </p>
        </div>
        <button
          className="hover:text-[#f3929c] ease-in font-serif"
          onClick={handleAddToCart}
          aria-label="Add to cart"
        >
          <FaBagShopping />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
