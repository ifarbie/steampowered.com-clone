import ProductFeature from './ProductFeature';
import ProductOffers from './ProductOffers';
import { formatDate } from '@/utils/functions';

const productDetailLinks = ['Visit the Website', 'View Update History', 'Read Related News', 'View Discussions', 'Visit the Workshop', 'Find Community Groups'];

const sharedEmbedButtons = ['Shared', 'Embed', '⚑'];

const ProductBody = ({ product }) => {
  return (
    <div className='flex flex-row-reverse lgMax:block lg:mt-7 lg:gap-4'>
      <div className='mt-6 mb-7 space-y-2 lgMax:ml-0 lgMax:px-3 lg:mt-0 lg:mb-0 lg:w-[33%]'>
        {/* FEATURE CONTENT */}
        <div className='gradient-product-body p-4 lgMax:w-full flex flex-col gap-1'>
          {product?.productFeatures?.map((feature) => (
            <ProductFeature key={feature.id} name={feature.name} icon={feature.icon} />
          ))}
        </div>
        {/* GAME DETAIL */}
        <div className='gradient-product-body p-4 w-full text-xs font-light flex flex-col gap-4'>
          <div className='text-fontColor uppercase leading-[1.3rem]'>
            <p>
              Title: <span className='text-greyFontColor capitalize'>{product?.name}</span>
            </p>
            <p>
              Genre:{' '}
              {product?.Categories?.map((category, index) => (
                <>
                  <span key={index} className='capitalize text-buttonColor'>
                    {category?.name}
                  </span>
                  {index < product.Categories.length - 1 && ', '}
                </>
              ))}
            </p>
            <p>
              Developer: <span className='capitalize text-buttonColor'>{product?.developer}</span>
            </p>
            <p>
              Publisher: <span className='capitalize text-buttonColor'>{product?.publisher}</span>
            </p>
            <p>
              Release Date: <span className='text-greyFontColor capitalize'>{formatDate(product?.release_date)}</span>
            </p>
          </div>
          <div className='flex flex-col gap-1'>
            {productDetailLinks.map((name) => (
              <div key={name} className='bg-blueItemBg text-buttonColor py-1 px-2 rounded-sm product-detail-button'>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
        {/* SHARE & EMBED BUTTON */}
        <div className='gradient-product-body p-4 min-w-full flex gap-1'>
          {sharedEmbedButtons.map((name) => (
            <button className='product-detail-button bg-buttonColorBg text-buttonColor rounded-sm py-2 px-4' key={name}>
              {name}
            </button>
          ))}
        </div>
      </div>

      <div className='lgMax:px-3 lg:flex-1'>
        {/* GAME OFFERS/PRICES */}
        <div className='flex flex-col gap-7 mb-20 lg:mb-14'>
          <ProductOffers product={product} />
        </div>
        {/* GAME DESCRIPTION */}
        <div className='text-greyFontColor mb-14'>
          <div className='text-white uppercase font-normal border-gradient mb-3'>About this game</div>
          <div>{product?.description}</div>
        </div>
        {/* GAME SYSTEM REQUIREMENTS */}
        <div className='max-w-4xl'>
          <div className='text-white font-normal uppercase border-gradient'>System Requirements</div>
          <div className='gradient-sys-reqs flex gap-6 text-xs p-0.5'>
            <div className='text-greyFontColor bg-iconBg py-0.5 px-3 mt-2 ml-2'>Windows</div>
            <div className='text-greyFontColor py-0.5 px-3 mt-2 ml-2'>MacOS</div>
          </div>
        </div>
        <div>
          <div>
            <div className='text-xs text-headerFontColor leading-4 mt-4'>MINIMUM: </div>
            <ul className='text-xs leading-6'>
              <li className='list-none '>
                <span className='text-greyFontColor'>OS: </span>
                {product?.SysReq?.CategorySysReq?.osName}
              </li>
              <li className='list-none'>
                <span className='text-greyFontColor'>Processor: </span>
                {product?.SysReq?.processor}
              </li>
              <li className='list-none'>
                <span className='text-greyFontColor'>Memory: </span>
                {product?.SysReq?.memory}
              </li>
              <li className='list-none'>
                <span className='text-greyFontColor'>Graphics: </span>
                {product?.SysReq?.graphics}
              </li>
              <li className='list-none'>
                <span className='text-greyFontColor'>DirectX: </span>
                {product?.SysReq?.directX}
              </li>
              <li className='list-none'>
                <span className='text-greyFontColor'>Storage: </span>
                {product?.SysReq?.storage}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductBody;
