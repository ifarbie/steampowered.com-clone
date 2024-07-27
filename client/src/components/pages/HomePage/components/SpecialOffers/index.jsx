/* eslint-disable react/prop-types */
import { SwiperSlide } from 'swiper/react';
import SpecialGameCard from './SpecialGameCard';

const SpecialOffers = ({ gameData1, gameData2, gameData3 }) => {
  console.log(gameData1);
  
  return (
    <>
      <SwiperSlide>
        <div className='flex flex-col gap-2'>
          {gameData1?.map((data, index) => {
            const discountedPrice = data.PriceLists[0].price
            return <SpecialGameCard key={index} id={data.id} image={data.product_thumbnail} discountValue={data.PriceLists[0].discount} discountedPrice={discountedPrice} price={data.price} />;
          })}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col gap-2'>
          {gameData2?.map((data, index) => (
            <SpecialGameCard key={index} id={data.id} image={data.product_thumbnail} discountValue={data.PriceLists[0].discount} discountedPrice={data.discountedPrice} price={data.price} />
          ))}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-col gap-2'>
          {gameData3?.map((data, index) => (
            <SpecialGameCard key={index} id={data.id} image={data.product_thumbnail} discountValue={data.PriceLists[0].discount} discountedPrice={data.discountedPrice} price={data.price} />
          ))}
        </div>
      </SwiperSlide>
    </>
  );
};

export default SpecialOffers;
