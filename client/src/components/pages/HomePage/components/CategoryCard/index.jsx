import PropTypes from 'prop-types'

const CategoryCard = ({ image, bgColor, children }) => {
    return (
        <a href="#" className="block grow relative shrink-0 tracking-widest text-lg font-semibold shadow-card">
            <img src={image} alt="" className="w-full h-full" />
            <div className="uppercase absolute right-0 left-0 flex justify-center items-center bottom-7 z-10">
                <span className="drop-shadow-lg text-xs lg:text-lg">{children}</span>
            </div>
            <div className={`absolute top-0 right-0 left-0 bottom-0 ${bgColor}`}></div>
        </a>
    );
};


CategoryCard.propTypes = {
    image: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default CategoryCard;