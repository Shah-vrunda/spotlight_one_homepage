import { Helmet } from "react-helmet";

const BottomNavigation = () => {
  return (
    <footer
      className="bottom-navigation bg-[#270530] flex pb-8 px-6 lg:px-16 h-64 justify-between md:justify-evenly items-center"
      id="footer"
    >
      <Helmet>
        <meta
          name="keywords"
          content="Spotlight One, bottom navigation, spotlight one privacy policy, spotlight one help, spotlight one contact"
        />
      </Helmet>
      <a
        className="flex flex-col items-center gap-3  hover:cursor-pointer"
        href="#home"
      >
        <img
          src="spotlight.svg"
          alt="Spotlight One logo"
          className="w-14 md:w-36"
        />
        <img src="one.svg" alt="Spotlight One logo" className="w-26 md:w-48" />
      </a>
      <nav className="text-[#fffaeb] text-sm md:text-xl font-normal font-work-sans flex flex-col md:flex-row gap-2 md:gap-10">
        <a href="https://www.talentsystems.com/" target="_blank">
          About Talent Systems
        </a>
        <a target={"_blank"} href="https://app.spotlightone.com/privacy-policy">
          Terms of Use
        </a>
        <a href="mailto:contact@spotlightone.com">Contact Us</a>
        <a
          target={"_blank"}
          href="https://app.spotlightone.com/terms-and-conditions"
        >
          Privacy Policy
        </a>
        <a href="#">Help Center</a>
      </nav>
    </footer>
  );
};

export default BottomNavigation;
