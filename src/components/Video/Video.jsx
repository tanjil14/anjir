import Player from "./Player";

const Video = () => {
  return (
    <section className=" bg-[#0080d7]">
      <div className="w-11/12 mx-auto py-10">
        <div className="xl:pr-20">
          <p className="text-3xl text-white font-bold text-uppercase tracking-[.4em]">
            Video Gallery
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:py-5 mx-auto w-full  lg:w-8/12 mt-4"
        >
          <Player videoLink="https://www.youtube.com/embed/k0FC8biMK6A" />

          <Player videoLink="https://www.youtube.com/embed/YrpRgqawOBo" />

          <Player videoLink="https://www.youtube.com/embed/Cn-q-gXmrBA" />

          <Player videoLink="https://www.youtube.com/embed/sE64kscT1pA" />

          <Player videoLink="https://www.youtube.com/embed/o3rR5_O0hss" />
          <Player videoLink="https://www.youtube.com/embed/sPWnaUul8OQ" />
        </div>
        <div className="flex justify-center">
            <a className="py-2 px-6 shadow bg-zinc-200 font-semibold hover:bg-zinc-300" href="">View More</a>
        </div>
      </div>
    </section>
  );
};

export default Video;
