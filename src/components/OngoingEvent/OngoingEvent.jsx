import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import home from "../../assets/images/home/2.jpg"
const OngoingEvent = () => {
    return (
        <section className="bg-[#0080d7]">
            <div data-aos-duration="2000" data-aos="fade-left" data-aos-offset="100" className=" w-11/12 mx-auto">
        <div className="text-white work-sans grid grid-cols-1 items-center md:grid-cols-2 gap-4 w-full lg:w-8/12 mx-auto">
            <div className="py-6">
                <h4 className="text-2xl lg:text-3xl font-semibold tracking-tighter uppercase">MY JOURNEY WITH SHISHU ACADEMY</h4>
                <p className="mt-4">One of the strengths to build a golden Bengal in the ideology of Father of the Nation Bangabandhu Sheikh Mujibur Rahman is our future generation, who are today&#039;s children. Bangladesh Shishu Academy is for children. Bangladesh Shishu Academy is working to develop latent talents including creative and gentle scholarship for the purpose of creating the spirit of great liberation war, love of country, moral education, discipline and sense of responsibility among the children.

Under the leadership of Hon&#039;ble Prime Minister Sheikh Hasina, a child friendly environment has been created in the country today. At present children&#039;s academy activities are being carried out in 64 districts and 6 upazilas (Keshabpur, Parshuram, Mithapukur, Kulaura, Srinagar and Babuganj upazilas) for the creative development and protection of children&#039;s rights. Under this program, various programs are being implemented in collaboration with the local administration for the participation of children across the country.</p>
                <a href="#" target="_blank" className="inline-block transition-all mt-4 py-2 hover:bg-white hover:text-[#115c8f] px-6 border border-white font-medium cursor-pointer rounded">Learn More <span><FontAwesomeIcon icon={faArrowRight} /></span></a>
            </div>
            <div className="order-first md:order-last">
                <img className="w-full py-4"   src={home}  alt="home"/>
            </div>
        </div>
    </div>
        </section>
    );
};

export default OngoingEvent;