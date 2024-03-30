import Marquee from "react-fast-marquee";
import image1 from "../images/sliderImages/image1.png";
import image2 from "../images/sliderImages/image2.png";
import image3 from "../images/sliderImages/image3.png";
import image4 from "../images/sliderImages/image4.png";
import image5 from "../images/sliderImages/image5.png";
import image6 from "../images/sliderImages/image6.png";
import image7 from "../images/sliderImages/image7.png";

const ImageSlider = () => {
  const images = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <section>
      <Marquee className="my-2" autoFill={true} speed={25}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt="slider images" className="w-72 mx-2" />
            </div>
          );
        })}
      </Marquee>
      <Marquee className="my-4" direction="right" autoFill={true} speed={25}>
        {images.map((image, index) => {
          return (
            <div key={index}>
              <img src={image} alt="slider images" className="w-72 mx-2" />
            </div>
          );
        })}
      </Marquee>
    </section>
  );
};

export default ImageSlider;
