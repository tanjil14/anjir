import {
  faAt,
  faNewspaper,
  faPassport,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Publication from "./Publication";
const Publications = () => {
  return (
    <section className="bg-[#115c8f] py-6">
      <div className="border-t border-t-[#0080d7] "></div>
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        data-aos-offset="100"
        className="w-11/12 mx-auto py-10 overflow-hidden"
      >
        <h4 className="text-3xl md:text-5xl uppercase font-semibold tracking-tight text-white text-center work-sans">
          constituent services
        </h4>
        <div className="flex mt-10 flex-wrap justify-center gap-6 ">
          <Publication icon={faAt} text="Email Me" />
          <Publication icon={faPhone} text="Call Me" />
          <Publication icon={faNewspaper} text="News" />
          <Publication icon={faPassport} text="Visit Us" />
        </div>
      </div>
      <div className="border-t border-t-[#0080d7]"></div>
    </section>
  );
};

export default Publications;
