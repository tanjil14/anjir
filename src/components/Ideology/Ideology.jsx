import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mujib from "../../assets/images/Mujib.png";
const Ideology = () => {
  return (
    <section>
      <div className="w-11/12 mx-auto">
        <div
          data-aos-duration="2000"
          data-aos="fade-right"
          data-aos-offset="100"
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full lg:w-8/12 mx-auto"
        >
          <div className="flex items-center text-gray-600">
            <div className="py-4 md:py-24 relative">
              <h2 className="text-2xl lg:text-3xl works-sans font-semibold uppercase word-sans tracking-tighter">
                THE IDEOLOGY
              </h2>
              <p className="py-4 leading-tight work-sans">
                {" "}
                My greatest strength is the love for my people, My greatest
                weakness is that I love them too much.{" "}
              </p>
              <h4 className="sm:text-xl xl:text-2xl font-semibold work-sans">
                -Bangabandhu Sheikh Mujibur Rahman{" "}
              </h4>
              <a
                href=""
                className="inline-block transition-all mt-4 py-2 hover:bg-gray-500 hover:text-white border border-gray-500 px-6 border-gray-pointer rounded"
              >
                Learn More{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            </div>
          </div>
          <div className="flex justify-center order-first md:items-end border-b-4 border-b-gray-300 md:border-b-0">
            <img className="w-10/12 mt-10 mb-3" src={mujib} alt="Mujib" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ideology;
