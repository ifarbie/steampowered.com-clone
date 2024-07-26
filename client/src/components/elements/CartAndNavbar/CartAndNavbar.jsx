import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCarts } from "../../../API/cart";
import { useSelector } from "react-redux";

const CartAndNavbar = ({ cartCount }) => {
  const [fetchedCartCount, setFetchedCartCount] = useState(cartCount);
  const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    if (isLogin && cartCount === undefined) {
      const fetchCartCount = async () => {
        try {
          const carts = await getCarts();
          setFetchedCartCount(carts.cartCount);
        } catch (error) {
          console.error("Error fetching cart count:", error);
        }
      };

      fetchCartCount();
    }
  }, [isLogin, cartCount]);

  const navbarMenus = [
    "Your Store",
    "New & Noteworthy",
    "Categories",
    "Points Shop",
    "News",
    "Labs",
  ];

  const displayCartCount =
    cartCount !== undefined ? cartCount : fetchedCartCount;

  return (
    <div className="flex items-center flex-col text-white bg-no-repeat bg-[#1b2838] lg:px-4 lg:pt-3">
      {/* Cart */}
      <div className="text-sm hidden lg:max-w-[1100px] lg:flex lg:w-full">
        {isLogin && displayCartCount > 0 ? (
          <Link
            to="/cart"
            className="block bg-[#5c7e10] px-6 py-1 ml-auto hover:bg-[#7ea64b]"
          >
            <i className="fa-sharp fa-solid fa-cart-shopping" />{" "}
            <span className="text-xs">Cart ({displayCartCount})</span>
          </Link>
        ) : (
          <span></span>
        )}
      </div>

      {/* Feature: NavBar */}
      <nav className="w-full gradient-navbar-search lg:max-w-[1100px] lg:mt-1">
        <div className="lg:flex lg:justify-between">
          <ul className="flex flex-col lg:flex lg:flex-row lg:items-center">
            {navbarMenus.map((menu, index) => (
              <li key={index} className="">
                <Link
                  to="/"
                  className="drop-shadow-lg text-white py-2 px-5 h-full content-center block font-medium lg:text-sm link-navbar-search"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
          <div className="relative text-white w-full mt-2 mb-1 flex md:w-auto lg:mt-1">
            <input
              className="w-full mx-1 border h-7 pb-0 border-gray-700 bg-[#60859bfa] pl-1 rounded text-sm focus:outline-none shadow-inner hover:border-white hover:border-32 placeholder:italic placeholder:text-[#283d4b] lg:ml-auto placeholder:text-lg lg:pr-16 lg:pl-2 lg:placeholder:text-sm"
              type="search"
              name="search"
              placeholder="search"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-0.5 shadow-2xl"
            >
              <svg
                className="text-transparent h-6 w-6 fill-current"
                viewBox="0 0 54 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width={53}
                  height={52}
                  rx="1.5"
                  fill="#63B5E4"
                  stroke="#84C8EE"
                />
                <path
                  d="M25 32.2166L33.3018 25L42.4866 35.5659C43.2113 36.3996 43.123 37.6628 42.2893 38.3875L37.0064 42.9799C36.1727 43.7045 34.9095 43.6162 34.1848 42.7826L25 32.2166Z"
                  fill="#2A3E5A"
                />
                <circle
                  cx={21}
                  cy={19}
                  r={11}
                  stroke="#2A3E5A"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CartAndNavbar;
