import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductHeaderTitle from './ProductHeaderTitle';
import { formatDate } from '@/utils/functions';

const breakpoints = {
  768: {
    slidesPerView: 5,
  },
};

const ProductHeader = ({ product }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mainContent, setMainContent] = useState({
    src: '',
    type: 'video',
  });

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

  return (
    <>
      <ProductHeaderTitle product={product} />
      <div className='md:px-3 lg:flex lg:flex-row-reverse lg:px-0 lg:gap-4'>
        {/* container game header with no video/thumbnails */}
        <div className='bg-[#121a24] md:px-5 md:bg-gradient-to-r md:from-[#1b2838] md:to-[#121a24] md:pb-3 lg:px-0 lg:max-w-[37%]'>
          <div className='md:mb-5 md:flex md:gap-2 lg:block md:pt-3 lg:pt-0'>
            <div className='w-full md:flex-1 lg:mb-3'>
              <img src={product.product_thumbnail} alt='header' className='w-full' />
            </div>
            {/* md:hidden */}
            <div className='px-3 space-y-3 pt-3 pb-4 md:hidden'>
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
                  <span className='cursor-pointer hover:text-white'>{product.developer}</span>
                  <span className='cursor-pointer hover:text-white'>{product.publisher}</span>
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
                <div className='capitalize'>
                  {product?.Categories?.map((category, index) => (
                    <span key={index} className='product-detail-button text-[14px] text-buttonColor bg-[#1B2838] rounded py-1 px-3 mr-1 font-light'>
                      {category.name}
                    </span>
                  ))}
                  <span className='product-detail-button text-[14px] text-buttonColor bg-[#1B2838] rounded py-1 px-3 mr-1 font-light'>+</span>
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
            <div className='hidden md:block md:flex-1 md:space-y-2 lg:space-y-3'>
              <div>
                <p className='text-sm font-light text-white lg:text-sm lg:pr-1'>{product.short_description}</p>
              </div>
              <div className='space-y-2'>
                <div className='flex text-[10px] gap-3'>
                  <div className='flex flex-col text-fontColor uppercase space-y-2 text-nowrap justify-center'>
                    <div>
                      {product?.Reviews?.length ? <p>Recent Reviews:</p> : null}
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
                      {product?.Reviews?.length ? (
                        <>
                          <div className='text-[#8f98a0] '>
                            <span className='text-buttonColor'>Very Positive</span> (94% of 1,637)
                          </div>
                          <div className='text-[#8f98a0]'>
                            <span className='text-buttonColor'>Overwhelmingly Positive</span> (96% of 94,637)
                          </div>
                        </>
                      ) : (
                        <div className='text-[#8f98a0]'>No user reviews</div>
                      )}
                    </div>
                    <div className='text-[#8f98a0]'>
                      <div>{formatDate(product.release_date)}</div>
                    </div>
                    <div>
                      <div className='cursor-pointer hover:text-white'>{product.developer}</div>
                      <div className='cursor-pointer hover:text-white'>{product.publisher}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* lg:block */}
              <div className='hidden lg:block'>
                <div className='text-fontColor text-xs'>
                  <h5>Popular user-defined tags for this product</h5>
                </div>
                <div className='capitalize'>
                  {product?.Categories?.map((category, index) => (
                    <span key={index} className='product-detail-button text-xs text-[#67c1f5] bg-buttonColorBg rounded-sm py-1 px-2 mr-1 font-light'>
                      {category.name}
                    </span>
                  ))}
                  <span className='product-detail-button text-xs text-[#67c1f5] bg-buttonColorBg rounded-sm py-1 px-2 mr-1 font-light'>+</span>
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
                <span key={index} className='product-detail-button text-xs text-[#67c1f5] bg-buttonColorBg rounded-sm py-1 px-2 mr-1 capitalize font-light'>
                  {category.name}
                </span>
              ))}
              <span className='product-detail-button text-xs text-[#67c1f5] bg-buttonColorBg rounded-sm py-1 px-2 mr-1 capitalize font-light'>+</span>
            </div>
          </div>
        </div>

        {/* thumbnail, video, etc. */}
        <div className='overflow-hidden bg-[#121a24] product-detail-thumbnail px-3 md:bg-gradient-to-r md:from-[#1b2838] md:to-[#121a24] lg:from-transparent lg:to-transparent lg:bg-transparent md:px-0'>
          {mainContent.type === 'video' ? <video controls src={mainContent.src} type='video/mp4' className='w-full mb-1'></video> : <img src={mainContent.src} alt='Main Preview' className='w-full mb-1' />}
          {/* <div className='mt-1 w-full'> */}
          <Swiper modules={[Navigation, Pagination, Scrollbar]} slidesPerView={4} spaceBetween={4} scrollbar={{ draggable: true }} breakpoints={breakpoints}>
            {product?.ScrollThumbnails?.map((thumbnail, index) => (
              <SwiperSlide key={index}>
                {thumbnail.type === 'video' ? (
                  <video src={thumbnail.img} type={thumbnail.type} className={`cursor-pointer ${activeSlide === index ? 'border-white border-2' : ''}`} onClick={() => handleThumbnailClick(thumbnail.img, 'video', index)}></video>
                ) : (
                  <img
                    src={thumbnail.img}
                    type={thumbnail.type}
                    alt={`Screenshot ${index + 1}`}
                    className={`cursor-pointer ${activeSlide === index ? 'border-white border-2' : ''}`}
                    onClick={() => handleThumbnailClick(thumbnail.img, 'image', index)}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`p-3 ${isLogin ? 'hidden' : 'block lg:hidden'}`}>
            <p className='text-sm'>
              <Link to={`/login`} className='text-white hover:text-buttonColor'>
                Sign in{' '}
              </Link>
              to add this item to your cart
            </p>
          </div>
        </div>
      </div>

      <div className={`bg-black/20 py-3 px-4 ${isLogin ? 'hidden' : 'hidden lg:block'}`}>
        <p className='text-sm'>
          <Link to={`/login`} className='text-white hover:text-buttonColor'>
            Sign in{' '}
          </Link>
          to add this item to your cart
        </p>
      </div>
    </>
  );
};

export default ProductHeader;
