import PropTypes from "prop-types";

const GameTag = ({ children }) => {
  return <span className="mr-1 font-light text-xs bg-[#394148] px-[0.45rem] py-1 rounded-[0.15rem]">{children}</span>
};

GameTag.propTypes = {
  children: PropTypes.string,
};

export default GameTag;
