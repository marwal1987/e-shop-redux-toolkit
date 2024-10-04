import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";

const Header = () => {
  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="bg-[#3a3f54] sticky top-0 z-20 flex max-w-full items-center justify-between p-4 text-white">
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30"
          cy="50"
          r="30"
          stroke="#f3929cbb"
          strokeWidth="2"
          fill="#f3929c"
        />
        <circle
          cx="70"
          cy="50"
          r="45"
          stroke="#f3929cbb"
          strokeWidth="8"
          fill="none"
        />
        <text
          x="55%"
          y="50%"
          textAnchor="middle"
          dy=".4em"
          fontSize="26"
          fill="white"
        >
          STORE
        </text>
      </svg>

      <NavLink
        to="/"
        aria-label="Home"
        className="flex items-center justify-center"
      >
<FaHome size="20" />
      </NavLink>

      <NavLink to="/cart" aria-label="Cart" className="flex items-center gap-2">
      <FaShoppingBag />
        <span className="text-xs text-[#f3929c] font-bold ">
          {cartItemsCount}
        </span>
      </NavLink>
    </header>
  );
};

export default Header;
