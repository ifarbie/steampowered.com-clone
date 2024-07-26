import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteUser } from "../../../../../redux/slices/authSlice";

const DeleteProfileButton = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deleteProfileHandler = async () => {
    try {
      const isConfirm = confirm("Are you sure you want to delete your account?");
      if (isConfirm) {
        await dispatch(deleteUser()).unwrap();
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-end px-3 mt-40">
      <button
        className={`block text-shadow text-[#c3e1f8] w-[200px] p-2 rounded-sm bg-gradient-to-r from-red-500 to-red-600 shadow-moreMenu hover:text-white hover:drop-shadow-2xl hover:from-red-400 hover:to-red-500 lg:shadow-lg`}
        disabled={isLoading}
        onClick={deleteProfileHandler}
      >
        {isLoading ? "Deleting..." : "Delete Account"}
      </button>
    </div>
  );
};

export default DeleteProfileButton;
