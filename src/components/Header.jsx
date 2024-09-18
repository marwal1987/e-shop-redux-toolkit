import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import logoShopping from "../assets/logoShopping.webp"; // importerar bilden för att undvika potentiella problem vid byggning eller deploy (t.ex. med Vite)

const Header = () => {
  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="bg-[#3a3f54] sticky top-0 flex max-w-full items-center justify-between p-4 text-white">
      <img
        src={logoShopping}
        alt="logo"
        loading="lazy"
        className="w-6 rounded-full"
      />
      <NavLink to="/" className="flex items-center justify-center">
        <FaHome size={20} />
      </NavLink>

      <NavLink to="/cart" className="flex items-center gap-2">
        <FaShoppingCart size={20} />
        <span className="text-xs text-[#f3929c] font-bold">
          {cartItemsCount}
        </span>
      </NavLink>
    </header>
  );
};

export default Header;
