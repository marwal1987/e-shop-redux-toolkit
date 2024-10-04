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
    window.scrollTo(0, 0);
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
    <div>
      <button
        className=" text-[#3a3f54] p-4 text-sm font-thin"
        onClick={handleBackClick}
      >
        &larr; Back to products
      </button>

      <div className=" container h-screen flex items-start justify-center mx-auto md:overflow-hidden overflow-scroll ">
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

            <div className="container flex md:flex-row flex-col  gap-24 items-center justify-center lg:p-12 ">
              <img
                src={product.image}
                alt={product.title}
                loading="lazy"
                className="max-w-96"
              />
              <div className="flex flex-col items-start justify-between gap-6  max-w-80">
                <h1 className="text-lg">{product.title}</h1>
                <p className="text-xl font-bold font-serif ">
                  ${product.price.toFixed(2)}
                </p>

                <p className="lg:text-md text-gray-600 font-serif">
                  {product.description}
                </p>
                <div className="flex items-center gap-6 container">
                  <button
                    className="bg-[#3a3f54] hover:bg-[#f3929c] w-full  text-gray-100 p-2 ease-in-out"
                    onClick={handleAddToCart}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
