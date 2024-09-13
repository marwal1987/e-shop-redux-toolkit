import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../store/slices/productSlice'; // Importera thunk
import { addToCart } from '../store/slices/cartSlice'; // Rätt export


const ProductPage = () => {
  const { id } = useParams(); // Hämta produktens id från URL:en
  const dispatch = useDispatch();

  // Hämta data från Redux store
  const product = useSelector((state) => state.products.selectedProduct);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  // Trigga thunk för att hämta produktdata när komponenten laddas
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  // Hantera laddningsstatus och felmeddelanden
  if (status === 'loading') return <div className="max-w-full h-screen flex flex-col items-center justify-center m-auto">Loading product...</div>;
  if (status === 'failed') return <div className="max-w-full h-screen flex flex-col items-center justify-center m-auto">{error}</div>;

  return (
    <div className="w-2/3 h-screen items-center m-auto py-12">
      {product ? (
        <div className="flex gap-12 items-center justify-around shadow-lg p-12 border-b-2 border-gray-200">
          <img src={product.image} alt={product.title} className="max-w-sm" />
          
          <div className="flex flex-col items-start justify-evenly gap-12 max-w-sm h-full">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-2xl font-bold">${product.price}</p>
          <button className="bg-[#01ccf1] text-gray-100 p-2 rounded hover:bg-blue-500 " onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="bg-gray-600 text-gray-100 p-2 rounded hover:bg-blue-500 " onClick={() => navigate("/")}>Checkout Cart<span>&#8594;</span></button>
          </div>
        </div>
      ) : (
        <div>No product found</div>
      )}
    </div>
  );
};

export default ProductPage;
