const SixthPage = () => {
  return (
    <div
      id="about-us"
      className="screen5 w-full py-8 md:py-20 md:px-24 bg-[#51025E] text-[#fffaeb]"
    >
      <div className="flex flex-col gap-20 md:gap-0 md:flex-row items-center">
        <text className=" text-2xl font-bold font-['Work Sans'] md:hidden">
          About Us
        </text>
        <div className="flex justify-center w-[80%] md:w-[50%]">
          <img src="/about.svg" className="object-contain" />
        </div>
        <div className="w-[80%] md:w-[50%]">
          <div className="flex flex-col gap-20 lg:w-[400px] xl:w-[613px] justify-center">
            <text className=" text-5xl font-bold font-['Work Sans'] hidden md:inline-block">
              About Us
            </text>
            <text className="font-medium text-base leading-7 font-['Wix Madefor Display'] text-justify">
              Spotlight One is a subsidiary of Talent Systems LLC, the leading
              technology solution provider for casting and auditioning to the
              entertainment industry globally. Casting Directors, agents and
              production companies worldwide use our portfolio of products to
              source and manage talent across film, television, commercials,
              theater and digital projects powering an unparalleled global
              casting software ecosystem.
              <br /> <br />
              Talent Systems is headquartered in Los Angeles and operates in the
              rest of  US, Canada, UK, Europe, Latin America, Australia, New
              Zealand and India.
              <br /> <br />
              With a history stretching back to 1927, Talent Systems companies
              have  powered the casting process for hundreds of thousands of
              projects around  the globe.
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
