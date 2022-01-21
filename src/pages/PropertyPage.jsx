import HeaderV2 from "../components/HeaderV2/HeaderV2";
import Slider from "../components/PropertyPageComponents/HeroSection/Slider";
import MainSection from "../components/PropertyPageComponents/MainSection/MainSection";
import ProfileSection from "../components/PropertyPageComponents/ProfileSection/ProfileSection";


const PropertyPage = () => {
    return (
        <div className="tx-dark nav-padding">
            <HeaderV2 transparent={false} />
            <Slider />
            <div className="container my-5 py-md-5">
                <MainSection />
                <ProfileSection />
            </div>
        </div>
    )
}

export default PropertyPage;