import PropTypes from "prop-types";

const HeadingFeatures = ({ children = null, title }) => {
    return (
        <div className="flex justify-between items-end mb-1.5">
            <h2 className="uppercase tracking-wider">{title}</h2>
            {children && <div className="flex-1 text-right">{children}</div>}
        </div>
    );
};

HeadingFeatures.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
};

export default HeadingFeatures;
