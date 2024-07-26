import usePageTitle from "../../../hooks/usePageTitle";
import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";
import NewToSteamSection from "./components/NewToSteamSection";
import SignInSection from "./components/SignInSection";
import useGuestOnly from "../../../hooks/useGuestOnly";

const LoginPage = () => {
  usePageTitle("Sign In");
  useGuestOnly();

  return (
    <>
      <Header />
      <SignInSection />
      <NewToSteamSection />
      <div className="hidden lg:block">
        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
