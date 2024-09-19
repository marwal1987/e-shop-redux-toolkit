import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../store/slices/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  // Hantera kvantitetsändring
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    dispatch(updateCartItemQuantity({ id: item.id, quantity: newQuantity }));
  };

  return (
    <li className="w-full flex items-center justify-between min-h-28 gap-6 shadow-sm p-6 border-b-2 border-gray-100">
      <div className="flex items-center justify-start gap-6 ">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-12 h-14"
        />
        <p className="text-md drop-shadow">{item.title.substring(0, 66)}</p>
      </div>

      <div className="flex items-center gap-6 ">
        <p className="font-bold font-mono text-xl drop-shadow">
          ${item.price.toFixed(2)}
        </p>
        <select
          className="p-2 rounded-md"
          value={item.quantity}
          onChange={handleQuantityChange}
        >
          {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>
        <div className="flex items-center gap-2">

          <button
            onClick={() => dispatch(removeFromCart(item))}
            className="text-red-500 hover:text-red-700 font-bold text-sm rounded-full"
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
