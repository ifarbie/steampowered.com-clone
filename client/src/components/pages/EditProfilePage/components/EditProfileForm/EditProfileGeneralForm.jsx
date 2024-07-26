import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../../../../redux/slices/authSlice";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRegions } from "../../../../../hooks/api/useGetRegions";

const EditProfileGeneralForm = () => {
  const user = useSelector((state) => state.auth.user);
  const [generalErrorMsg, setGeneralErrorMsg] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const regions = useGetRegions();

  const editUserGeneralhandler = async (values) => {
    try {
      setGeneralErrorMsg("");
      await dispatch(editUser(values)).unwrap();
      navigate("/profile");
    } catch (error) {
      setGeneralErrorMsg(error.message);
    }
  };

  const generalFormik = useFormik({
    initialValues: {
      username: user?.username || "",
      email: user?.email || "",
      region: user?.Region.name || "",
      bio: user?.bio || "",
    },
    onSubmit: editUserGeneralhandler,
    enableReinitialize: true,
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(6)
        .lowercase()
        .trim()
        .matches(/^[a-z0-9]+$/, "username cannot contain spaces or special characters and must be lowercase"),
      email: Yup.string()
        // eslint-disable-next-line no-useless-escape
        .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "invalid email address"),
      region: Yup.string().required(),
    }),
  });

  return (
    <>
      {generalErrorMsg ? <p className="text-sm px-2 text-[#c15755] font-medium">{generalErrorMsg}</p> : null}
      <div className="p-2 border-b-2 border-[#e4e4e4]/[.1]">GENERAL</div>
      <form className="p-3 text-[#acb2b8] flex flex-col gap-5 mb-16" onSubmit={generalFormik.handleSubmit}>
        <div>
          <label htmlFor="username" className="block text-base">
            ACCOUNT NAME
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none ${generalFormik.touched.username && generalFormik.errors.username ? "border-[#c15755] border" : ""}`}
            value={generalFormik.values.username}
            onChange={generalFormik.handleChange}
          />
          {generalFormik.touched.username && generalFormik.errors.username ? <div className="text-xs pt-1 px-1 md:text-sm lg:text-base">{generalFormik.errors.username}</div> : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-base">
            EMAIL ADDRESS
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none ${generalFormik.touched.email && generalFormik.errors.email ? "border-[#c15755] border" : ""}`}
            value={generalFormik.values.email}
            onChange={generalFormik.handleChange}
          />
          {generalFormik.touched.email && generalFormik.errors.email ? <div className="text-xs pt-1 px-1 md:text-sm lg:text-base">{generalFormik.errors.email}</div> : null}
        </div>
        <div>
          <label htmlFor="region" className="block text-base">
            COUNTRY (?)
          </label>
          <select
            id="region"
            name="region"
            className={`shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] ${generalFormik.touched.region && generalFormik.errors.region ? "border-[#c15755] border" : ""}`}
            onChange={generalFormik.handleChange}
            value={generalFormik.values.region}
          >
            {regions?.map((region) => (
              <option value={region.name} key={region.name}>
                {region.name}
              </option>
            ))}
          </select>
          {generalFormik.touched.region && generalFormik.errors.region ? <div className="text-xs pt-1 px-1 md:text-sm lg:text-base">{generalFormik.errors.region}</div> : null}
        </div>
        <div>
          <label htmlFor="bio" className="block text-base">
            BIO / SUMMARY
          </label>
          <textarea type="textarea" id="bio" name="bio" className={`box-shadow-inner w-full py-2 px-3 rounded-[0.2rem] bg-black/25 text-[#c7d5e0] focus:outline-none`} value={generalFormik.values.bio} onChange={generalFormik.handleChange} />
        </div>
        <div className="flex gap-4 justify-end text-[#dfe3e6]">
          <button type="button" className={`block text-shadow w-[200px] p-2 rounded-sm bg-[#3d4450] shadow-moreMenu hover:text-white hover:drop-shadow-2xl hover:bg-[#464d58] lg:shadow-lg`} onClick={generalFormik.handleReset}>
            Cancel
          </button>
          <button
            type="submit"
            className={`block text-shadow w-[200px] p-2 rounded-sm bg-gradient-to-r from-sky-500 to-blue-600 shadow-moreMenu hover:text-white hover:drop-shadow-2xl hover:from-sky-400 hover:to-blue-500 lg:shadow-lg`}
            disabled={generalFormik.isSubmitting}
          >
            {generalFormik.isSubmitting ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </>
  );
};

export default EditProfileGeneralForm;
