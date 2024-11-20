import { Helmet } from "react-helmet";

const FirstPage = () => {
  return (
    <div
      id="home"
      className="screen1 flex lg:flex-row flex-col-reverse w-full text-[#fffaeb] justify-center bg-[#040301] items-center"
    >
      <Helmet>
        <meta
          name="keywords"
          content="spotlight-one, spotlight, casting, spotlight india, india casting, largest casting software, largest casting software company"
        />
      </Helmet>
      <div className="lg:flex justify-center lg:w-1/2 h-full">
        <div className=" flex flex-col justify-center gap-11 lg:items-start items-center p-3 mb-3 lg:p-0 lg:mb-0">
          <h1
            data-aos="fade-right"
            data-aos-duration="4000"
            className={`text-3xl md:text-4xl lg:text-[50px] font-bold font-work-sans`}
          >
            Spotlight is now in India
          </h1>

          <h2
            data-aos="fade-right"
            data-aos-delay="150"
            className="text-sm md:text-lg lg:text-[22px] font-wix-madefor-display font-normal  flex flex-col gap-1 lg:gap-2"
          >
            <span>Spotlight - The home of casting is now in India.</span>
            <span>It has been a long time coming: the largest casting</span>
            <span>software company in the world meeting the largest</span>
            <span>film and entertainment industry in the world.</span>
          </h2>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          src="1st-screen.svg"
          alt="1st screen image"
          className="w-full h-[80%] md:h-[50%] lg:h-screen object"
        />
      </div>
    </div>
  );
};

export default FirstPage;
