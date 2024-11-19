import { useRef } from "react";
import { Helmet } from "react-helmet";
import useIntersectionObserver from "./reusableHooks";

const FirstPage = () => {
  // Create references for the elements you want to observe
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  // Apply the useIntersectionObserver hook to the elements
  useIntersectionObserver(
    headingRef,
    "animate-fade-right",
    "animate-duration-2000"
  );
  useIntersectionObserver(
    paragraphRef,
    "animate-fade-right",
    "animate-delay-[500ms]"
  );
  useIntersectionObserver(
    imageRef,
    "animate-fade-left",
    "animate-duration-2000"
  );

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
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-[50px] font-bold font-work-sans "
          >
            Spotlight is now in India
          </h1>
          <h2
            ref={paragraphRef}
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
          ref={imageRef}
          src="1st-screen.svg"
          alt="1st screen image"
          className="w-full h-[80%] md:h-[50%] lg:h-screen object"
        />
      </div>
    </div>
  );
};

export default FirstPage;
