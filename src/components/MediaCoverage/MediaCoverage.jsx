
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import img1 from "../../assets/images/news/1.webp";
import img2 from "../../assets/images/news/2.jpg";
import img3 from "../../assets/images/news/3.jpg";
import img4 from "../../assets/images/news/4.jpg";
import Card from "./Card";

const MediaCoverage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="bg-[#0080d7]">
      <div className="w-11/12 mx-auto py-10">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          className="xl:pr-20"
        >
          <p className="text-3xl text-white font-bold tracking-[.4em] uppercase">
            MEDIA COVERAGEs
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          className="py-5 mx-auto w-full lg:w-8/12 relative"
        >
          <Slider {...settings} className="slick-slider mt-5">
            <Card
              img={img1}
              title="Shishu Academy new Director General Anjir Liton"
              date="Jan 15, 2023"
              desc="Children's author and rhymester Anjir Liton has been appointed the new director general of Bangladesh Shishu Academy for the next three years.&nbsp;The Ministry of Public Administration issued a notification in this regard on Tuesday.Earlier on Monda..."
            />
            <Card
              img={img2}
              title="10 get Bangla Academy Literary Award 2020"
              date="Jan 15, 2023"
              desc="Ten poets and writers have been adorned with the Bangla Academy Literary Award 2020.&nbsp;Bangla Academy Director General Habibullah Siraji came up with the declaration at a press conference at Shaheed Munir Chowdhury conference room of the academy 4..."
            />
            <Card
              img={img3}
              title="Anjir Liton received Shishu Sahitya Award"
              date="Jan 15, 2023"
              desc="Agrani Bank- Bangladesh Shishu Academy Shishu Sahitya Puraskar from the Bangla calendar 1414-1417 was recently announced. The award-giving ceremony was held at the premises of the Bangladesh Shishu Academy in the city on October 4. Tariq-ul Islam, se..."
            />
            <Card
              img={img4}
              title="Rupali Bank SureCash and Bangladesh Shishu Academy made an agreement to enable the services of mobile Banking."
              date="Jan 15, 2023"
              desc="Bangladesh Shishu Academy has signed a tripartite agreement with Rupali Bank and SureCash to enable mobile banking services.On June 25, 2018, Bangladesh Shishu Academy will accept the admission fee for various types of cultural training through Rupal..."
            />
          </Slider>
          
        </div>
      </div>
    </section>
  );
};

export default MediaCoverage;
