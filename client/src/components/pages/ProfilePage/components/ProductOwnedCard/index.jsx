// eslint-disable-next-line react/prop-types
const ProductOwnedCard = ({ gameName, gameImg }) => {
  return (
    <div className="bg-black/[0.3] rounded-sm p-2 flex items-center gap-3">
      <div className="max-w-[185px]">
        <a href="">
          <img src={gameImg} alt="gameImg" />
        </a>
      </div>
      <div className="truncate">
        <a href="" className="text-sm hover:text-[#66C0F4] truncate md:text-base lg:text-lg">
          {gameName}
        </a>
      </div>
    </div>
  );
};

export default ProductOwnedCard;
