import Footer from "../../elements/Footer/Footer";
import Header from "../../elements/Header/Header";
import EditProfileForm from "./components/EditProfileForm";
import ProfileBreadcumb from "./components/ProfileBreadcumb";
import { useSelector } from "react-redux";
import usePageTitle from "../../../hooks/usePageTitle";
import useNeedLogin from "../../../hooks/useNeedLogin";

const EditProfilePage = () => {
  const user = useSelector(state => state.auth.user)

  useNeedLogin();
  usePageTitle(`Edit Profile || ${user?.username ?? ""}`, [user]);

  return (
    <div className="bg-[#242828]">
      <Header />
      <main className="max-w-[1100px] mx-auto text-white min-h-screen ">
        <ProfileBreadcumb />
        <EditProfileForm />
      </main>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
