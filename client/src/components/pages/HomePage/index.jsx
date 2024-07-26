import CartAndNavbar from "../../elements/CartAndNavbar/CartAndNavbar";
import Header from "../../elements/Header/Header";
import usePageTitle from "../../../hooks/usePageTitle";
import HomePageMain from "./components/HomePageMain";
import HomePageFooter from "./components/HomePageFooter";

const HomePage = () => {
  usePageTitle("Welcome to Steam");

  return (
    <>
      <Header />
      <CartAndNavbar />
      <HomePageMain /> 
      <HomePageFooter />
    </>
  );
};

export default HomePage;
