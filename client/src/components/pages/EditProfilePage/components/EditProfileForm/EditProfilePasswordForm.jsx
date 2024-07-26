import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { editUser } from "../../../../../redux/slices/authSlice";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EditProfilePasswordForm = () => {
  const [changePasswordErrorMsg, setChangePasswordErrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const editUserPasswordHandler = async (values) => {
    try {
      setChangePasswordErrorMsg("");
      await dispatch(editUser(values)).unwrap();
      navigate("/profile");
    } catch (error) {
      setChangePasswordErrorMsg(error.message);
    }
  };

  const changePasswordFormik = useFormik({
    initialValues: {
      password: "",
      passwordConfirm: "",
    },
    onSubmit: editUserPasswordHandler,
    validationSchema: Yup.object().shape({
      password: Yup.string().required().min(8),
      passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "confirm password must match"),
    }),
  });

  return (
    <>
      {changePasswordErrorMsg ? <p className="text-sm px-2 text-[#c15755] font-medium">{changePasswordErrorMsg}</p> : null}
      <div className="p-2 border-b-2 border-[#e4e4e4]/[.1]">CHANGE PASSWORD</div>
      <form className="p-3 text-[#acb2b8] flex flex-col gap-5" onSubmit={changePasswordFormik.handleSubmit}>
        <div>
          <label htmlFor="password" className="block text-base">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none ${changePasswordFormik.touched.password && changePasswordFormik.errors.password ? "border-[#c15755] border" : ""}`}
            value={changePasswordFormik.values.password}
            onChange={changePasswordFormik.handleChange}
          />
          {changePasswordFormik.touched.password && changePasswordFormik.errors.password ? <div className="text-xs pt-1 px-1 md:text-sm lg:text-base">{changePasswordFormik.errors.password}</div> : null}
        </div>
        <div>
          <label htmlFor="passwordConfirm" className="block text-base">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none ${
              changePasswordFormik.touched.passwordConfirm && changePasswordFormik.errors.passwordConfirm ? "border-[#c15755] border" : ""
            }`}
            onChange={changePasswordFormik.handleChange}
            value={changePasswordFormik.values.passwordConfirm}
          />
          {changePasswordFormik.touched.passwordConfirm && changePasswordFormik.errors.passwordConfirm ? <div className="text-xs pt-1 px-1 md:text-sm lg:text-base">{changePasswordFormik.errors.passwordConfirm}</div> : null}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className={`block text-shadow text-[#c3e1f8] w-[200px] p-2 rounded-sm bg-gradient-to-r from-sky-500 to-blue-600 shadow-moreMenu hover:text-white hover:drop-shadow-2xl hover:from-sky-400 hover:to-blue-500 lg:shadow-lg`}
            disabled={changePasswordFormik.isSubmitting}
          >
            {changePasswordFormik.isSubmitting ? "Saving..." : "Save Password"}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfilePasswordForm;
