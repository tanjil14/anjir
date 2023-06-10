const UpcomingEvent = () => {
  return (
    <section className="bg-white">
      <div className=" w-11/12 mx-auto py-10">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          className="xl:pr-20"
        >
          <p className="text-3xl text-[#115c8f] font-bold tracking-[.4em] uppercase">
            Upcoming Event
          </p>
        </div>
        <div
          data-aos-duration="2000"
          data-aos="fade-up"
          data-aos-offset="100"
          className="w-full lg:w-8/12 items-start mx-auto mt-10"
        >
          <div className="flex flex-col items-center md:flex-row gap-x-10 mx-auto w-full">
            <div className="w-full text-center">No event Found</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvent;
