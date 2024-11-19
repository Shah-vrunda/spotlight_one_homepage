import useIntersectionObserver from "../../reusableHooks";
import ShowcaseSection from "./showcase-section";
import { useRef } from "react";

const TalentsContent = () => {
  const divRef = useRef(null);
  useIntersectionObserver(
    divRef,
    "animate-fade-left",
    "animate-duration-[180ms]"
  );
  return (
    <div
      ref={divRef}
      className="flex flex-row mt-4 animate-fade-left animate-duration-[180ms] p-6 bg-transparent gap-12"
    >
      <div className="flex flex-col gap-3 h-full lg:gap-12">
        <ShowcaseSection
          title="Get Access to Nationwide Opportunities :"
          description="Your next role could be just around the corner or anywhere in the country. Spotlight One brings a universe of auditions to your fingertips, making geographical boundaries a thing of the past."
        />

        <ShowcaseSection
          title={
            <h2>
              Join a Global Casting Ecosystem <br />
              Join the World’s Elite :{" "}
            </h2>
          }
          description="By becoming a part of Spotlight One, you’re entering the world’s largest casting software ecosystem. Be where the world is watching. Be where your Talent can thrive."
        />
      </div>

      <div className="flex flex-col gap-3 h-full ">
        <ShowcaseSection
          title="Create your Personal Portfolio : "
          description="Present your best self with a professional portfolio on Spotlight One. Highlight your Skills, experience, and media in a polished profile that you can share globally with a unique link. Stand out, get noticed."
        />
      </div>
    </div>
  );
};

export default TalentsContent;
