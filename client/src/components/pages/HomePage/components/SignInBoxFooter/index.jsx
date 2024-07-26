import SignInDialog from "../SignInDialog/SignInDialog";

const SignInBoxFooter = () => {
  return (
    <section className="bg-black flex flex-col py-8 items-center text-[#8f98a0]">
      <p className="text-3xl text-[#67C1F5] smFooter:text-2xl mb-7">Looking for recommendations?</p>
      <SignInDialog />
    </section>
  );
};

export default SignInBoxFooter;
