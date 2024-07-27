import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const SpecialGameCard = ({id, image, discountValue, price, discountedPrice}) => {
  return (
    <Link to={`/product/${id}`} className='shadow-card text-xs lg:text-base'>
      <img src={image} alt={id} />
      <div className='flex bg-[#addbf4] p-1 justify-between flex-col md:flex-row'>
        <span className='text-[#283846] mb-1 md:mb-0 lg:block'>Today&apos;s Deal!</span>
        <div className='flex'>
          <div className='px-1 py-0.5 text-discount bg-[#4c6b22] flex'>
            <div className='my-auto block font-[500] text-sm lg:text-3xl'>{discountValue}%</div>
          </div>
          <div className='px-2 py-0.5 bg-[#344654]'>
            <span className="text-discountOriginalPrice before:content-[''] relative before:left-0 before:right-0 before:border-b before:absolute before:top-[43%] before:-skew-y-[8deg] before:border-discountOriginalPrice block text-xs text-right w-fit ml-auto">
              Rp {price}
            </span>
            <span className='text-discount'>Rp {discountedPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SpecialGameCard;
