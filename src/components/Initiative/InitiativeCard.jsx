/* eslint-disable react/prop-types */

const InitiativeCard = ({img,text}) => {
    return (
        <a
        href=""
        className="flex flex-col sm:flex-row gap-1 items-center border bg-[#f8f8f8] shadow-lg transition-all hover:-translate-y-2"
      >
        <div className="bg-white w-full sm:w-fit flex justify-center">
          <div className="w-32 h-32 flex items-center p-0 sm:p-2 bg-white">
            <img
              className="object-contain h-full w-full object-center"
              src={img}
              alt=""
            />
          </div>
        </div>
        <div
          style={{ letterSpacing: "-0.09" }}
          className="uppercase work-sans text-lg sm:text-xl text-[#115c8f] font-semibold tracking-tighter py-2 px-1"
        >
          {text}
        </div>
      </a>
    );
};

export default InitiativeCard;