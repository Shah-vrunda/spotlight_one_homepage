import React, { ReactNode } from "preact/compat";

interface ShowcaseSectionProps {
  title: ReactNode;
  description: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({
  title,
  description,
  descriptionClassName,
  titleClassName,
}) => {
  return (
    <div className="flex flex-col">
      <p
        className={`font-semibold text-base leading-normal text-[#FFFAEB] font-work-sans ${titleClassName}`}
      >
        {title}
      </p>
      <p
        className={`text-base leading-normal text-[#FFFAEB] font-work-sans text-left ${descriptionClassName}`}
      >
        {description}
      </p>
    </div>
  );
};

export default ShowcaseSection;
