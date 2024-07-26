import LoginModules from "../../login.module.css"

const LoginWithQR = () => {
  return (
    <div className={`${LoginModules.login_with_qr} hidden md:flex flex-col mt-6 md:mt-0`}>
      <span className="text-xs text-[#1999ff] font-medium mt-1 mb-0.5 leading-normal">OR SIGN IN WITH QR</span>
      {/* QR Code Image */}
      <div className="bg-white rounded-lg">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="QR Code" />
      </div>
      {/* Paragraf for Mobile App */}
      <p className="text-xs mt-4 text-center text-[#afafaf] ">
        Use the <span className="underline cursor-pointer hover:text-[#d6d6d6]">Steam Mobile App</span> to sign in via QR code
      </p>
    </div>
  );
};

export default LoginWithQR;
