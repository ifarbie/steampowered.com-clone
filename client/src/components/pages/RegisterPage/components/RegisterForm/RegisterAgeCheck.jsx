/* eslint-disable react/prop-types */
const RegisterAgeCheck = ({ formik }) => {
  return (
    <div className={`flex lg:w-[85%] ${formik.touched.isAgeCheck && formik.errors.isAgeCheck ? "border-[#c15755] border" : ""}`}>
      <span className="text-sm">
        <input className="mr-1 w-[18px] h-[18px]" type="checkbox" id="isAgeCheck" name="isAgeCheck" onChange={formik.handleChange} checked={formik.values.isAgeCheck} />I am 13 years of age or older and agree to the terms of the{" "}
        <span className="text-white cursor-pointer hover:text-linkHoverColor">Steam Subscriber Agreement</span> and the <span className="text-white cursor-pointer hover:text-linkHoverColor">Valve Privacy Policy</span>.
      </span>
    </div>
  );
};

export default RegisterAgeCheck;
