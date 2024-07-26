import { useDispatch } from "react-redux";
import { fetchUserData } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const useNeedLogin = async () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      await dispatch(fetchUserData()).unwrap();
    } catch (error) {
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
};

export default useNeedLogin;
