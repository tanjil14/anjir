/* eslint-disable react/prop-types */
const Card = ({img,date,title,desc}) => {
  return (
    <div className="mx-2 p-2 h-[466px] w-[24em] object-cover object-center bg-white border border-solid border-[#f8f8f8] overflow-hidden rounded-md">
      <div className="p-1 border border-gray-300 rounded-md">
        <img src={img} alt="News Image" />
      </div>
      <div>
        <div className="mt-4 text-gray-400">{date}</div>
        <a
          href=""
          className="py-1 text-[17px] font-semibold tracking-[-0.05em] overflow-hidden text-ellipsis line-clamp-2 break-words"
        >
          {title}
        </a>
        <p className="text-base text-ellipsis line-clamp-5 break-words">
          {desc}
        </p>
        <span>
          <a
            href=""
            className="underline text-base font-medium cursor-pointer hover:text-blue-500"
          >
            Learn more
          </a>
        </span>
      </div>
    </div>
  );
};

export default Card;
