import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById, clearProduct } from "../store/slices/productSlice"; // Importera thunk
import { addToCart } from "../store/slices/cartSlice";
import MetaTags from "../components/MetaTags";

const ProductPage = () => {
  const { id } = useParams(); // Hämta produktens id från URL:en
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Hämtar data från Redux store
  const product = useSelector((state) => state.products.selectedProduct);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    dispatch(clearProduct());
    dispatch(fetchProductById(id));
    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      {status === "loading" && (
        <div className="max-w-full h-screen flex flex-col items-center justify-center m-auto">
          Loading product...
        </div>
      )}

      {status === "failed" && (
        <div className="max-w-full h-screen flex flex-col items-center justify-center m-auto">
          Product not found
        </div>
      )}

      {status === "succeeded" && product && (
        <>
          <MetaTags
            title={`Buy ${product.title} - E-shop`}
            description={`Learn more about ${product.title}. Price: $${product.price}. Buy it on E-shop now!`}
          />
          <h1 className="text-4xl font-bold lg:m-12 font-serif">
            Product Details
          </h1>
          <div className="max-w-full flex lg:flex-row flex-col gap-12 items-center justify-center shadow-lg lg:p-12 p-6 border-b-2 border-gray-200">
            <img
              src={product.image}
              alt={product.title}
              loading="lazy"
              className="h-72 mx-auto"
            />
            <div className="flex flex-col items-start justify-between lg:gap-12 gap-6 max-w-sm">
              <h1 className="text-2xl font-bold">{product.title}</h1>
              <p className="text-lg text-gray-600 font-serif">
                {product.description}
              </p>
              <p className="text-2xl font-bold font-serif ">
                ${product.price.toFixed(2)}
              </p>
              <div className="flex gap-6">
                <button
                  className="bg-[#f3929c] text-gray-100 p-2 rounded font-bold hover:bg-[#3a3f54] "
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <button
                  className="bg-[#3a3f54] text-gray-100 p-2 rounded hover:bg-[#333] "
                  onClick={handleBackClick}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
