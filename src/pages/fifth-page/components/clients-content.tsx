import ShowcaseSection from "./showcase-section";

const ClientsContent = () => {
  return (
    <div className="flex flex-col md:flex-row md:flex-grow gap-3 justify-between bg-transparent p-6 rounded-lg animate-fade-right animate-delay-300 left-full text-white">
      <div className="flex flex-col gap-3 md:w-[44%] h-full justify-evenly">
        <ShowcaseSection
          title="Client Showcase:"
          description="Personalized company profiles with your Bio, website, contact
        info, social media handles and past work history."
        />
        <ShowcaseSection
          title="Intelligent Filtering:"
          description="Quickly sift through submissions with advanced filters, finding
        the ideal talent in just a few clicks."
        />
        <ShowcaseSection
          title="Complete Data Ownership:"
          description="Secure exclusive control over all submission data, ensuring your casting resources are entirely in your hands."
        />
        <ShowcaseSection
          title="Professional Casting Calls:"
          description="Generate stunning casting call posters with ease, enhancing your brand’s appeal and presence across social media."
        />
      </div>
      <div className="flex flex-col gap-3  md:w-[44%] h-full justify-evenly">
        <ShowcaseSection
          title="Comprehensive Talent Profiles:"
          description="Access complete resumes, media, skills,  and past work credits for every single artist at a glance."
        />
        <ShowcaseSection
          title="Enhanced Casting Visibility:"
          description="Maintain control and clarity in the casting process with the ability to add collaborators and oversee every step from any corner of the world."
        />
        <ShowcaseSection
          title="Expansive Nationwide Reach:"
          description="Break free from regional limits and invite  talent submissions from across the country, finding the perfect match for any project, anywhere."
        />
        <ShowcaseSection
          title="Centralized Submissions:"
          description="Organise and manage all talent submissions on a secure, unified platform, avoiding the clutter of emails and messages."
        />
      </div>
    </div>
  );
};

export default ClientsContent;
