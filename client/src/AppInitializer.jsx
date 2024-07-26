import { useDispatch } from "react-redux";
import { fetchUserData } from "./redux/slices/authSlice";
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const AppInitializer = ({ children }) => {
  const dispatch = useDispatch();

  const checkLogin = async () => {
    await dispatch(fetchUserData()).unwrap();
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return <>{children}</>;
};

export default AppInitializer;
