import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeadingFeatures from "./HeadingFeatures";
import { Swiper } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import OutlineButton from "./OutlineButton";
import PropTypes from "prop-types";
import { useCallback, useState } from "react";

const pagination = {
  clickable: true,
};

const FeatureContainer = ({ title, children, button = null, button2 = null, classProps = "", slidesPerView = 4, isUsingArrow = true, breakpoints = null, slidesPerGroup = 4, autoplay = false }) => {
  const [swiperRef, setSwiperRef] = useState();

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className={`max-w-[1100px] text-white mx-auto relative ${classProps}`}>
      
      <HeadingFeatures title={title}>
        {button && (
          <>
            <OutlineButton>{button}</OutlineButton>
            {button2 && <OutlineButton classProps="ml-2">{button2}</OutlineButton>}
          </>
        )}
      </HeadingFeatures>

      {isUsingArrow && (
        <div className="absolute gradient-arrow-left top-1/2 bottom-1/2 -translate-y-1/2 lg:flex py-[3.9rem] px-3 -left-[3.3rem] justify-center items-center cursor-pointer hidden" onClick={handlePrevious}>
          <div>
            <i className="fa-solid fa-chevron-left text-white text-5xl" />
          </div>
        </div>
      )}

      <Swiper loop navigation modules={[Navigation, Pagination, Autoplay]} spaceBetween={8} slidesPerView={slidesPerView} pagination={pagination} onSwiper={setSwiperRef} breakpoints={breakpoints} slidesPerGroup={slidesPerGroup} autoplay={autoplay}>
        {children}
      </Swiper>

      {isUsingArrow && (
        <div className="absolute gradient-arrow-right top-1/2 bottom-1/2 -translate-y-1/2 lg:flex py-[3.9rem] px-3 -right-[3.4rem] justify-center items-center cursor-pointer hidden" onClick={handleNext}>
          <div>
            <i className="fa-solid fa-chevron-right text-white text-5xl" />
          </div>
        </div>
      )}
      
    </div>
  );
};

FeatureContainer.propTypes = {
  title: PropTypes.string,
  button: PropTypes.string,
  button2: PropTypes.string,
  children: PropTypes.node,
  classProps: PropTypes.string,
  isUsingArrow: PropTypes.bool,
  slidesPerView: PropTypes.number,
  slidesPerGroup: PropTypes.number,
  breakpoints: PropTypes.object,
  autoplay: PropTypes.bool || PropTypes.object,
};

export default FeatureContainer;
