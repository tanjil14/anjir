import img333 from "../../assets/images/initiative/333.jpg";
import img999 from "../../assets/images/initiative/999.jpg";
import startup from "../../assets/images/initiative/statup.jpg";
import porichoy from "../../assets/images/initiative/porichoy.jpg";
import food from "../../assets/images/initiative/food.png";
import surokkha from "../../assets/images/initiative/surokkha.png";
import InitiativeCard from "./InitiativeCard";
const Initiative = () => {
  return (
    <section className="bg-white">
      <div
        data-aos-duration="2000"
        data-aos="fade-up"
        data-aos-offset="100"
        className="w-11/12 mx-auto"
      >
        <div className="w-full xl:w-8/12 mx-auto py-10 work-sans">
          <div className="flex flex-col lg:flex-row gap-x-10 gap-y-4">
            <div className="w-full lg:w-4/12">
              <h4 className="text-2xl text-[#115c8f] lg:text-3xl font-semibold tracking-tighter uppercase">
                INITIATIVES
              </h4>
              <p className="mt-4">
                ICT Division has taken initiatives to build Digital Bangladesh.
                Our software and service industry is a billion-dollar market and
                is expected to grow our export to USD 5 Billion by 2025. We are
                serving clients in the array of domains –Financial Services,
                Telecom companies, Healthcare. Various Startup projects,
                High-Tech parks, Sheikh Kamal IT Training and Incubation Centers
                etc projects are underway across the country.
              </p>
            </div>
            <div className="w-full lg:w-8/12">
              <div className=" w-full overflow-hidden">
                <div className=" active float-left w-full">
                  <div className="grid grid-cols-2 gap-4">
                    <InitiativeCard img={img333} text="333"/>
                    <InitiativeCard img={img999} text="999"/>
                    <InitiativeCard img={startup} text="Startup Bangladesh"/>
                    <InitiativeCard img={porichoy} text="Porichoy"/>
                    <InitiativeCard img={food} text="Food For Nations"/>
                    <InitiativeCard img={surokkha} text="Surokkha"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Initiative;
