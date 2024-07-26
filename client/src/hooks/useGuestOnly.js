import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useGuestOnly = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.auth.isLogin);

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);
};

export default useGuestOnly;
