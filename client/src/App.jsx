import "./assets/index.css";
import "./assets/cart.css";
import "./assets/homepage.css";
import "./assets/style.css";
import "./assets/productDetailStyles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import CartPage from "./components/pages/CartPage";
import ProductDetailsPage from "./components/pages/ProductDetailsPage";
import ProfilePage from "./components/pages/ProfilePage";
import AppInitializer from "./AppInitializer";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditProfilePage from "./components/pages/EditProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/product/:id",
    element: <ProductDetailsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/profile/edit",
    element: <EditProfilePage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <AppInitializer>
        <RouterProvider router={router} />
      </AppInitializer>
    </Provider>
  );
}

export default App;
