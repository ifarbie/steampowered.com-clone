import { SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import RecommendedJumbotron from '../RecommendedJumbotron';
import GameCard from '../GameCard';
import CategoryCard from '../CategoryCard';
import BrowseSteam from '../BrowseSteam';
import FeatureContainer from '../FeatureContainer';
import SignInBox from '../SignInBox';
import { useGetProductsByCategory } from '@/hooks/api/useGetProductsByCategory';
import { useGetProducts } from '@/hooks/api/useGetProducts';
import SpecialGameCard from '../SpecialGameCard';
import { useGetCategories } from '@/hooks/api/useGetCategories';

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
  let openWorldProducts = useGetProductsByCategory(1);
  openWorldProducts = openWorldProducts?.slice().reverse().slice(0, 8);
  const categories = useGetCategories();
  const allProducts = useGetProducts();
  
  const recommendedProducts = [allProducts[0], allProducts[1]];

  const discountedGame = allProducts.filter((product) => product.PriceLists[0].discount > 0);
  const specialOfferGame1 = discountedGame.slice(0, 2);
  const specialOfferGame2 = discountedGame.slice(2, 4);
  const specialOfferGame3 = discountedGame.slice(4, 6);
  const specialOffers = [specialOfferGame1, specialOfferGame2, specialOfferGame3];

  return (
    <main className='bg-[#1b2838] pt-7 pb-10 px-4'>
      {/* Feature: Recommended */}
      <FeatureContainer title='Featured & Recommended' slidesPerView={1} slidesPerGroup={1} autoplay={autoplay}>
        {/* Tidak menggunakan loop karena bug */}
        {recommendedProducts?.map((product, index) => (
          <SwiperSlide key={index}>
            <RecommendedJumbotron {...product} />
          </SwiperSlide>
        ))}
      </FeatureContainer>

      {/* Feature: Special Offers */}
      <FeatureContainer title='SPECIAL OFFERS' classProps='mb-4' slidesPerView={3} breakpoints={breakpoints} slidesPerGroup={3} isUsingArrow={false}>
        {specialOffers.map((offers, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-col gap-2'>
              {offers?.map((data, index) => {
                return <SpecialGameCard key={index} id={data.id} image={data.product_thumbnail} discountValue={data.PriceLists[0].discount} price={data.PriceLists[0].price} />;
              })}
            </div>
          </SwiperSlide>
        ))}
      </FeatureContainer>

      {/* Feature: Browse by Category */}
      <FeatureContainer title={'Browse by Category'} classProps='mb-7'>
        {categories?.map((category, index) => (
          <SwiperSlide key={index}>
            <CategoryCard image={category.image} bgColor={category.color}>
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

      {/* Feature: Popular Open World Products */}
      {openWorldProducts?.length > 0 && (
        <FeatureContainer title={'Popular Open World Games'} button={'BROWSE ALL'}>
          {openWorldProducts?.map((game, index) => (
            <SwiperSlide key={index}>
              <GameCard id={game.id} image={game.product_thumbnail} price={game.PriceLists[0].price} discountValue={game.PriceLists[0].discount} />
            </SwiperSlide>
          ))}
        </FeatureContainer>
      )}

      {/* Feature: Popular Action Games */}
      {actionProducts?.length > 0 && (
        <FeatureContainer title={'Popular Action Games'} button={'BROWSE ALL'}>
          {actionProducts?.map((game, index) => (
            <SwiperSlide key={index}>
              <GameCard id={game.id} image={game.product_thumbnail} price={game.PriceLists[0].price} discountValue={game.PriceLists[0].discount} />
            </SwiperSlide>
          ))}
        </FeatureContainer>
      )}
    </main>
  );
};

export default HomePageMain;
