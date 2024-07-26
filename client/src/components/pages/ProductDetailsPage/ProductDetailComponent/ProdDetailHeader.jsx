import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState, useEffect } from "react";

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const options = { day: "numeric", month: "short", year: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const [month, day, year] = formattedDate.replace(",", "").split(" ");
  return `${day} ${month}, ${year}`;
};

const ProdDetailHeader = (props) => {
  const product = props.products;

  const [mainContent, setMainContent] = useState({
    src: "",
    type: "video",
  });

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (product && product.video) {
      setMainContent({
        src: product.video,
        type: "video",
      });
    }
  }, [product]);

  const handleThumbnailClick = (src, type, index) => {
    setMainContent({ src, type });
    setActiveSlide(index);
  };

  const isRecommendLength = product?.Reviews?.filter(
    (review) => review.isRecommend === true
  ).length;

  return (
    <>
      {/* product detail directory */}
      <div id="directory" className="text-fontColor text-sm">
        <p>
          {product?.Categories?.map((category, index) => {
            return <span key={index}>{category.name} &gt; </span>;
          })}
        </p>
      </div>
      {/* game title */}
      <div id="gameName" className="flex justify-between">
        <h1 className="text-3xl mb-4">{product.name}</h1>
        <a href="#">
          <button className="bg-buttonColorBg text-buttonColor pt-2 pr-4 pb-2 pl-4 rounded-sm">
            Community Hub
          </button>
        </a>
      </div>
      {/* product detail side desc */}
      <div
        id="headerBg"
        className="flex flex-row-reverse pb-4 max-w-full max-h-full"
      >
        <div
          id="sideDesc"
          className="ml-4 min-w-60 w-screen max-w-full max-h-full"
        >
          <img
            src={product.product_thumbnail}
            alt="header"
            className="w-full"
          />
          <p className="mobileH1 text-3xl mt-4">{product.name}</p>
          <div className="quickDesc">
            <p className="text-sm my-2">{product.short_description}</p>
          </div>
          {/* game ratings */}
          <div className="reviews flex text-xs">
            <div className="reviewsHeader flex-col text-fontColor">
              <p>
                <a href="#">Recent Reviews:</a>
              </p>
              <p>
                <a href="#">All Reviews:</a>
              </p>
              <p className="leading-8">
                <a href="#">Release Date:</a>
              </p>
              <p>
                <a href="#">Developer:</a>
              </p>
              <p>
                <a href="#">Publisher:</a>
              </p>
            </div>
            <div className="reviewsScore ml-4 text-buttonColor flex flex-col">
              <span
                className={`${
                  isRecommendLength < 10 ? "text-red-500" : "text-blue-500"
                }`}
              >
                {isRecommendLength < 5 ? "Negative" : "Positive"}
              </span>
              <span
                className={`${
                  isRecommendLength < 10 ? "text-red-500" : "text-blue-500"
                }`}
              >
                {isRecommendLength < 5 ? "Negative" : "Positive"}
              </span>
              <span className="text-fontColor leading-8">
                {formatDate(product.release_date)}
              </span>
              <span>{product.developer}</span>
              <span>{product.publisher}</span>
            </div>
          </div>
          {/* game tags */}
          <div className="genreTag mt-2 mb-2 text-xs w-full">
            <p className="text-fontColor">
              Popular user-defined tags for this product:
            </p>
            {product?.Categories?.map((category, index) => {
              return (
                <span
                  key={index}
                  className="text-buttonColor bg-greyBg rounded-sm py-1 px-1.5 mr-0.5"
                >
                  {category.name}
                </span>
              );
            })}
          </div>
        </div>
        {/* game preview */}
        <div id="mainVideo" className="w-full h-full">
          {mainContent.type === "video" ? (
            <video controls src={mainContent.src} type="video/mp4"></video>
          ) : (
            <img src={mainContent.src} alt="Main Preview" className="w-full" />
          )}
          <div className="thumbnails flex justify-between gap-1 mt-1 w-full h-full">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              slidesPerView={5}
              spaceBetween={5}
              className="lg:w-prodSliderSize lg:h-auto"
              scrollbar={{ draggable: true }}
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            >
              {product?.ScrollThumbnails?.map((thumbnail, index) => (
                <SwiperSlide key={index}>
                  {thumbnail.type === "video" ? (
                    <video
                      src={thumbnail.img}
                      type={thumbnail.type}
                      className={`thumbnail ${
                        activeSlide === index ? "border-white border-2" : ""
                      }`}
                      onClick={() =>
                        handleThumbnailClick(thumbnail.img, "video", index)
                      }
                    ></video>
                  ) : (
                    <img
                      src={thumbnail.img}
                      type={thumbnail.type}
                      alt={`Screenshot ${index + 1}`}
                      className={`thumbnail ${
                        activeSlide === index ? "border-white border-2" : ""
                      }`}
                      onClick={() =>
                        handleThumbnailClick(thumbnail.img, "image", index)
                      }
                    />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/* sign in question */}
      <div id="question" className="bg-greyBg text-sm p-3">
        <p>
          <a href="#" className="text-white">
            Sign In
          </a>
          to add this item to your wishlist, follow it, or mark it as ignored
        </p>
      </div>
    </>
  );
};

export default ProdDetailHeader;
