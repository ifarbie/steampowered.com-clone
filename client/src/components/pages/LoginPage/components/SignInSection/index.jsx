import LoginForm from "./LoginForm";
import LoginWithQR from "./LoginWithQR";

const SignInSection = () => {
  return (
    <div className="bg-[url('https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask_mobile.jpg')] md:bg-[url('https://store.akamai.steamstatic.com/public/shared/images/joinsteam/new_login_bg_strong_mask.jpg')] bg-no-repeat text-white bg-center">
      <div className="mx-auto p-8 max-w-[1200px] md:px-2 md:pt-20 md:pb-32">
        <h1 className="mb-20 text-center font-extrabold text-[28px] md:text-left md:w-[720px] md:mb-8 md:pl-3 md:mx-auto md:tracking-tighter">Sign in</h1>
        {/* Sign in Container */}
        <div className="flex flex-col md:flex-row md:bg-[#181a21] md:w-[720px] md:mx-auto md:rounded md:px-9 md:py-7 md:gap-9 md:shadow-lg">
          {/* Sign in Form */}
          <LoginForm />
          {/* Sign in with QR */}
          <LoginWithQR />
        </div>
      </div>
    </div>
  );
};

export default SignInSection;
