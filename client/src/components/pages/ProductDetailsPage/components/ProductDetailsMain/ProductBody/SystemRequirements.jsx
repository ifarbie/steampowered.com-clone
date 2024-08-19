const SystemRequirements = ({ system, isRecommended }) => {
  return (
    <div>
      <div className='text-xs text-headerFontColor leading-4 mt-4'>{isRecommended ? 'RECOMMENDED:' : 'MINIMUM:'}</div>
      <ul className='text-xs leading-6'>
        <li className='list-none '>
          <span className='text-greyFontColor'>OS: </span>
          {system?.os}
        </li>
        <li className='list-none'>
          <span className='text-greyFontColor'>Processor: </span>
          {system?.processor}
        </li>
        <li className='list-none'>
          <span className='text-greyFontColor'>Memory: </span>
          {system?.memory}
        </li>
        <li className='list-none'>
          <span className='text-greyFontColor'>Graphics: </span>
          {system?.graphics}
        </li>
        <li className='list-none'>
          <span className='text-greyFontColor'>DirectX: </span>
          {system?.directX}
        </li>
        <li className='list-none'>
          <span className='text-greyFontColor'>Storage: </span>
          {system?.storage}
        </li>
      </ul>
    </div>
  );
};

export default SystemRequirements;
