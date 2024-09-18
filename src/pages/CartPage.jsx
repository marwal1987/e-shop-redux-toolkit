import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import CartItem from "../components/CartItem";
import MetaTags from "../components/MetaTags";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items); // Hämta kundvagnens innehåll från Redux

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    dispatch(clearCart()); // Använd Redux action för att rensa kundvagnen
    navigate("/");
  };

  return (
    <div className="container m-auto mt-12 flex flex-col items-center justify-start h-screen gap-12 border-2 overflow-scroll ">
      {cartItems.length > 0 ? (
        <>
          <MetaTags
            title="Shopping Cart - E-shop"
            description="View and manage the items in your shopping cart. Complete your purchase on E-shop today!"
          />
          <h1 className="text-4xl font-bold mt-12 font-serif">Your Cart</h1>
          <div className=" flex flex-col items-center gap-12 ">
            <ul className="flex flex-col items-center gap-12 ">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
            <p className="text-3xl font-bold font-serif">
              Total: ${calculateTotal().toFixed(2)}
              <div className="text-sm font-extralight text-gray-500">
                (VAT included)
              </div>
            </p>
            <button
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
            onClick={() => navigate("/")}
          >
            Back to products
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
