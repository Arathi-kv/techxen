import About6 from "../Components/About/About6";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import MarqueeText from "../Components/MarqueeText/MarqueeText";
import Mission1 from "../Components/Mission/Mission1";
import Vission1 from "../Components/Mission/Vission1";
import Services1 from "../Components/Services/Services1";
import Team2 from "../Components/Team/Team2";
import Testimonial1 from "../Components/Testimonial/Testimonial1";

const AboutLight = () => {
    return (
        <div>
            <BreadCumb Title="About Us"></BreadCumb>
           
            <About6
                image2="/assets/img/about/about1-img2.jpg"
                subTitle="About us"
                title="Trusted Financial Professionals in Qatar"
                content="Al Yafei Auditors is an approved financial audit firm registered under Ministry of Commerce & Industry in the state of Qatar, with License No. 237, working towards making a better business atmosphere for our clients.
                        Our team comprises of financial experts and qualified professionals who believe in a global approach, customized solutions, and abridged advanced technology.
                        We provide high quality services to a wide range of businesses and high net worth individuals in the state of Qatar, helping them to unlock their potential for growth."
            ></About6>
        <Services1></Services1>
            <Mission1></Mission1>
            
            <Cta1></Cta1>
        </div>
    );
};

export default AboutLight;