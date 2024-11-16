const ThirdPage = () => {
  return (
    <div className="screen3 flex w-full bg-[#fffaeb] relative p-10 md:p-0">
      <div className="w-full flex flex-col md:flex-row justify-between md:pt-16 md:pb-36 md:px-40 z-10 relative">
        <div className=" flex flex-col md:w-[60%] gap-8 md:gap-14 text-[#270530] justify-center">
          <div className="flex flex-col gap-2 text-4xl md:text-5xl font-bold">
            <text>Made in India,</text>
            <text>Made for India</text>
          </div>
          <text className="flex flex-col text-md md:text-[26px] font-normal font-['Wix Madefor Text']">
            <span>Spotlight One has been developed in </span>
            <span>consultation with the country’s foremost</span>
            <span>casting directors and studio executives. </span>
          </text>
        </div>
        <div className="md:w-[40%] mt-4 md:mt-0 pb-[10%] md:pb-0 h-[380px] md:h-full flex justify-center">
          <img src="3rd-screen.svg" className="object-cover" />
        </div>
      </div>
      <div className="absolute -bottom-2 md:bottom-0 left-0 w-full  h-12 md:h-28 z-0">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polygon fill="#51025e" points="0,40 100,40 100,0" />
        </svg>
      </div>
    </div>
  );
};

export default ThirdPage;
