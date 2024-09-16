import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cartSlice";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <li className="w-full flex items-center justify-between min-h-28 gap-12 shadow-lg p-4 border-b-2 border-gray-100 ">
      <div className="flex items-center justify-start gap-12 ">
        <img src={item.image} alt={item.title} className="w-12 h-14" />
        <p className="text-md  drop-shadow">{item.title}</p>
      </div>

      <div className="flex items-center justify-between gap-6 ">
        <p className="font-bold font-serif text-xl drop-shadow">
          ${item.price.toFixed(2)}
        </p>
        <button
          onClick={() => dispatch(removeFromCart(item.id))} // Använd Redux för att ta bort produkter
          className=""
        >
          <FaTrashAlt className="font-bold text-red-500 hover:text-red-700" />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
