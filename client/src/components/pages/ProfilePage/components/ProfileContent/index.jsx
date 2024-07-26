/* eslint-disable react/prop-types */
import ProductOwnedCard from "../ProductOwnedCard";

const ProfileContent = ({ user }) => {
  return (
    <div className="bg-black/[0.3] rounded-sm overflow-hidden lg:max-w-[79%]">
      {/* Game Inventory */}
      <div className="bg-black/50 px-3 py-2 text-white">
        Games Inventory <span className="font-extralight text-[#9b9b9b] text-2xl ml-1">{user?.productOwned.length ?? 0}</span>
      </div>
      <div className="py-6 px-3 grid grid-cols-1 gap-4 text-white">
        {user?.productOwned.length ? (
          <>
            {user.productOwned.map((product) => (
              <ProductOwnedCard key={product.name} gameName={product.name} gameImg={product.product_thumbnail}/>
            ))}
          </>
        ) : (
          <p className="text-center text-sm text-[#c4c4c4]">No game found...</p>
        )}
      </div>
    </div>
  );
};

export default ProfileContent;
