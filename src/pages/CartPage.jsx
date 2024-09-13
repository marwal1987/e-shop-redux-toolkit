import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../store/slices/cartSlice';
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
    <div className="w-2/3 m-auto flex flex-col items-center justify-start h-screen gap-12 border-2 overflow-scroll ">
      <h1 className="text-2xl mt-12">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="flex flex-col items-center gap-12">
          <ul className="flex flex-col items-center gap-12">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                removeFromCart={() => dispatch(removeFromCart(item.id))} // Använd Redux för att ta bort produkter
              />
            ))}
          </ul>
          <p className="text-xl font-bold">
            Total: ${calculateTotal().toFixed(2)}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 m-2 rounded"
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
