import ShowcaseSection from "./showcase-section";
import { IoClose } from "react-icons/io5";
interface ClientsProps {
  handleBack: () => void;
}

const Clients = ({ handleBack }: ClientsProps) => {
  return (
    <div
      className="flex flex-col w-full overflow-y-auto  md:overflow-x-hidden h-full md:h-screen bg-[#FFFAEB] p-8 md:p-20 gap-10 relative"
      id="clients"
    >
      <text className="text-2xl lg:text-4xl text-center font-work-sans font-bold leading-normal text-[#270530] self-start">
        For Clients
      </text>
      <div className="flex flex-col lg:flex-row items-center">
        <div className="flex flex-col lg:flex-row lg:space-x-12 md:gap-10">
          <div className="relative lg:w-[42%] ">
            <img src="./cd.svg" className="w-full" />
            <img
              src="./yellow-circle.svg"
              alt="yellow-circle"
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 hidden md:flex"
            />
          </div>

          <div className="flex flex-col md:flex-row md:flex-grow gap-3 lg:w-1/2 justify-between">
            <div className="flex flex-col gap-3 md:w-[44%] h-full justify-evenly">
              <ShowcaseSection
                title="Client Showcase:"
                description="Personalized company profiles with your Bio, website, contact
              info, social media handles and past work history."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
              <ShowcaseSection
                title="Intelligent Filtering:"
                description="Quickly sift through submissions with advanced filters, finding
              the ideal talent in just a few clicks."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
              <ShowcaseSection
                title="Complete Data Ownership:"
                description="Secure exclusive control over all submission data, ensuring your casting resources are entirely in your hands."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
              <ShowcaseSection
                title="Professional Casting Calls:"
                description="Generate stunning casting call posters with ease, enhancing your brand’s appeal and presence across social media."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
            </div>
            <div className="flex flex-col gap-3  md:w-[44%] h-full justify-evenly">
              <ShowcaseSection
                title="Comprehensive Talent Profiles:"
                description="Access complete resumes, media, skills,  and past work credits for every single artist at a glance."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
              <ShowcaseSection
                title="Enhanced Casting Visibility:"
                description="Maintain control and clarity in the casting process with the ability to add collaborators and oversee every step from any corner of the world."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
              <ShowcaseSection
                title="Expansive Nationwide Reach:"
                description="Break free from regional limits and invite  talent submissions from across the country, finding the perfect match for any project, anywhere."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
              <ShowcaseSection
                title="Centralized Submissions:"
                description="Organise and manage all talent submissions on a secure, unified platform, avoiding the clutter of emails and messages."
                titleClassName="!text-[#270530]"
                descriptionClassName="!text-[#270530]"
              />
            </div>
          </div>
        </div>
      </div>

      <img
        src="./purple-circle.svg"
        className="absolute -top-14 -right-3 hidden lg:flex"
      />
      <img
        src="./pink-circle.svg"
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

export default Clients;
