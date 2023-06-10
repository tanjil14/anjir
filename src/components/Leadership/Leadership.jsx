import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import home from "../../assets/images/home/1.jpg"
const Leadership = () => {
    return (
        <section className="bg-[#0080d7]">
            <div data-aos-duration="2000" data-aos="fade-left" data-aos-offset="100" className=" w-11/12 mx-auto">
            <div className="text-white work-sans grid grid-cols-1 items-center md:grid-cols-2 gap-4 w-full lg:w-8/12 mx-auto">
                <div className="py-6">
                 <h4 className="text-2xl lg:text-3xl font-semibold tracking-tighter uppercase">
                 MY LEADER AND INSPIRATION
                 </h4>
                 <p className="font-medium text-lg lg:text-2xl mt-4">- Hon&#039;ble Prime Minister Sheikh Hasina</p>
                 <a href="#" target="_blank" className="inline-block transition-all mt-4 py-2 hover:bg-white hover:text-[#115c8f] px-6 border border-white font-medium cursor-pointer rounded">Learn More <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
                </div>
                <div className="order-first md:order-last">
                <img className="w-full py-4" src={home}   alt="home"/>
            </div>
            </div>
            </div>
        </section>
    );
};

export default Leadership;