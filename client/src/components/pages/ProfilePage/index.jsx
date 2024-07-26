import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";
import { useSelector } from "react-redux";
import usePageTitle from "../../../hooks/usePageTitle";
import ProfileHeader from "./components/ProfileHeader";
import ProfileContent from "./components/ProfileContent";
import useNeedLogin from "../../../hooks/useNeedLogin";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);
  const isLoading = useSelector((state) => state.auth.isLoading);
  
  useNeedLogin();
  usePageTitle(`Profile || ${user?.username ?? ""}`, [user]);

  return (
    <>
      {!isLoading ? (
        <div className="bg-black">
          <Header />
          <div className="bg-[url('https://community.akamai.steamstatic.com/public/images/profile/2020/bg_dots.png')] bg-no-repeat bg-top">
            <div className="max-w-[1100px] mx-auto bg-[#222330ed] px-2 pt-3 pb-10 text-[#c4c4c4] min-h-screen lg:px-4">
              <ProfileHeader user={user} />
              <ProfileContent user={user} />
            </div>
          </div>
          <div className="hidden lg:block">
            <Footer />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProfilePage;
