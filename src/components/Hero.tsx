import heroimg from "../assets/heroimg1.png";
import { SwipeCarousel } from "./Carousel";
const Hero = () => {
  return (
    // <div className="w-full flex max-sm:flex-col">
    //   <div className="w-full">
    //   <img
    //     src={heroimg}
    //     alt=""
    //     className="object-cover"
    //     />
    //   </div>
    // </div>
    <SwipeCarousel/>
  );
};

export default Hero;
