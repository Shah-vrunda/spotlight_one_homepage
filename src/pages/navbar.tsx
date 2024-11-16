import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#51025E] p-4 lg:p-8 font-sans sticky top-0 z-50 shadow-md">
      <div className="flex w-full lg:w-[35%] justify-between flex-shrink-0 text-white mr-6">
        <div className="flex gap-4 items-center">
          <img src="/spotlight.svg" alt="Spotlight" className="h-4 lg:h-full" />
          <img src="/one.svg" alt="One" className="h-4 lg:h-full" />
        </div>

        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-transparent hover:border-white"
            onClick={toggleMenu}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`flex-grow lg:flex lg:items-center lg:w-auto ${
          !isMenuOpen && "hidden"
        }`}
      >
        <div className="text-sm md:text:md md:font-semibold lg:flex-grow lg:flex lg:gap-7 lg:justify-evenly lg:items-center lg:">
          <a
            href="#home"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
          >
            Home
          </a>
          <a
            href="#our-solutions"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
          >
            Our Solutions
          </a>
          <a
            href="#about-us"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
          >
            About Us
          </a>
          <a
            href="https://stg.spotlightone.com/signin"
            target={"_blank"}
            className="h-10 mt-4 lg:mt-0 p-2 rounded-3xl text-nowrap font-medium text-[#51025e] bg-[#fffaeb] lg:h-12 lg:p-5 flex justify-center items-center"
          >
            Login / SignUp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
