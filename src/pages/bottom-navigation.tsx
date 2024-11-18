const BottomNavigation = () => {
  return (
    <div className="bottom-navigation bg-[#270530] flex pb-8 px-6 lg:px-16 h-64 justify-between  md:justify-evenly items-center">
      <div className="flex flex-col items-center gap-3">
        <img src="/spotlight.svg" className="w-14 md:w-36" />
        <img src="/one.svg" className="w-26 md:w-48" />
      </div>
      <div className="text-[#fffaeb] text:sm  md:text-xl font-normal font-['Wix Madefor Display'] flex flex-col md:flex-row gap-2 md:gap-10">
        <a href="https://www.talentsystems.com/" target="_blank">
          About Talent Systems
        </a>
        <a>Terms of Use</a>
        <a>Contact Us</a>
        <a>Privacy Policy</a>
        <a>Help Center</a>
      </div>
    </div>
  );
};

export default BottomNavigation;
