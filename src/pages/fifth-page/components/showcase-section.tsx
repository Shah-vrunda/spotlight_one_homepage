import React from "preact/compat";

interface ShowcaseSectionProps {
  title: string;
  description: string;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col">
      <p className="font-semibold text-base leading-normal text-[#270530] font-work-sans">
        {title}
      </p>
      <p className="text-base leading-normal text-[#270530] font-work-sans text-justify">
        {description}
      </p>
    </div>
  );
};

export default ShowcaseSection;
