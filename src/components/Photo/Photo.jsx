import photo from "../../assets/images/gallery/1.jpg"
import photo1 from "../../assets/images/gallery/2.jpg"
import photo2 from "../../assets/images/gallery/3.jpg"
import photo3 from "../../assets/images/gallery/4.jpg"
import photo4 from "../../assets/images/gallery/5.jpg"
import photo5 from "../../assets/images/gallery/6.jpg"
const Photo = () => {
  return (
    <section className="bg-[#F3F3F3]">
      <div className="w-11/12 mx-auto py-10">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          className="xl:pr-20"
        >
          <p className="text-3xl text-[#0080d7] font-bold tracking-[.4em]">
            PHOTO GALLERY
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          className="py-5 mx-auto w-full  lg:w-8/12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-5 gap-1">
            <a className="w-full h-72 inline-block overflow-hidden" href={photo}>
              <img className="object-cover w-full h-full object-center relative transition-transform duration-150 ease-linear transform scale-100 hover:scale-[1.2]" src={photo} alt=""/>
            </a>
            <a className="w-full h-72 inline-block overflow-hidden" href={photo1}>
              <img className="object-cover w-full h-full object-center relative transition-transform duration-150 ease-linear transform scale-100 hover:scale-[1.2]" src={photo1} alt=""/>
            </a>
            <a className="w-full h-72 inline-block overflow-hidden" href="">
              <img className="object-cover w-full h-full object-center relative transition-transform duration-150 ease-linear transform scale-100 hover:scale-[1.2]" src={photo2} alt=""/>
            </a>
            <a className="w-full h-72 inline-block overflow-hidden" href="">
              <img className="object-cover w-full h-full object-center relative transition-transform duration-150 ease-linear transform scale-100 hover:scale-[1.2]" src={photo3} alt=""/>
            </a>
            <a className="w-full h-72 inline-block overflow-hidden" href="">
              <img className="object-cover w-full h-full object-center relative transition-transform duration-150 ease-linear transform scale-100 hover:scale-[1.2]" src={photo4} alt="" />
            </a>
            <a className="w-full h-72 inline-block overflow-hidden" href="">
              <img className="object-cover w-full h-full object-center relative transition-transform duration-150 ease-linear transform scale-100 hover:scale-[1.2]" src={photo5} alt="" />
            </a>
          </div>
          <div className="flex justify-center">
            <a
              className="py-2 px-6 shadow bg-zinc-200 font-semibold hover:bg-zinc-300"
              href="l"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photo;
