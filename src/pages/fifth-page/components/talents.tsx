import ShowcaseSection from "./showcase-section";
import { IoClose } from "react-icons/io5";

interface TalentsProps {
  handleBack: () => void;
}

const Talents = ({ handleBack }: TalentsProps) => {
  return (
    <div
      className="flex flex-col w-full overflow-x-hidden overflow-y-auto h-full md:h-screen bg-[#FFFAEB] p-8 md:p-20 gap-10 relative"
      id="talents"
    >
      <text className="text-2xl lg:text-4xl text-center font-work-sans font-bold leading-normal text-[#270530] self-start">
        For Talent
      </text>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row lg:space-x-12 md:gap-10">
          <div className="relative lg:w-[42%]">
            <img src="talent.svg" className="w-full" />
            <img
              src="yellow-circle.svg"
              alt={"yellow-circle"}
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:flex"
            />
          </div>

          <div className="flex flex-col mt-4 md:mt-0 md:flex-row md:flex-grow gap-3 lg:w-1/2 justify-between">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 md:w-[44%] h-full lg:my-[14%] lg:gap-12">
              <ShowcaseSection
                title="Get Access to Nationwide Opportunities :"
                description="Your next role could be just around the corner or anywhere in the country. Spotlight One brings a universe of auditions to your fingertips, making geographical boundaries a thing of the past."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />

              <ShowcaseSection
                title="Join a Global Casting Ecosystem Join the World’s Elite : "
                description="By becoming a part of Spotlight One, you’re entering the world’s largest casting software ecosystem. Be where the world is watching. Be where your Talent can thrive."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
            </div>

            <div className="flex flex-col gap-3 md:w-[44%] h-full lg:my-[14%]">
              <ShowcaseSection
                title="Create your Personal Portfolio : "
                description="Present your best self with a professional portfolio on Spotlight One. Highlight your Skills, experience, and media in a polished profile that you can share globally with a unique link. Stand out, get noticed."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src="purple-circle.svg"
        className="absolute -top-14 -right-3 hidden lg:flex"
      />
      <img
        src="pink-circle.svg"
        className="absolute -bottom-14 -right-3 hidden lg:flex"
      />
      <button
        className="absolute top-10 right-7 flex items-center gap-2 text-xs font-bold text-[#270530] lg:text-white"
        onClick={handleBack}
      >
        <IoClose size={30} />
      </button>
    </div>
  );
};

export default Talents;
