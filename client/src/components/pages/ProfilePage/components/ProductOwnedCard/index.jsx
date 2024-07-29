import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductOwnedCard = ({ gameName, gameImg, gameId }) => {
  return (
    <div className="bg-black/[0.3] rounded-sm p-2 flex items-center gap-3">
      <div className="max-w-[185px]">
        <Link to={`/product/${gameId}`}>
          <img src={gameImg} alt="gameImg" />
        </Link>
      </div>
      <div className="truncate">
        <Link to={`/product/${gameId}`} className="text-sm hover:text-[#66C0F4] truncate md:text-base lg:text-lg">
          {gameName}
        </Link>
      </div>
    </div>
  );
};

export default ProductOwnedCard;
