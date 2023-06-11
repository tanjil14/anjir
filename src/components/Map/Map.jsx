const Map = () => {
  return (
    <section>
      <div
        data-aos-duration="2000"
        data-aos="zoom-in"
        data-aos-offset="50"
        className="w-11/12 mx-auto py-10"
      >
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="w-full lg:w-5/12 overflow-hidden">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14610.059367731295!2d90.4009475!3d23.7290134!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2290178cf2c42315!2sBangladesh%20Shishu%20Academy!5e0!3m2!1sen!2sbd!4v1675940906085!5m2!1sen!2sbd"
              width="600"
              height="450"
              style={{border:"0"}}
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full lg:w-7/12">
               <div className="flex flex-col sm:flex-row gap-y-4 gap-x-4 2xl:gap-x-10 items-center justify-center">
            <div className="text-center">
                <h5 className="text-2xl md:text-3xl font-medium">Present Address</h5>
                <p className="text-lg">Present Address- Bangladesh Shishu Academy ,<br/> Doyel Chattor, Shabag, Dhaka-1000
                        </p>
            </div>
            <div className="text-center">
                        <h5 className="text-2xl md:text-3xl font-medium">Permanent Address</h5>
                        <p className="text-lg">Permanent Address- Mymensingh District <br/> Mymensingh, Bangladesh
                        </p>
                    </div>
               </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
