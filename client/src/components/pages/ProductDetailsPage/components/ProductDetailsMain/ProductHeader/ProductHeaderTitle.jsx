import { Link } from 'react-router-dom';

const ProductHeaderTitle = ({ product }) => {
  return (
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
  );
};

export default ProductHeaderTitle;
