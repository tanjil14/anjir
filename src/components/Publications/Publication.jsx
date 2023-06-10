/* eslint-disable react/prop-types */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Publication = ({icon,text}) => {
    return (
        <div className="h-44 w-44 flex justify-center items-center bg-[#0080d7] rounded-full">
        <div className="text-center text-white">
            <div className="text-5xl"><FontAwesomeIcon icon={icon} /></div>
            <a href="" target="_blank" className="hover:underline block text-lg pt-3 work-sans tracking-tighter font-medium px-4 leading-tight">{text}</a>
        </div>
    </div>
    );
};

export default Publication;