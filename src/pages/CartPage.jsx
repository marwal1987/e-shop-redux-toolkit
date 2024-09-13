import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/slices/cartSlice";
import CartItem from "../components/CartItem";
import { useNavigate } from "react-router-dom";

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
    <div className="w-2/3 m-auto mt-12 flex flex-col items-center justify-start h-screen gap-12 border-2 overflow-scroll ">
      <h1 className="text-4xl font-bold mt-12">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col items-center gap-12 ">
          <ul className="flex flex-col items-center gap-12 ">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={() => dispatch(removeFromCart(item.id))} // Använd Redux för att ta bort produkter
              />
            ))}
          </ul>
          <p className="text-3xl font-bold font-serif">
            Total: ${calculateTotal().toFixed(2)}
            <p className="text-sm font-extralight text-gray-500">
              (VAT included)
            </p>
          </p>
          <button
            className="hover:bg-[#3a3f54] bg-green-400 text-gray-900 hover:text-gray-600 font-bold py-2 px-4 ml-2 m-2 rounded"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h3 className="max-w-full h-screen">Your cart is empty.</h3>
      )}
    </div>
  );
};

export default CartPage;
