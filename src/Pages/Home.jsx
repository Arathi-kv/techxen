import About1 from "../Components/About/About1";
import Award1 from "../Components/Award/Award1";
import Blog1 from "../Components/Blog/Blog1";
import Choose1 from "../Components/Choose/Choose1";
import Cta1 from "../Components/Cta/Cta1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import Mission1 from "../Components/Mission/Mission1";


const Home = () => {
    return (
        <div className="home-page1">
            <HeroBanner1
                bgImg="/assets/img/bg/hero-bg.jpg"
                subTitle="TechXen Technology & It Solution"
                title="Your Trusted Financial Partner</span>"
                content="We provide high-quality Audit, Accounting, Tax, and Advisory Services with a commitment to excellence."
                btnName="Get Started Now"
                btnUrl="/contact"
                
                
            ></HeroBanner1>
          
            <About1
                image1="/assets/img/about/about1-img1.jpg"
                image2="/assets/img/about/about1-img2.jpg"
                subTitle="About Our Company"
                Title="Trusted Financial Professionals in Qatar"
                content="Al Yafei Auditors is an approved financial audit firm registered under Ministry of Commerce & Industry in the state of Qatar, with License No. 237, working towards making a better business atmosphere for our clients.
                Our team comprises of financial experts and qualified professionals who believe in a global approach, customized solutions, and abridged advanced technology.
                We provide high quality services to a wide range of businesses and high net worth individuals in the state of Qatar, helping them to unlock their potential for growth."
               
                btnName="Discover More"
                btnUrl="/about"
            ></About1>
           <Mission1></Mission1>
          
            <Choose1></Choose1>
            <Cta1></Cta1>
        </div>
    );
};

export default Home;