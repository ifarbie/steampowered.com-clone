import usePageTitle from "../../../../../hooks/usePageTitle";
import RegisterSelectBox from "./RegisterSelectBox";
import RegisterButton from "./RegisterButton";
import RegisterAgeCheck from "./RegisterAgeCheck";
import { registerUser } from "../../../../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

// eslint-disable-next-line react/prop-types
const RegisterForm = ({ setFormErrors }) => {
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  usePageTitle("Create Your Account");

  const register = async (values) => {
    try {
      setErrorMsg("");
      await dispatch(registerUser(values)).unwrap();
      navigate("/");
    } catch (error) {
      setErrorMsg(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      passwordConfirm: "",
      region: "Indonesia",
      isAgeCheck: false,
    },
    onSubmit: register,
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .required()
        .min(6)
        .lowercase()
        .trim()
        .matches(/^[a-z0-9]+$/, "Username cannot contain spaces or special characters and must be lowercase"),
      // eslint-disable-next-line no-useless-escape
      email: Yup.string()
        .required("Email address required")
        // eslint-disable-next-line no-useless-escape
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email address"),
      password: Yup.string().required().min(8),
      passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "Confirm password must match"),
      region: Yup.string().required("Country of residence is required"),
      isAgeCheck: Yup.boolean().oneOf([true], "You must agree to the Steam Subscriber Agreement to continue."),
    }),
  });

  useEffect(() => {
    if (Object.keys(formik.touched).length === 0) {
      return;
    } else {
      setFormErrors(Object.values(formik.errors));
    }
  }, [formik.errors, setFormErrors, formik.touched]);

  return (
    <form className="text-[#b8b6b4] flex flex-col gap-8" onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="username" className="block text-base">
          Account Name
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className={`shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%] ${formik.touched.username && formik.errors.username ? "border-[#c15755] border" : ""}`}
          onChange={formik.handleChange}
          value={formik.values.username}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-base">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          name="email"
          className={`shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%] ${formik.touched.email && formik.errors.email ? "border-[#c15755] border" : ""}`}
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor="region" className="block text-base">
          Country of Residence
        </label>
        <RegisterSelectBox formik={formik} />
      </div>
      <div>
        <label htmlFor="password" className="block text-base">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className={`shadow-lg w-full p-[0.5rem] rounded-sm bg-[rgb(50,53,60)] text-[#c7d5e0] lg:w-[37%] ${formik.touched.password && formik.errors.password ? "border-[#c15755] border" : ""}`}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-base">
          Confirm Password
        </label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          className={`shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%] ${formik.touched.passwordConfirm && formik.errors.passwordConfirm ? "border-[#c15755] border" : ""}`}
          onChange={formik.handleChange}
          value={formik.values.passwordConfirm}
        />
      </div>
      <RegisterAgeCheck formik={formik} />
      <RegisterButton formik={formik} />
      {errorMsg ? (
        <div className="bg-black text-white p-3 border-2 border-[#b44040] text-lg">
          <p>{errorMsg}</p>
        </div>
      ) : null}
    </form>
  );
};

export default RegisterForm;
