import { useRef } from "react";
import useIntersectionObserver from "./reusableHooks";

const FourthPage = () => {
  const titleRef = useRef(null);
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);
  const taglineRef = useRef(null);

  useIntersectionObserver(
    titleRef,
    "animate-fade-down",
    "animate-duration-1000"
  );
  useIntersectionObserver(feature1Ref, "animate-jump", "animate-duration-1000");
  useIntersectionObserver(feature2Ref, "animate-jump", "animate-duration-1000");
  useIntersectionObserver(feature3Ref, "animate-jump", "animate-duration-1000");
  useIntersectionObserver(
    taglineRef,
    "animate-fade-up",
    "animate-duration-1000"
  );

  return (
    <div
      className="screen4 text-[#fffaeb] py-10 px-10 md:pt-28 md:pb-28 flex justify-center w-full bg-[#51025e] h-auto relative"
      id="our-features"
    >
      <div className="flex flex-col gap-16 md:gap-28">
        <div className="flex justify-center w-full">
          <div className="title flex flex-col justify-center gap-2 w-full">
            <text
              ref={titleRef}
              className="animate-fade-down animate-duration-1000 font-bold text-md md:text-2xl self-center font-work-sans"
            >
              It’s the Casting Director’s Casting Platform
            </text>
            <text className="md:w-3/5 self-center text:lg md:text-2xl font-wix-madefor-display font-normal text-center">
              Spotlight One gives casting directors the freedom to do what they
              do best: unearth talented performers. We streamline your casting
              process with :
            </text>
          </div>
        </div>
        <div className="flex justify-evenly font-wix-madefor-display gap-8 md:gap-0 md:flex-row flex-col text-base font-normal">
          <div className="flex flex-col gap-4 md:gap-12  w-full md:w-1/4">
            <div
              ref={feature1Ref}
              className="rounded-full animate-jump animate-duration-1000 w-24 h-24 self-center"
            >
              <img
                src="/search.svg"
                alt="search icon"
                className="rounded-full object-cover"
              />
            </div>
            <text className="text-center">
              Broadcast targeted casting calls, reaching untapped talent
              nationwide
            </text>
          </div>
          <div className="flex flex-col gap-4 md:gap-12 w-full md:w-1/4">
            <div
              ref={feature2Ref}
              className="rounded-full w-24 h-24 self-center animate-jump animate-duration-1000"
            >
              <img
                src="/list.svg"
                alt="list icon"
                className="rounded-full object-cover"
              />
            </div>
            <text className="text-center">
              Use intelligent filters for quick, precise role matching
            </text>
          </div>
          <div className="flex flex-col gap-4 md:gap-12  w-full md:w-1/4">
            <div
              ref={feature3Ref}
              className="rounded-full w-24 h-24 self-center animate-jump animate-duration-1000"
            >
              <img
                src="/centralize.svg"
                alt="centralize icon"
                className="rounded-full object-cover"
              />
            </div>
            <text className="text-center">
              Broadcast targeted casting calls, reaching untapped talent
              nationwide
            </text>
          </div>
        </div>
        <div className="flex justify-center">
          <text
            ref={taglineRef}
            className="animate-fade-up animate-duration-1000 text:lg md:text-2xl font-normal font-wix-madefor-display text-center "
          >
            Experience casting freedom with Spotlight One, where technology
            meets talent.
          </text>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-[6%] md:w-1/12 h-full overflow-hidden">
        <div className="h-full animation-slide-down">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polygon fill="#ffc012" points="0,0 100,0 0,100" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-10 md:h-28 z-0">
        <svg
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <polygon fill="#ffc012" points="0,40 100,40 100,0" />
        </svg>
      </div>
    </div>
  );
};

export default FourthPage;
