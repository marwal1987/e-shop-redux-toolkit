import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="bg-[#3a3f54] sticky top-0 flex max-w-full items-center justify-between p-4 text-white">
<svg width="50" height="60" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="50" r="30" stroke="#f3929cbb" strokeWidth="2" fill="#f3929c"/>
  <circle cx="70" cy="50" r="45" stroke="#f3929cbb" strokeWidth="8" fill="none"/>
  <text x="65%" y="50%" text-anchor="middle" dy=".4em" font-size="22" fill="white" font-family="Arial, sans-serif">
    STORE
  </text>
</svg>


      <NavLink to="/" className="flex items-center justify-center">
        <FaHome size={30} />
      </NavLink>

      <NavLink to="/cart" className="flex items-center gap-2">
        <FaShoppingCart size={30} />
        <span className="text-xs text-[#f3929c] font-bold">
          {cartItemsCount}
        </span>
      </NavLink>
    </header>
  );
};

export default Header;
