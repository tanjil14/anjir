import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const WhtasUp = () => {
    return (
        <section>
    <div>
        <a href="#" className="text-xl fixed w-[50px] h-[50px] bottom-6 right-2.5 bg-[#15E0FB] rounded-[50%] text-center z-[100] flex justify-center items-center">
        <FontAwesomeIcon icon={faMessage}/>
        </a>
    </div>

</section>
    );
};

export default WhtasUp;