import LoginModules from "../../login.module.css";

const NewToSteamSection = () => {
  return (
    <div className="text-white text-center pt-10 pb-28 justify-center md:flex md:max-w-[1200px] md:mx-auto md:gap-16">
      <div className="">
        <div className="font-extrabold text-xl mb-3">New to Steam?</div>
        <button className={`${LoginModules.create_account_btn} px-5 py-1 rounded-sm text-sm`}>
          <a href="/register">Create an account</a>
        </button>
      </div>
      <div className="flex flex-col justify-center mt-7 w-[300px] mx-auto text-sm text-[#b8b6b4] md:m-0">
        <p className="">It&apos;s free and easy. Discover thousands of games to play with millions of new friends.</p>
        <p className="cursor-pointer underline hover:text-white hover:no-underline">Learn more about Steam</p>
      </div>
    </div>
  );
};

export default NewToSteamSection;
