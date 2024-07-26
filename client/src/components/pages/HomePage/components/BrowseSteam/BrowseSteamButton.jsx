import PropTypes from "prop-types";

const BrowseSteamButton = ({ children }) => {
    return (
        <a href="#" className="gradient-browse-btn px-8 py-[0.9rem] rounded-[0.2rem] uppercase text-lg tracking-wider">
            {children}
        </a>
    );
};

BrowseSteamButton.propTypes = {
    children: PropTypes.string.isRequired
};

export default BrowseSteamButton;
