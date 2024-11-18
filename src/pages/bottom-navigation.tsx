import { Helmet } from "react-helmet";

const BottomNavigation = () => {
  return (
    <footer
      className="bottom-navigation bg-[#270530] flex pb-8 px-6 lg:px-16 h-64 justify-between md:justify-evenly items-center"
      id="footer"
    >
      <Helmet>
        <title>Spotlight One - Bottom Navigation</title>
        <meta name="description" content="Spotlight One bottom navigation" />
        <meta
          name="keywords"
          content="Spotlight One, bottom navigation, spotlight one privacy policy, spotlight one help, spotlight one contact"
        />
      </Helmet>
      <div className="flex flex-col items-center gap-3">
        <img
          src="/spotlight.svg"
          alt="Spotlight One logo"
          className="w-14 md:w-36"
        />
        <img src="/one.svg" alt="Spotlight One logo" className="w-26 md:w-48" />
      </div>
      <nav className="text-[#fffaeb] text-sm md:text-xl font-normal font-work-sans flex flex-col md:flex-row gap-2 md:gap-10">
      <a href="https://www.talentsystems.com/" target="_blank">
          About Talent Systems
        </a>
        <a href="/terms">Terms of Use</a>
        <a href="/contact">Contact Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/help">Help Center</a>
      </nav>
    </footer>
  );
};

export default BottomNavigation;
