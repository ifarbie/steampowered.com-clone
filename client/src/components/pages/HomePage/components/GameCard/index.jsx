import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const formatPrice = (price) => {
  return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}`;
};

const GameCard = ({ image, price, id, isDiscount = false, discountedPrice = null, discountValue = null }) => {
  return (
    <>
      <div className='gradient-game-cards group/game-card text-xs shadow-card'>
        <Link to={`/product/${id}`}>
          <img src={image} alt='game' />
          <div className='p-1 flex'>
            {isDiscount ? (
              <>
                <div className='px-1 py-0.5 text-discount bg-[#4c6b22]'>
                  <span>{discountValue}</span>
                </div>
                <div className='px-1 py-0.5 bg-[#141f2c66]'>
                  <span className="text-discountOriginalPrice before:content-[''] relative before:left-0 before:right-0 before:border-b before:absolute before:top-[43%] before:-skew-y-[8deg] before:border-discountOriginalPrice">
                    Rp {price}
                  </span>
                  <span className='text-discount'>Rp {discountedPrice}</span>
                </div>
              </>
            ) : (
              <div className='px-1 py-0.5 bg-[#141f2c66]'>
                <span className='text-white'>{formatPrice(price)}</span>
              </div>
            )}
          </div>
        </Link>
        <button
          id='gameCardMoreBtn'
          className='absolute flex bg-white transition opacity-0 translate-x-1 right-1.5 top-1.5 px-2 py-[0.33rem] rounded-[0.15rem] shadow-moreMenu text-black gap-[0.15rem] group-hover/game-card:translate-x-0 group-hover/game-card:opacity-100 hover:bg-[#67c1f5] group/more-menu'
        >
          <div className='w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white' />
          <div className='w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white' />
          <div className='w-[0.3rem] h-[0.3rem] bg-[#8d949b] rounded-full group-hover/more-menu:bg-white' />
        </button>
      </div>
    </>
  );
};

GameCard.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isDiscount: PropTypes.bool,
  discountedPrice: PropTypes.string,
  discountValue: PropTypes.string,
};

export default GameCard;
