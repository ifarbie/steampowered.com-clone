import { Fragment } from 'react';
import ProductFeature from './ProductFeature';
import ProductOffers from './ProductOffers';
import { formatDate } from '@/utils/functions';
import SystemRequirements from './SystemRequirements';

const productDetailLinks = ['Visit the Website', 'View Update History', 'Read Related News', 'View Discussions', 'Visit the Workshop', 'Find Community Groups'];

const sharedEmbedButtons = ['Shared', 'Embed', '⚑'];

const ProductBody = ({ product }) => {
  const windowsSystemRequirements = product?.SysReqs?.filter((requirement) => requirement.osId === 1);
  const macOsSystemRequirements = product?.SysReqs?.filter((requirement) => requirement.osId === 2);

  return (
    <div className='flex flex-row-reverse lgMax:block lg:mt-7 lg:gap-4'>
      <div className='mt-6 mb-7 space-y-2 lgMax:ml-0 lgMax:px-3 lg:mt-0 lg:mb-0 lg:w-[33%]'>
        {/* FEATURE CONTENT */}
        <div className='gradient-product-body p-4 lgMax:w-full flex flex-col gap-1'>
          {product?.productFeatures?.map((feature) => (
            <ProductFeature key={feature?.id} name={feature?.name} icon={feature?.icon} />
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
                <Fragment key={index}>
                  <span className='capitalize text-buttonColor'>{category?.name}</span>
                  {index < product.Categories.length - 1 && ', '}
                </Fragment>
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
          <div className='gradient-sys-reqs flex gap-6 text-xs'>
            {windowsSystemRequirements?.length ? <div className='text-[#67c1f5] bg-iconBg py-0.5 px-3 mt-2 ml-2'>Windows</div> : null}
            {macOsSystemRequirements?.length ? <div className='text-[#3b6e8c] py-0.5 px-3 mt-2 ml-2 cursor-pointer hover:text-white'>MacOs</div> : null}
          </div>
        </div>
        <div className='grid grid-cols-2 gap-3'>
          {windowsSystemRequirements?.[0] && <SystemRequirements system={windowsSystemRequirements?.[0]} isRecommended={false} />}
          {windowsSystemRequirements?.[1] && <SystemRequirements system={windowsSystemRequirements?.[1]} isRecommended={true} />}
        </div>
      </div>
    </div>
  );
};
export default ProductBody;
