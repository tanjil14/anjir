import Audience from "../components/Audience/Audience";
import Footer from "../components/Footer/Footer";
import Ideology from "../components/Ideology/Ideology";
import Initiative from "../components/Initiative/Initiative";
import Leadership from "../components/Leadership/Leadership";
import Map from "../components/Map/Map";
import MediaCoverage from "../components/MediaCoverage/MediaCoverage";
import Navbar from "../components/Navbar/Navbar";
import Newsletter from "../components/Newsletter/Newsletter";
import OngoingEvent from "../components/OngoingEvent/OngoingEvent";
import Photo from "../components/Photo/Photo";
import Publications from "../components/Publications/Publications";
import Slider from "../components/Slider/Slider";
import UpcomingEvent from "../components/UpcomingEvent/UpcomingEvent";
import Video from "../components/Video/Video";
import WhtasUp from "../components/WhatsUp/WhtasUp";

const Home = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full p-4 md:px-5 md:py-8 bg-[#115c8f] shadow">
        <Navbar />
      </header>
      <main>
        <Slider />
        <Publications />
        <Ideology />
        <Leadership />
        <UpcomingEvent />
        <OngoingEvent />
        <Initiative />
        <Audience />
        <Video />
        <Photo />
        <MediaCoverage />
        <Map />
        <WhtasUp />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;
