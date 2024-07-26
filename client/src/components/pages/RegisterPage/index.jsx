import Header from "../../elements/Header/Header";
import Footer from "../../elements/Footer/Footer";

import RegisterForm from "./components/RegisterForm";
import { useState } from "react";

const RegisterPage = () => {
  const [formErrors, setFormErrors] = useState([]);

  return (
    <>
      <Header />
      <main className="flex flex-col pb-32 min-h-screen bg-[#212429] bg-[url('https://store.akamai.steamstatic.com/public/shared/images/joinsteam/acct_creation_bg.jpg')] bg-cover bg-left bg-no-repeat justify-between smFooter:justify-normal lg:pt-5">
        <div className="mx-auto px-8 pt-5">
          {formErrors.length > 0 && (
            <div className="bg-black text-white p-3 border-2 border-[#b44040] text-lg">
              {formErrors.map((errorMessage) => (
                <p key={errorMessage}>{errorMessage}</p>
              ))} 
            </div>
          )}
          <h2 className="text-4xl font-thin my-8 tracking-wider text-white">CREATE YOUR ACCOUNT</h2>
          <RegisterForm setFormErrors={setFormErrors} />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default RegisterPage;
