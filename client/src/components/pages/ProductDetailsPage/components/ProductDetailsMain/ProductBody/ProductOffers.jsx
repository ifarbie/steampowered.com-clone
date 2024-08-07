/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { addToCart } from '@/API/cart';
import { discountedPrice, formatPrice } from '@/utils/functions';

const ProductOffers = ({ product }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const productOwned = user?.productOwned;
  const isOwned = productOwned?.find((owned) => owned.id === product?.id);

  const PriceList = product?.PriceLists;

  const handleAddToCart = async (offerIndex, productName, offerName) => {
    try {
      if (!isLogin) {
        window.location.href = '/login';
        return;
      }

      const response = await addToCart(offerIndex);
      console.log(response);
      alert(`Added to cart! ${productName} ${offerName}`);
      window.location.reload();
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to add item to cart.';
      console.error('Error adding to cart:', errorMessage);
      alert(errorMessage);
    }
  };

  const offersElements = PriceList?.map((offer, index) => (
    <div className='gradient-price pt-4 pb-7 px-4 rounded-[3px] relative text-white' key={index}>
      <p className='text-xl font-medium'>
        Buy {product?.name} {offer?.offerName}
      </p>
      <div className='absolute right-4'>
        <div className='bg-black rounded-sm text-sm p-1'>
          <span>
            {offer?.discount > 0 ? (
              <>
                <span className='bg-lime-300 p-2 text-lg text-green-500'>{offer?.discount} % </span>
                <span className='line-through '>{formatPrice(offer?.price)} </span>
                <span className='text-discount'>{formatPrice(discountedPrice(offer?.discount, offer?.price))} </span>
              </>
            ) : (
              <span className='pl-3 pr-4'>{formatPrice(offer?.price)}</span>
            )}
            <button className='gradient-price-button text-[#d2efa9] py-2 px-4 rounded-sm' onClick={() => handleAddToCart(offer.id, product.name, offer.offerName)} disabled={isOwned}>
              {isOwned ? 'Already Owned' : 'Add to Cart'}
            </button>
          </span>
        </div>
      </div>
    </div>
  ));

  return <>{offersElements}</>;
};

export default ProductOffers;
