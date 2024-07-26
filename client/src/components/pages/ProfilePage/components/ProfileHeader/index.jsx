/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProfileHeader = ({ user }) => {
  return (
    <div className="mb-8 sm:mt-4 sm:mb-11">
      <div className="flex flex-col mb-5 gap-2 pl-4 sm:hidden">
        <h3 className="text-2xl font-light text-white">{user?.username}</h3>
        <h4 className="text-xs">
          <img src={user?.Region.icon} alt="country" className="inline mr-1" />
          <span>{user?.Region.name}</span>
        </h4>
      </div>
      <div>
        <div className="flex gap-5 sm:justify-between">
          <div className="sm:flex sm:gap-10 sm:flex-grow overflow-hidden lg:px-2">
            <div>
              <div className="p-0.5 background-avatar max-w-[170px] sm:w-[170px] sm:max-w-none sm:min-w-[170px]">
                <img src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" alt="" className="w-full" />
              </div>
            </div>
            <div className="hidden sm:flex-col sm:gap-2 sm:flex sm:mt-2">
              <h3 className="text-2xl font-light text-white">{user?.username}</h3>
              <h4 className="text-xs">
                <img src={user?.Region.icon} className="inline mr-1" />
                <span>{user?.Region.name}</span>
              </h4>
              <div className="text-sm hidden mt-4 sm:block">{user?.bio ?? "No information given."}</div>
            </div>
          </div>
          <div className="pt-2 sm:pt-0 sm:basis-[200px] sm:mt-2">
            <div className="text-2xl text-white flex gap-2 mb-3">
              <div className="font-light">Level</div>
              <div className="w-8 h-8 border-2 rounded-full text-center text-base font-extralight flex items-center justify-center border-[#9b9b9b]">0</div>
            </div>
            <Link to="/profile/edit">
              <button className="transition duration-100 rounded-sm text-[lightgray] bg-[#2b3444] px-2 py-1 hover:text-white hover:drop-shadow hover:bg-[#353e4e]">Edit Profile</button>
            </Link>
          </div>
        </div>
        <div className="p-2 text-sm sm:hidden">{user?.bio ?? "No information given."}</div>
      </div>
    </div>
  );
};

export default ProfileHeader;
