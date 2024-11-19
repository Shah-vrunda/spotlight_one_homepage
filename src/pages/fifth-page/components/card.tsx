import { useState } from "preact/hooks";
import { useRef } from "preact/hooks";
import useDeviceType from "../../../hooks/get-device-type";
import { FaChevronDown } from "react-icons/fa";
import useIntersectionObserver from "../../reusableHooks";

interface PhotoCardProps {
  photoName: string;
  title: string;
  description: string;
  handleExpansion?: () => void;
  hoveredContent?: React.ReactNode;
}

const PhotoCard = ({
  description,
  photoName,
  title,
  hoveredContent,
  handleExpansion,
}: PhotoCardProps) => {
  const [hoverState, setHoverState] = useState(false);
  const deviceType = useDeviceType();

  console.log(deviceType);

  const divRef = useRef(null);
  useIntersectionObserver(
    divRef,
    "animate-fade-left",
    "animate-duration-[180ms]"
  );

  return (
    <>
      {!hoverState && (
        <div
          ref={divRef}
          className="flex flex-col bg-[#FFFAEB] overflow-hidden transition-all duration-300 ease-in-out  md:h-[50%] lg:h-[65vh] w-full md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto my-4 relative hover:scale-105 hover:animate-fade-left hover:animate-duration-[180ms]"
          onMouseEnter={() => deviceType === "lg" && setHoverState(true)}
        >
          <div className="w-full relative h-[75%] pb-[33%]">
            <img
              src={`./${photoName}.svg`}
              alt={`${photoName}-pic`}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-1 md:p-2 pb-0 flex-grow flex flex-col justify-center">
            <h2 className="text-[#270530] textmd  md:text-xl lg:text-2xl font-medium">
              {title}
            </h2>
            <p className="text-[#270530] text-sm md:text-base lg:text-lg my-2">
              {description}
            </p>
          </div>
          {deviceType !== "lg" && (
            <div className="flex mb-2 justify-center items-center">
              <button onClick={handleExpansion}>
                <FaChevronDown color="#270530" size={24} />
              </button>
            </div>
          )}
        </div>
      )}

      {hoverState && deviceType === "lg" && (
        <div
          className={`relative bg-cover bg-center md:h-[45vh] lg:h-[65vh] w-full mx-auto my-4 transition-all duration-300 ease-in-out   opacity-80 ${
            photoName === "cd"
              ? "bg-cd-background-pattern"
              : "bg-talent-background-pattern"
          }`}
          onMouseLeave={() => deviceType === "lg" && setHoverState(false)}
        >
          <div className="absolute inset-0 w-full h-full">
            <div
              className={`w-full h-full bg-cover bg-center ${
                photoName === "cd"
                  ? "bg-cd-background-pattern"
                  : "bg-talent-background-pattern"
              } filter blur-md`}
            ></div>
          </div>

          <div className="absolute inset-0 bg-gray-900 opacity-40 w-full h-full"></div>

          <div className="relative z-10 h-full">{hoveredContent}</div>
        </div>
      )}
    </>
  );
};

export default PhotoCard;
