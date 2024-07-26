import { Link } from "react-router-dom";

const SignInButton = () => {
    return (
        <button>
            <Link to={"/login"} className="inline-block rounded-sm sign-in-btn text-[#D2E885] mb-6 mt-4 p-[1px] hover:text-white">
                <span className="block rounded-t-[0.25rem] px-4 py-1">Sign In</span>
            </Link>
        </button>
    );
};

export default SignInButton;
