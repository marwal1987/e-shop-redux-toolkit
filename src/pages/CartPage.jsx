import React, { Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import MetaTags from "../components/MetaTags";

// Lazy load CartItem komponenten
const CartItem = React.lazy(() => import("../components/CartItem"));

const CartPage = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems); // Hämta kundvagnens innehåll från Redux
  const dispatch = useDispatch();

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    dispatch(clearCart()); // Använd Redux action för att rensa kundvagnen
    navigate("/");
  };

  return (
    <div className="container m-auto flex flex-col items-center justify-start h-screen border-2">
      <MetaTags
        title="Shopping Cart - E-shop"
        description="View and manage the items in your shopping cart. Complete your purchase on E-shop today!"
      />
      {cartItems.length > 0 ? (
        <>
          <h1 className="text-4xl font-bold mt-12 font-serif">Your Cart</h1>
          <div className=" flex flex-col items-center gap-12 overflow-scroll">
            <Suspense fallback={<div>Loading item...</div>}>
              <ul className="flex flex-col items-center gap-6 ">
                {cartItems.map((item) => (
                  <CartItem item={item} key={item.id} />
                ))}
              </ul>
            </Suspense>

            <p className="text-3xl font-bold font-mono ">
              Total: ${calculateTotal().toFixed(2)}
              <span className="text-sm align-super font-extralight text-gray-500">
                (VAT incl.)
              </span>
            </p>
            <button
              aria-label="Proceed to checkout"
              className="bg-[#3a3f54] hover:bg-green-400 text-gray-100 font-bold py-2 px-4 ml-2 m-2 rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="max-w-full h-screen flex flex-col items-center gap-12">
          <h1 className="text-4xl font-bold mt-12 font-serif">
            Your cart is empty!
          </h1>
          <button
            className="bg-[#3a3f54] hover:bg-[#f3929c] text-gray-100 font-bold py-2 px-4 ml-2 m-2 rounded"
            onClick={() => navigate("/", { replace: true })}
          >
            Back to products
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
