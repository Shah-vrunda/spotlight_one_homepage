import { Helmet } from "react-helmet";

const SixthPage = () => {
  return (
    <div
      id="about-us"
      className="screen5 w-full py-8 md:py-20 md:px-24 bg-[#51025E] text-[#fffaeb]"
    >
      <Helmet>
        <meta
          name="keywords"
          content="about spotlight one, spotlight one about, spotlight one information, spotlight one details, spotlight one overview, spotlight one company, spotlight one mission, spotlight one vision, spotlight one team, spotlight one history, spotlight one background, spotlight one services, spotlight one platform, spotlight one casting, spotlight one talent, spotlight one entertainment, spotlight one film industry, spotlight one casting directors, spotlight one performers"
        />
      </Helmet>
      <div className="flex flex-col gap-20 md:gap-12 xl:gap-24 md:flex-row  justify-center items-center">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className=" text-2xl font-bold font-work-sans md:hidden"
        >
          About Us
        </h1>
        <div
          data-aos="fade"
          data-aos-duration="5000"
          data-aos-delay="50"
          className=""
        >
          <img
            src="about.svg"
            alt="about us image"
            className="object-contain"
          />
        </div>
        <div className="w-[80%] md:w-[50%]">
          <div className="flex flex-col xl:gap-20 lg:gap-8 md:gap-5 justify-center h-full">
            <h3
              data-aos="fade-left"
              data-offset="0"
              className="text-5xl  font-bold font-work-sans hidden md:inline-block"
            >
              About Us
            </h3>
            <text
              data-aos="fade"
              data-offset="0"
              data-aos-delay="50"
              className="font-medium text-base leading-7 font-wix-madefor-display text-justify"
            >
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
