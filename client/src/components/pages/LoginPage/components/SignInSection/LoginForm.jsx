import { useDispatch } from "react-redux";
import LoginModules from "../../login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../../../redux/slices/authSlice";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(""); 
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginUserHandler = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await dispatch(loginUser({ username, password })).unwrap();
      setIsLoading(false);
      navigate("/");
    } catch (errorMsg) {
      setErrorMsg(errorMsg);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-[280px] mx-auto md:m-0 md:w-full md:max-w-none">
      <form className="space-y-3" onSubmit={loginUserHandler}>
        <div>
          <label htmlFor="username" className="text-xs text-[#1999ff] font-medium">
            SIGN IN WITH ACCOUNT NAME
          </label>
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            className={`w-full rounded-sm px-3 py-2 bg-[#32353c] hover:bg-[#393c44] focus-visible:outline-none ${errorMsg ? "border-[#c15755] border" : ""}`}
            onChange={(e) => {
              setErrorMsg("");
              setUsername(e.target.value)
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-[#afafaf] text-xs font-medium">
            PASSWORD
          </label>
          <input
            value={password}
            type="password"
            id="password"
            name="password"
            className={`w-full rounded-sm px-3 py-2 bg-[#32353c] hover:bg-[#393c44] focus-visible:outline-none ${errorMsg ? "border-[#c15755] border" : ""}`}
            onChange={(e) => {
              setErrorMsg("");
              setPassword(e.target.value)
            }}
            required
          />
        </div>
        <div>
          <label className="flex items-center relative cursor-pointer gap-1">
            <input type="checkbox" htmlFor="remember_me" className={`${LoginModules.remember_me_check} cursor-pointer rounded-sm appearance-none bg-[#32353c] w-5 h-5 hover:bg-[#393c44]`} />
            <span className={`${LoginModules.remember_me_text} text-xs text-[#afafaf]`}>Remember Me</span>
          </label>
        </div>
        <div className="md:w-4/6 md:mx-auto">
          <button type="submit" className={`${LoginModules.login_page_btn} w-full text-white rounded-sm py-2 px-4 transition duration-300`} disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </button>
        </div>
      </form>
      <p className="text-center text-sm mt-4 mb-3 text-[#c15755] font-medium">{errorMsg ? errorMsg : "\u00A0"}</p>
      <div className="text-center">
        <span className="cursor-pointer underline text-[#dad9d9] font-light text-xs hover:text-white md:text-[#afafaf]">Help, I can&apos;t sign in</span>
      </div>
    </div>
  );
};

export default LoginForm;
