import Ideology from "../components/Ideology/Ideology";
import Leadership from "../components/Leadership/Leadership";
import Navbar from "../components/Navbar/Navbar";
import OngoingEvent from "../components/OngoingEvent/OngoingEvent";
import Publications from "../components/Publications/Publications";
import Slider from "../components/Slider/Slider";
import UpcomingEvent from "../components/UpcomingEvent/UpcomingEvent";

const Home = () => {
  return (
    <>
      <header className="fixed top-0 z-50 w-full p-4 md:px-5 md:py-8 bg-[#115c8f] shadow">
        <Navbar />
      </header>
      <main>
        <Slider/>
        <Publications/>
        <Ideology/>
        <Leadership/>
        <UpcomingEvent/>
        <OngoingEvent/>
      </main>
    </>
  );
};

export default Home;
