import { useSelector } from "react-redux";
import Footer from "../../../../elements/Footer/Footer";
import SignInBoxFooter from "../SignInBoxFooter";

const HomePageFooter = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <div className="bg-[#1B2838] pb-16">
      {!isLogin && <SignInBoxFooter />}
      <Footer />
    </div>
  );
};

export default HomePageFooter;
