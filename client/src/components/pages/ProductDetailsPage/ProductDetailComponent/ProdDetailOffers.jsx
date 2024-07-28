/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { addToCart } from '../../../../API/cart';
import { discountedPrice, formatPrice } from '../../../../utils/functions';

const ProdDetailOffers = ({ product }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);
  const user = useSelector((state) => state.auth.user);
  const productOwned = user?.productOwned;
  const isOwned = productOwned?.find(owned => owned.id === product?.id );

  const PriceList = product?.PriceLists;
  // console.log(product);
  // console.log(productOwned)

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
    <div className='card p-4 mt-6 mb-2 rounded relative w-full' key={index}>
      <p className='text-2xl font-semibold'>
        Buy {product?.name} {offer?.offerName}
      </p>
      <div className='text-base text-right absolute right-1'>
        <div className='pl-3 pr-0 bg-black rounded text-sm'>
          <span>
            {offer?.discount > 0 ? (
              <>
                <span className='bg-lime-300 p-2 text-lg text-green-500'>{offer?.discount} % </span>
                <span className='line-through '>{formatPrice(offer?.price)} </span>
                <span className='text-discount'> {formatPrice(discountedPrice(offer?.discount, offer?.price))} </span>
              </>
            ) : (
              <span>{formatPrice(offer?.price)}</span>
            )}
            <button className='m-1 bg-buyBg py-2 px-4 rounded' onClick={() => handleAddToCart(offer.id, product.name, offer.offerName)} disabled={isOwned}>
              {isOwned ? "Already Owned" : "Add to Cart"}
            </button>
          </span>
        </div>
      </div>
    </div>
  ));

  return <>{offersElements}</>;
};

export default ProdDetailOffers;
