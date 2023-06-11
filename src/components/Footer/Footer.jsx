import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <section className="bg-[#0c4063]">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 mx-auto pt-32 pb-10 md:pb-28">
        <div className="flex gap-1 justify-center md:justify-start items-center ">
          <div
            className="text-white text-2xl md:text-4xl font-bold"
            data-aos-delay=""
            data-aos-duration="2000"
            data-aos="slide-up"
            data-aos-offset="50"
          >
            <a href="mailto:dgbsa22@gmail.com">dgbsa22@gmail.com</a>
            <p>01914088093</p>
            <div className="flex gap-3 md:gap-6">
              <a target="_blank" href="linkedin.html">
                <FontAwesomeIcon className="text-white" icon={faLinkedinIn} />
              </a>
              <a href="">
                <FontAwesomeIcon className="text-white" icon={faFacebookF} />
              </a>
              <a target="_blank" href="twitter.html">
                <FontAwesomeIcon icon={faTwitter} className="text-white" />
              </a>
              <a target="_blank" href="instagram.html">
                <FontAwesomeIcon icon={faInstagram} className="text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-white text-start md:text-center text-2xl mx-16 md:mx-0  pt-5 md:pt-0 md:text-4xl font-bold">
          <p> Bangladesh Shishu Academy , Doyel Chattor, Shabag, Dhaka-1000 </p>
        </div>
      </div>
      <div
        className="w-11/12 mx-auto text-white  font-bold pb-16"
        data-aos-duration="2000"
        data-aos="zoom-in"
        data-aos-offset="50"
      >
        <p className=" md:pl-16 mx-16 md:mx-0 ">
          ©2023 by . <br /> Proudly created with{" "}
          <a className="text-blue-400" href="#">
            Bangla Puzzle Ltd.
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
