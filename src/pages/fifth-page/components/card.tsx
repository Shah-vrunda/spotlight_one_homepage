import { FaChevronDown } from "react-icons/fa";

interface PhotoCardProps {
  photoName: string;
  title: string;
  description: string;
  handleExpansion?: () => void;
}

const PhotoCard = ({
  description,
  photoName,
  title,
  handleExpansion,
}: PhotoCardProps) => {
  return (
    <div className="flex flex-col bg-[#FFFAEB]  hover:cursor-pointer overflow-hidden transition-all duration-300 ease-in-out  md:h-[45vh] lg:h-[65vh] w-full md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto my-4 relative">
      <div
        className="w-full relative h-[75%]"
        style={{ paddingBottom: "48.25%" }}
      >
        <img
          src={`./${photoName}.svg`}
          alt={`${photoName}-pic`}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-2 md:p-4 pb-0">
        <h2 className="text-[#270530] textmd  md:text-xl lg:text-2xl font-medium">
          {title}
        </h2>
        <p className="text-[#270530] text-sm md:text-base lg:text-lg my-2">
          {description}
        </p>
      </div>
      <div className="flex absolute bottom-0 inset-x-0 justify-center items-center">
        <button onClick={handleExpansion}>
          <FaChevronDown color="#270530" size={24} />
        </button>
      </div>
    </div>
  );
};

export default PhotoCard;
