import ShowcaseSection from "./showcase-section";
import { IoMdArrowRoundBack } from "react-icons/io";

interface TalentsProps {
  handleBack: () => void;
}

const Talents = ({ handleBack }: TalentsProps) => {
  return (
    <div
      className="flex flex-col w-full overflow-y-auto h-full md:h-screen bg-[#FFFAEB] p-8 md:p-20 gap-10 relative"
      id="talents"
    >
      <text className="text-2xl lg:text-4xl text-center font-[work-sans] font-bold leading-normal text-[#270530] self-start">
        For Talents
      </text>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex flex-col md:flex-row md:space-x-12 md:gap-10">
          <div className="relative md:w-[42%]">
            <img alt="talent icon" src="./talent.svg" className="w-full" />
            <img
              src="./yellow-circle.svg"
              alt={"yellow-circle"}
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:flex"
            />
          </div>

          <div className="flex flex-col mt-4 md:mt-0 md:flex-row md:flex-grow gap-3 md:w-1/2 justify-between">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:w-[44%] h-full lg:my-[14%] lg:gap-12">
              <ShowcaseSection
                title="Get Access to Nationwide Opportunities :"
                description="Your next role could be just around the corner or anywhere in the country. Spotlight One brings a universe of auditions to your fingertips, making geographical boundaries a thing of the past."
              />

              <ShowcaseSection
                title="Join a Global Casting Ecosystem Join the World’s Elite : "
                description="By becoming a part of Spotlight One, you’re entering the world’s largest casting software ecosystem. Be where the world is watching. Be where your Talent can thrive."
              />
            </div>

            <div className="flex flex-col gap-3 md:w-[44%] h-full lg:my-[14%]">
              <ShowcaseSection
                title="Create your Personal Portfolio : "
                description="Present your best self with a professional portfolio on Spotlight One. Highlight your Skills, experience, and media in a polished profile that you can share globally with a unique link. Stand out, get noticed."
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src="./purple-circle.svg"
        alt="purple-circle"
        className="absolute -top-14 -right-3 hidden md:flex"
      />
      <img
        src="./pink-circle.svg"
        alt="pink-circle"
        className="absolute -bottom-14 -right-3 hidden md:flex"
      />
      <button
        className="absolute top-10 right-7 flex items-center gap-2 text-xs font-bold text-[#270530] md:text-white"
        onClick={handleBack}
      >
        <IoMdArrowRoundBack size={30} />
      </button>
    </div>
  );
};

export default Talents;
