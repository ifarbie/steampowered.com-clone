/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import GameTag from "./GameTag";
import { formatPrice } from "../../../../../utils/functions";

const RecommendedJumbotron = ({ id, ScrollThumbnails, name, PriceLists, jumbotron_image}) => {
  const screenShots = ScrollThumbnails?.slice(2, 6);

  return (
    <Link to={`product/${id}`} className="flex justify-center">
      <div className="w-full shadow-card lg:shadow-none lg:w-2/3">
        <div className="w-full">
          <img className="w-full" src={jumbotron_image} alt="" />
        </div>
        <div className="lg:hidden gradient-recommended p-1.5">
          <h3 className="font-semibold text-xl">{name}</h3>
          <p className="p-2 font-extralight text-sm">{formatPrice(PriceLists?.[0].price)}</p>
        </div>
      </div>
      <div className=" bg-[url('https://store.akamai.steamstatic.com/public/images/v6/home/background_maincap_2.jpg')] bg-cover hidden lg:flex lg:flex-col lg:w-1/3">
        <div className="h-[85px] flex items-center px-4">
          <h3 className="text-3xl">{name}</h3>
        </div>
        <div className="grid grid-cols-2 gap-y-3 gap-x-3 mr-2">
          {screenShots?.map((image) => (
            <img key={image.id} className="w-full brightness-75 cursor-pointer hover:brightness-100" src={image.img} />
          ))}
        </div>
        <div className="grow flex flex-col justify-between pl-4 pt-3 pb-2">
          <div>
            <h4 className="text-2xl font-light">Now Available</h4>
            <div>
              <GameTag>Top Seller</GameTag>
            </div>
          </div>
          <span className="text-sm mt-auto font-light">{formatPrice(PriceLists?.[0].price)}</span>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedJumbotron;
