const ProductFeature = ({ name, icon }) => {
  return (
    <div className='flex cursor-pointer'>
      <div>
        <img className='p-1 w-9 h-6 bg-iconBg' src={icon} />
      </div>
      <div className='py-1 px-2 text-xs w-full text-buttonColor bg-blueItemBg font-light product-detail-button'>{name}</div>
    </div>
  );
};

export default ProductFeature;
