import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navbarFilled, SetNavbarFilled] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("div[id]");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      if (
        currentSection === "about-us" ||
        currentSection === "our-solution" ||
        currentSection === "our-features" ||
        currentSection === "footer" ||
        currentSection === "company-carousel"
      ) {
        SetNavbarFilled(false);
      } else {
        SetNavbarFilled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="flex items-center justify-between flex-wrap p-4 lg:p-8 font-work-sans sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: navbarFilled ? "#51025e" : "#fffaeb" }}
    >
      <Helmet>
        <title>Spotlight One - Navbar</title>
        <meta name="description" content="Spotlight One navigation bar" />
        <meta
          name="keywords"
          content="Spotlight One, navigation bar, spotlight one home, spotlight one solution, spotlight one about us, , spotlight one signup ,  spotlight one login/signup, spotlight one login page, spotlight one signup page"
        />
      </Helmet>
      <div className="flex w-full lg:w-[35%] justify-between flex-shrink-0 text-white mr-6">
        <a className="flex gap-4 items-center active:" href="#home">
          <img
            src={navbarFilled ? "/spotlight.svg" : "/primary-logo-purple.svg"}
            alt="Spotlight one logo"
            className="h-4 lg:h-full"
          />
          <img
            src={navbarFilled ? "/one.svg" : "/secondary-logo-purple.svg"}
            alt="Spotlight one logo"
            className="h-4 lg:h-full"
          />
        </a>

        <div className="block lg:hidden">
          <button
            className={`flex items-center px-3 py-2 border rounded ${
              navbarFilled ? "text-white" : "text-[#51025e]"
            } border-transparent hover:border-white`}
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
        <div
          className={`${
            navbarFilled
              ? "text-[#fffaeb] hover:text-gray-200"
              : "text-[#51025e]"
          } text-[22px] md:text:md font-medium lg:flex-grow  lg:flex lg:gap-7 lg:justify-evenly lg:items-center lg:`}
        >
          <a
            href="#home"
            className="block hover:opacity-90 mt-4 lg:inline-block lg:mt-0  mr-4"
          >
            Home
          </a>
          <a
            href="#our-solution"
            className="block mt-4 hover:opacity-90 lg:inline-block lg:mt-0  mr-4"
          >
            Our Solution
          </a>
          <a
            href="#about-us"
            className="block mt-4 hover:opacity-90 lg:inline-block lg:mt-0  mr-4"
          >
            About Us
          </a>
          <a
            href="https://stg.spotlightone.com/signin"
            target={"_blank"}
            className={`${
              navbarFilled
                ? "text-[#51025e] bg-[#fffaeb] hover:animate-jump"
                : "text-[#fffaeb] bg-[#51025e] hover:animate-jump"
            } h-10 mt-4 lg:mt-0 p-2 rounded-3xl text-nowrap font-medium lg:h-12 lg:p-5 flex justify-center items-center animate-jump`}
          >
            Login / SignUp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
