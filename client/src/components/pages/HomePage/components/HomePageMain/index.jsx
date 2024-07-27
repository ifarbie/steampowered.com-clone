import { SwiperSlide } from 'swiper/react';
import { categories, todaySpecialOffersData } from '@/utils/datas';
import { useSelector } from 'react-redux';
import RecommendedJumbotron from '../RecommendedJumbotron';
import GameCard from '../GameCard';
import CategoryCard from '../CategoryCard';
import BrowseSteam from '../BrowseSteam';
import FeatureContainer from '../FeatureContainer';
import SignInBox from '../SignInBox';
import { useGetProductsByCategory } from '@/hooks/api/useGetProductsByCategory';
import { useGetProducts } from '@/hooks/api/useGetProducts';
import SpecialOffers from '../SpecialOffers';

const breakpoints = {
  0: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 3,
  },
};

const autoplay = { delay: 2000, disableOnInteraction: false };

const HomePageMain = () => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const actionProducts = useGetProductsByCategory(3);
  const openWorldProducts = useGetProductsByCategory(1);
  const allProducts = useGetProducts();

  const featuredProduct1 = allProducts[0];
  const featuredProduct2 = allProducts[1];

  const discountedGame = allProducts.filter((product) => product.PriceLists[0].discount > 0);
  const specialOfferGame1 = discountedGame.slice(0, 2);
  const specialOfferGame2 = discountedGame.slice(2, 4);
  const specialOfferGame3 = discountedGame.slice(4, 6);

  return (
    <main className='bg-[#1b2838] pt-7 pb-10 px-4'>
      {/* Feature: Recommended */}
      <FeatureContainer title='Featured & Recommended' slidesPerView={1} slidesPerGroup={1} autoplay={autoplay}>
        {/* Tidak menggunakan loop karena bug */}
        <SwiperSlide>
          <RecommendedJumbotron {...featuredProduct1} />
        </SwiperSlide>
        <SwiperSlide>
          <RecommendedJumbotron {...featuredProduct2} />
        </SwiperSlide>
      </FeatureContainer>

      {/* Feature: Special Offers */}
      <FeatureContainer title='SPECIAL OFFERS' classProps='mb-4' slidesPerView={3} breakpoints={breakpoints} slidesPerGroup={3}>
        <SpecialOffers gameData1={specialOfferGame1} gameData2={specialOfferGame2} gameData3={specialOfferGame3} />
      </FeatureContainer>

      {/* Feature: Browse by Category */}
      <FeatureContainer title={'Browse by Category'} classProps='mb-7'>
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryCard image={category.image} bgColor={category.bgColor}>
              {category.name}
            </CategoryCard>
          </SwiperSlide>
        ))}
      </FeatureContainer>

      {/* Sign In */}
      {!isLogin && <SignInBox />}

      {/* Feature: Browse Steam*/}
      <FeatureContainer title='Browse Steam' isUsingArrow={false} classProps='mb-16'>
        <BrowseSteam />
      </FeatureContainer>

      {/* Feature: Under 90k */}
      {openWorldProducts?.length > 0 && (
        <FeatureContainer title={'Popular Open World Games'} button={'BROWSE ALL'}>
          {openWorldProducts
            ?.slice()
            .reverse()
            .slice(0, 8)
            .map((game, index) => (
              <SwiperSlide key={index}>
                <GameCard id={game.id} image={game.product_thumbnail} price={game.PriceLists[0].price} />
              </SwiperSlide>
            ))}
        </FeatureContainer>
      )}

      {/* Feature: Popular Action Games */}
      {actionProducts?.length > 0 && (
        <FeatureContainer title={'Popular Action Games'} button={'BROWSE ALL'}>
          {actionProducts?.map((game, index) => (
            <SwiperSlide key={index}>
              <GameCard id={game.id} image={game.product_thumbnail} price={game.PriceLists[0].price} />
            </SwiperSlide>
          ))}
        </FeatureContainer>
      )}
    </main>
  );
};

export default HomePageMain;
