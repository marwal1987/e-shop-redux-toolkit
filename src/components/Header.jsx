import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const cartItemsCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header className="bg-[#3a3f54] sticky top-0 flex max-w-full items-center justify-between p-4 text-white">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
        >
          <path d="M3 10l9-9 9 9V21a1 0 0 0 0-1 1h-5a1 1 0 0 1-1-1v-6h-4v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v1Z" />
        </svg>
      </NavLink>

      <NavLink to="/cart" aria-label="Cart" className="flex items-center gap-2">
        Cart
        <span className="text-xs text-[#f3929c] font-bold ">
          {cartItemsCount}
        </span>
      </NavLink>
    </header>
  );
};

export default Header;
