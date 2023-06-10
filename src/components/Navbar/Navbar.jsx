import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
import {Links} from "../../utils/NavLinks"
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="container mx-auto flex justify-between items-center">
      <a href="" className="block text-white overflow-hidden ">
        <div className="block md:hidden lg:block">
          <div className="flex items-center">
            <div>
              <img width="25" height="44" src={logo} alt="logo" />
            </div>
            <div className="text-sm md:text-xl font-bold">
              <p>Anjir</p>
              <p>Liton</p>
            </div>
            <div className="pl-2 text-sm font-mono hidden xl:block">
              <p>Children&#039;s</p>
              <p>Writter</p>
            </div>
          </div>
        </div>
      </a>
      <div className="min-h-[60px] flex justify-center items-center">
        <button onClick={toggleMenu} className="z-50 md:hidden relative">
          <span className="sr-only">Toggle Menu</span>
          <div
            className={`h-6 flex flex-col items-end justify-between ${
              isMenuOpen ? "hidden" : ""
            }`}
          >
            <span className="block h-0.5 w-8 bg-white rounded-full"></span>
            <span className="block h-0.5 w-8 bg-white rounded-full"></span>
            <span className="block h-0.5 w-8 bg-white rounded-full"></span>
          </div>
          <div
            className={`h-7 flex flex-col items-end justify-between ${
              isMenuOpen ? "" : "hidden"
            }`}
          >
            <span className="block h-0.5 w-8 bg-white rounded-full origin-left transform rotate-45 translate-y-0.5"></span>
            <span className="block h-0.5 w-8 bg-white rounded-full origin-left transform -rotate-45 -translate-y-0.5"></span>
          </div>
        </button>
        <div
          className={`menu ${
            isMenuOpen ? "block" : "hidden"
          } md:block text-right bg-[#115c8f] fixed top-0 left-0 h-screen w-screen flex flex-col items-center justify-center md:text-lg md:relative md:bg-transparent md:w-auto md:h-auto md:text-left`}
        >
          <ul className="flex text-white text-sm  flex-col gap-y-3 md:flex-row md:gap-2">
            {Links.map((link) => (
              <li
                key={link.name}
                style={link.submenu ? { position: "relative" } : null}
                className="md:px-2 md:border-red-200 py-2"
              >
                <a
                  href=""
                  className="transition ease-in-out duration-150 text-lg font-medium"
                >
                  {link.name}
                  {link?.submenu && (
                    <span className="ml-1">
                      <FontAwesomeIcon icon={faChevronDown} size="sm" />
                    </span>
                  )}
                </a>
                {link?.submenu && (
                  <ul className="top-8 flex w-40 p-4 rounded dropdown-menu">
                    {link?.submenu?.map((submenuItem) => (
                      <li key={submenuItem.name}>
                        <a
                          href=""
                          className="transition ease-in-out duration-150 block w-full"
                        >
                          {submenuItem.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="md:px-2 py-2">
              <a
                href=""
                style={{ wordBreak: "keep-all" }}
                className="text-white border-2 border-white hover:text-black px-2 py-1 font-medium transition ease-in-out duration-150 text-lg"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
