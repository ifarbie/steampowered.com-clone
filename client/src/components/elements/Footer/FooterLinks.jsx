import PropTypes from 'prop-types'

const FooterLinks = ({ children, isLast }) => {
  return (
    <a href='#' className={`hover:text-white text-gray-400 text-center w-full ${isLast ? "" : "border-r-2 border-gray-600"}`}>
        {children === "Steam" && (
            <i className="fa-brands fa-square-facebook"></i>
        )}
        {children === "@steam" && (
            <i className="fa-brands fa-square-x-twitter"></i>
        )}
        {children}
    </a>
  )
}

FooterLinks.propTypes = {
    children: PropTypes.string,
    isLast: PropTypes.bool,
}

export default FooterLinks

