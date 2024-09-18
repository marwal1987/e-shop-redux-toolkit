import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import logoShopping from "src/assets/logoShopping.webp"; // importerar bilden för att undvika potentiella problem vid byggning eller deploy (t.ex. med Vite)

const Header = () => {
  const cartItemsCount = useSelector((state) => state.cart.items.length); // Hämtar antal varor i kundvagnen från Redux

  return (
    <header className="bg-[#3a3f54] sticky top-0 flex max-w-full items-center justify-between p-6 text-white">

      <img
        src={logoShopping}
        alt="logo"
        loading="lazy"
        className="w-6 rounded-full"
      />
      <NavLink to="/">
        <FaHome size={20} />
      </NavLink>

      <NavLink to="/cart">
        <div className="flex gap-2">
          <FaShoppingCart size={20} />
          <span className="text-xs text-[#f3929c] font-bold">
            {cartItemsCount}
          </span>
        </div>
      </NavLink>
    </header>
  );
};

export default Header;
