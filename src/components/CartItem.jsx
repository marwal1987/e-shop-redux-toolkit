import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className="w-2/3 grid grid-cols-3 gap-12 items-center shadow-lg p-4">
      <img src={item.image} alt={item.title} className="max-w-[50%]" />
      <p>{item.title}</p>
      <div className="flex items-center justify-around">

      <p className="font-bold">${item.price.toFixed(2)}</p>
      <button
        onClick={() => dispatch(removeFromCart(item.id))} // Använd Redux för att ta bort produkter
        className="flex items-center justify-center"
        >
        <FaTrashAlt
          className="font-bold text-red-500 hover:text-red-700"
          />
      </button>
          </div>
    </li>
  );
};

export default CartItem;
