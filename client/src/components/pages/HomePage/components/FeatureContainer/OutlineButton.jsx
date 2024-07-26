import PropTypes from "prop-types";

const OutlineButton = ({ children, classProps = "" }) => {
    return <button className={`text-white uppercase border border-[#ffffff66] px-3 py-0.5 text-sm hover:border-white ${classProps}`}>{children}</button>;
};

OutlineButton.propTypes = {
    children: PropTypes.string,
    classProps: PropTypes.string,
};

export default OutlineButton;
