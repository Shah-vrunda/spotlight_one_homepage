const FirstPage = () => {
  return (
    <div
      id="home"
      className="screen1 flex lg:flex-row flex-col-reverse w-full text-[#fffaeb] justify-center bg-[#040301] items-center"
    >
      <div className="lg:flex justify-center lg:w-1/2 h-full">
        <div className="font-['Work Sans'] flex flex-col justify-center gap-11 lg:items-start items-center p-3 mb-3 lg:p-0 lg:mb-0">
          <text className="text-3xl md:text-4xl lg:text-[50px] font-bold ">
            Spotlight is now in India
          </text>
          <text className="text-sm md:text-lg lg:text-[22px] font-wix-madefor-display font-normal  flex flex-col gap-1 lg:gap-2">
            <span>Spotlight - The home of casting is now in India.</span>
            <span>It has been a long time coming : the largest casting</span>
            <span>software company in the world meeting the largest</span>
            <span>film and entertainment industry in the world.</span>
          </text>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          src="/1st-screen.svg"
          className="w-full h-[80%] md:h-[50%] lg:h-screen object"
        />
      </div>
    </div>
  );
};

export default FirstPage;
