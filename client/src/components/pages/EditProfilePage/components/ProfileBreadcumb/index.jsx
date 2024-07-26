import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileBreadcumb = () => {
  const user = useSelector((state) => state.auth.user);
  
  return (
    <div className="bg-[#3a3e47]/[0.5] p-4 flex items-center gap-5 md:gap-6 md:px-6 lg:px-8 xl: px-10">
      <div className="w-[64px]">
        <img src="https://avatars.akamai.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg" alt="" className="w-full" />
      </div>
      <div className="flex gap-2">
        <h2 className="text-3xl hover:text-[#66C0F4]"><Link to={"/profile"}>{user?.username}</Link></h2>
        <div className="self-end">
          <span className="text-xs">
            <i className="fa-solid fa-angles-right text-[#828282] mr-1"></i>Edit Profile
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileBreadcumb;
