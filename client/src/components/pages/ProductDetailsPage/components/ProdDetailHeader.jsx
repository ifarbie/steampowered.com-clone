import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState, useEffect } from 'react';
import { formatDate } from '../../../../utils/functions';
import { Link } from 'react-router-dom';

const breakpoints = {
  768: {
    slidesPerView: 5,
  },
};

const ProdDetailHeader = ({ product }) => {
  const [mainContent, setMainContent] = useState({
    src: '',
    type: 'video',
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const isRecommendLength = product?.Reviews?.filter((review) => review.isRecommend === true).length;

  const handleThumbnailClick = (src, type, index) => {
    setMainContent({ src, type });
    setActiveSlide(index);
  };

  useEffect(() => {
    if (product && product.video) {
      setMainContent({
        src: product.video,
        type: 'video',
      });
    }
  }, [product]);

  console.log(product);

  return (
    <>
      <div className='md:px-3 lg:px-0 hidden md:block'>
        {/* product detail directory */}
        <div className='text-[#8A97A0] text-sm'>
          <p className='capitalize'>
            <span>All Games &gt; </span>
            <span>{product?.Categories?.[0].name} &gt; </span>
            <span>{product?.name}</span>
          </p>
        </div>

        {/* game title */}
        <div className='justify-between md:flex'>
          <h1 className='text-3xl mb-4 text-white'>{product.name}</h1>
          <Link to={'#'}>
            <button className='bg-buttonColorBg text-buttonColor pt-2 pr-4 pb-2 pl-4 rounded-sm'>Community Hub</button>
          </Link>
        </div>
      </div>

      <div className='md:px-3 lg:flex lg:flex-row-reverse lg:px-0 lg:gap-3'>
        {/* container game header with no video/thumbnails */}
        <div className='bg-[#121a24] md:px-5 md:bg-gradient-to-r md:from-[#1b2838] md:to-[#121a24] md:pb-3 lg:px-0 lg:max-w-[40%]'>
          <div className='md:mb-5 md:flex md:gap-2 lg:block'>
            <div className='w-full md:flex-1'>
              <img src={product.product_thumbnail} alt='header' className='w-full' />
            </div>
            {/* md:hidden */}
            <div className='px-2 space-y-3 pt-3 pb-4 md:hidden'>
              <div className='text-2xl text-white font-semibold'>
                <h2>{product.name}</h2>
              </div>
              <div className='flex text-[13px]'>
                <div className='flex-col text-[#8A97A0] mr-2'>
                  <p>Developer</p>
                  <p>Publisher</p>
                  <p>Released</p>
                </div>
                <div className='text-buttonColor flex flex-col'>
                  <span>{product.developer}</span>
                  <span>{product.publisher}</span>
                  <span className='text-[#c6d4df]'>{formatDate(product.release_date)}</span>
                </div>
              </div>
              <div>
                <p className='text-sm font-light'>{product.short_description}</p>
              </div>
              <div className='text-[#8A97A0] '>
                <div className='text-base mb-0.5'>
                  <h4>TAGS</h4>
                </div>
                <div>
                  {product?.Categories?.map((category, index) => (
                    <span key={index} className='product-detail-tag text-[14px] text-buttonColor bg-[#1B2838] rounded py-1 px-3 mr-1 capitalize font-light'>
                      {category.name}
                    </span>
                  ))}
                  <span className='product-detail-tag text-[14px] text-buttonColor bg-[#1B2838] rounded py-1 px-3 mr-1 capitalize font-light'>+</span>
                </div>
              </div>
              <div className='text-[#8A97A0] '>
                <div className='text-base mb-0.5'>
                  <h4>REVIEWS</h4>
                </div>
                <div className='text-sm bg-[#1B2838] p-2 rounded space-y-1 '>
                  <div>
                    <span className='text-buttonColor'>Overwhelmingly Positive</span> (96% of 94,637) ALL TIME
                  </div>
                  <div>
                    <span className='text-buttonColor'>Very Positive</span> (94% of 1,637) RECENT
                  </div>
                </div>
              </div>
            </div>
            {/* md:block */}
            <div className='hidden md:block md:flex-1 md:space-y-2'>
              <div>
                <p className='text-sm font-light text-white'>{product.short_description}</p>
              </div>
              <div className='space-y-2'>
                <div className='flex text-[10px]'>
                  <div className='flex flex-col text-fontColor mr-2 uppercase space-y-2 text-nowrap justify-center'>
                    <div>
                      <p>Recent Reviews:</p>
                      <p>All Reviews:</p>
                    </div>
                    <div>
                      <p>Release Date:</p>
                    </div>
                    <div>
                      <p>Developer:</p>
                      <p>Publisher:</p>
                    </div>
                  </div>
                  <div className='text-buttonColor flex flex-col space-y-2 truncate text-xs justify-center'>
                    <div>
                      <div className='text-[#8f98a0] '>
                        <span className='text-buttonColor'>Overwhelmingly Positive</span> (96% of 94,637) ALL TIME
                      </div>
                      <div className='text-[#8f98a0]'>
                        <span className='text-buttonColor'>Very Positive</span> (94% of 1,637) RECENT
                      </div>
                    </div>
                    <div className='text-[#8f98a0]'>
                      <div>{formatDate(product.release_date)}</div>
                    </div>
                    <div>
                      <div>{product.developer}</div>
                      <div>{product.publisher}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='hidden lg:block'>
                <div className='text-fontColor text-xs'>
                  <h5>Popular user-defined tags for this product</h5>
                </div>
                <div>
                  {product?.Categories?.map((category, index) => (
                    <span key={index} className='product-detail-tag text-xs text-[#67c1f5] bg-buttonColorBg rounded-sm py-1 px-2 mr-1 capitalize font-light'>
                      {category.name}
                    </span>
                  ))}
                  <span className='product-detail-tag text-xs text-[#67c1f5] bg-buttonColorBg rounded-sm py-1 px-2 mr-1 capitalize font-light'>+</span>
                </div>
              </div>
            </div>
          </div>
          {/* lg:hidden */}
          <div className='hidden md:block lg:hidden'>
            <div className='text-fontColor text-xs'>
              <h5>Popular user-defined tags for this product</h5>
            </div>
            <div>
              {product?.Categories?.map((category, index) => (
                <span key={index} className='product-detail-tag text-xs text-[#67c1f5] bg-buttonColorBg rounded-sm py-1 px-2 mr-1 capitalize font-light'>
                  {category.name}
                </span>
              ))}
              <span className='product-detail-tag text-xs text-[#67c1f5] bg-buttonColorBg rounded-sm py-1 px-2 mr-1 capitalize font-light'>+</span>
            </div>
          </div>
        </div>

        {/* thumbnail, video, etc. */}
        <div className='bg-[#121a24] product-detail-thumbnail md:bg-gradient-to-r md:from-[#1b2838] md:to-[#121a24] lg:max-w-[60%] lg:from-transparent lg:to-transparent lg:bg-transparent'>
          {mainContent.type === 'video' ? <video controls src={mainContent.src} type='video/mp4' className='w-full md:max-h-[810px]'></video> : <img src={mainContent.src} alt='Main Preview' className='w-full' />}
          <div className='mt-1'>
            <Swiper modules={[Navigation, Pagination, Scrollbar]} slidesPerView={4} spaceBetween={4} scrollbar={{ draggable: true }} breakpoints={breakpoints}>
              {product?.ScrollThumbnails?.map((thumbnail, index) => (
                <SwiperSlide key={index}>
                  {thumbnail.type === 'video' ? (
                    <video src={thumbnail.img} type={thumbnail.type} className={`${activeSlide === index ? 'border-white border-2' : ''}`} onClick={() => handleThumbnailClick(thumbnail.img, 'video', index)}></video>
                  ) : (
                    <img src={thumbnail.img} type={thumbnail.type} alt={`Screenshot ${index + 1}`} className={`${activeSlide === index ? 'border-white border-2' : ''}`} onClick={() => handleThumbnailClick(thumbnail.img, 'image', index)} />
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className='p-3 lg:hidden'>
            <p className='text-sm'>
              <Link to={`/login`} className='text-white'>
                Sign in{' '}
              </Link>
              to add this item to your wishlist, follow it, or mark it as ignored
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProdDetailHeader;
