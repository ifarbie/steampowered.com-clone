import { useGetRegions } from "@/hooks/api/useGetRegions";

/* eslint-disable react/prop-types */
const RegisterSelectBox = ({ formik }) => {
  const regions = useGetRegions();

  return (
    <select
      id="region"
      name="region"
      className={`shadow-lg w-full p-[0.5rem] rounded-sm bg-[#32353C] text-[#c7d5e0] lg:w-[37%] ${formik.touched.region && formik.errors.region ? "border-[#c15755] border" : ""}`}
      onChange={formik.handleChange}
    >
      {regions?.map((region) => (
        <option value={region.name} key={region.name}>
          {region.name}
        </option>
      ))}
    </select>
  );
};

export default RegisterSelectBox;
