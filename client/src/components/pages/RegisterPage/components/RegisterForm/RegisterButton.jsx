/* eslint-disable react/prop-types */
const RegisterButton = ({ formik }) => {
  return (
    <button
      type="submit"
      href="#"
      className={`block text-shadow text-[#c3e1f8] w-full p-2 rounded-sm bg-gradient-to-r from-sky-500 to-blue-600 shadow-moreMenu hover:text-white hover:drop-shadow-2xl hover:from-sky-400 hover:to-blue-500 lg:w-[23%] lg:shadow-lg`}
      disabled={formik.isSubmitting}
    >
      {formik.isSubmitting ? "Registering..." : "Continue"}
    </button>
  );
};

export default RegisterButton;
