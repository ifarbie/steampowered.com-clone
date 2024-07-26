import { useEffect, useRef, useState } from "react";
import steamLogo from "../../../assets/images/steamlogo.png";
import { Link, useNavigate } from "react-router-dom";
import MobileMenuFooter from "./MobileMenuFooter";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/slices/authSlice";

const mobileMenus = ["login", "store", "community", "support"];
const desktopMenus = ["store", "community", "about", "support"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUsernameBoxOpen, setIsUsernameBoxOpen] = useState(false);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);

  const hamburgerBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const usernameBoxRef = useRef(null);
  const usernameBtnRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    await dispatch(logoutUser()).unwrap();
    navigate("/login");
  };

  const handleOutsideClick = (event) => {
    if (!mobileMenuRef.current.contains(event.target) && !hamburgerBtnRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
    if (!usernameBoxRef.current.contains(event.target) && !usernameBtnRef.current.contains(event.target)) {
      setIsUsernameBoxOpen(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {/* Hamburger Button */}
      {/* Mobile Menu */}
      <div ref={mobileMenuRef} id="mobile-menu" className={`bg-[#171a21] text-[#afb8b6] fixed top-0 left-0 h-full z-50 ${isMenuOpen ? "show" : ""}`}>
        <div className="grid grid-rows-4 gap-4">
          {mobileMenus.map((menu) => {
            const login = menu === "login" ? "/login" : "/";
            return (
              <Link to={login} key={menu} className="text-[1.2rem] p-4 border-b-[0.1vh] border-[#bcbcbc]">
                {menu.toUpperCase()}
              </Link>
            );
          })}
          <p className="px-2 text-[1rem] text-[#6f7071]">Change language</p>
          <p className="px-2 text-[1rem] text-[#6f7071]">Get the Steam Mobile App</p>
          <p className="px-2 text-[1rem] text-[#6f7071]">View Desktop website</p>
        </div>

        <MobileMenuFooter />
      </div>
      {/* Hamburger ON END */}
      {/* Hamburger Menu end */}

      {/* Header */}
      <header className="bg-[#171a21] w-full px-5 py-1 header-box-shadow">
        <div className="grid grid-cols-10 text-center text-white lg:grid-cols-4 lg:max-w-[1100px] mx-auto">
          <div className="col-span-1 flex justify-center items-center lg:hidden">
            {/* Hamburger Button */}
            <button id="hamburger-btn" ref={hamburgerBtnRef} className="text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="fa-solid fa-bars" style={{ color: "#ffffff" }} />
            </button>
          </div>
          <div className="flex -ml-10 justify-center items-center col-span-9 lg:col-span-1 lg:justify-start my-4 lg:ml-0">
            <Link to="/">
              <img src={steamLogo} className="w-[15vh] md:w-auto" alt="steam" />
            </Link>
          </div>
          <div className="hidden text-xl mt-[0.5vh] lg:flex lg:col-span-2 lg:justify-center lg:items-center lg:font-medium lg:gap-2">
            {desktopMenus.map((menu) => {
              const login = menu === "login" ? "/login" : "/";
              return (
                <Link key={menu} to={login} className="mr-2 hover:text-[#38a4d2] block text-[#dcdedf]">
                  {menu.toUpperCase()}
                </Link>
              );
            })}
          </div>
          <div className="mt-[0.001rem] hidden sm:hidden md:hidden lg:block lg:pt-1">
            <div className="flex justify-end gap-2 text-white text-xs items-start ">
              <button className="bg-[#5c7e10] p-1 px-2 transition duration-150 hover:bg-[#7ea64b]">
                <i className="fa-solid fa-download mr-2" />
                Install steam
              </button>
              {!isLogin ? (
                <div className="flex gap-2">
                  <Link to="/login" className="text-[#b8b6b4] hover:text-white">
                    login
                  </Link>
                  <span className="text-[#b8b6b4]">|</span>
                  <Link to="/register" href="register.html" className="text-[#b8b6b4] hover:text-white">
                    register
                  </Link>
                </div>
              ) : (
                <div className="flex gap-4 items-center">
                  <div ref={usernameBtnRef} className={`${isUsernameBoxOpen ? `text-white` : `text-[#b8b6b4]`}  self-start pt-1 cursor-pointer hover:text-white`} onClick={() => setIsUsernameBoxOpen(!isUsernameBoxOpen)}>
                  {user?.username} <i className="fa-solid fa-caret-down"></i>
                  </div>
                  <div
                    ref={usernameBoxRef}
                    className={`${
                      isUsernameBoxOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } shadow-[0_0_12px_rgb(0,0,0)] absolute bg-[#3D4450] z-10 top-8 -translate-x-40 text-[#dcdedf] text-sm w-[210px] transition-all duration-200`}
                  >
                    <Link to={"/profile"}>
                      <div className="text-left hover:text-[#171d25] cursor-pointer whitespace-nowrap hover:bg-white px-5 py-3">View my Profile</div>
                    </Link>
                    <div className="text-left hover:text-[#171d25] cursor-pointer px-5 py-3 truncate hover:bg-white">
                      Account details: <span className="text-[#4cb4ff]">{user?.username}</span>
                    </div>
                    <div className="text-left hover:text-[#171d25] cursor-pointer whitespace-nowrap hover:bg-white px-5 py-3">Store preferences</div>
                    <div className="text-left hover:text-[#171d25] cursor-pointer whitespace-nowrap hover:bg-white px-5 py-3">Change Language</div>
                    <div className="text-left hover:text-[#171d25] cursor-pointer whitespace-nowrap hover:bg-white px-5 py-3" onClick={logout}>
                      Sign out of account...
                    </div>
                  </div>
                  <Link to={"/profile"} className="p-0.5 background-avatar">
                    <img src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb.jpg" alt="" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      {/* header end */}
    </>
  );
};

export default Header;
