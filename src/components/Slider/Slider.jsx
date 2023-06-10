import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../../assets/images/banner/1676722927.jpg";
import slider2 from "../../assets/images/banner/1676722944.jpg";
import slider3 from "../../assets/images/banner/1676789309.jpg";
import "./Slider.css";
const sliderData = [
  {
    img: slider1,
    text: "Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement",
    id: 1,
  },
  {
    img: slider2,
    text: "DG Sir Visit Tungi Para",
    id: 2,
  },
  {
    img: slider3,
    text: "Tungi Para Visit",
    id: 3,
  },
];
const Slider = () => {
  return (
    <section className="mt-24 md:mt-28">
      <div className="single-item">
        <Carousel
          autoPlay={true}
          interval={3000}
          infiniteLoop
          showIndicators={false}
        >
          {sliderData.map((slider) => (
            <div
              key={slider.id}
              className="relative px-4"
              style={{ padding: "200px 10px 100px 10px" }}
            >
              <div className="z-20 relative text-white container mx-auto hidden md:block text-center">
                <div
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
                  className="w-1/2 text-white p-4"
                >
                  <a className="text-3xl hover:underline text-left block">
                    {slider.text}
                  </a>
                  <button className="text-lg py-2 px-6 bg-[#115c8f] mt-4">
                    Read More
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 h-auto z-10">
                <img
                  src={slider.img}
                  alt="banner"
                  style={{ minHeight: "500px" }}
                  className="h-full w-full object-fit-cover"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider;
