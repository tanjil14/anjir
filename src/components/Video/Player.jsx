/* eslint-disable react/prop-types */

const Player = ({videoLink}) => {
  return (
    <div className="bg-zinc-100 relative pt-[56.25%] w-full ">
      <iframe
        className="absolute left-0 w-full top-0 h-full"
        src={videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Player;
