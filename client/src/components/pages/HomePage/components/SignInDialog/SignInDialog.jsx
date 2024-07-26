import { Link } from "react-router-dom";
import SignInButton from "./SignInButton";

const SignInDialog = () => {
    return (
        <>
            <span className="block">Sign in to view personalized recommendation</span>
            <SignInButton />
            <span className="block">
                Or{" "}
                <Link to="/register" className="text-white hover:text-[#66c0f4]">
                    sign up
                </Link>{" "}
                and join Steam for free
            </span>
        </>
    );
};

export default SignInDialog;
