import { useRef, useState } from "preact/hooks";
import PhotoCard from "./components/card";
import ClientsContent from "./components/clients-content";
import TalentsContent from "./components/talents-content";
import Modal from "./components/modal";
import Clients from "./components/clients";
import Talents from "./components/talents";
import useIntersectionObserver from "../reusableHooks";

const FifthPage = () => {
  const [expandedState, setExpandedState] = useState({
    clients: false,
    talents: false,
  });

  const headingRef = useRef(null);

  useIntersectionObserver(
    headingRef,
    "animate-fade-down",
    "animate-delay-[100ms]"
  );

  return (
    <>
      <div
        id="our-solution"
        className="flex flex-col items-center h-screen w-full bg-[#270530] justify-evenly pb-8 md:pb-12 lg:pb-16"
      >
        <h2
          className="text-[#FFFAEB] font-bold text-3xl font-work-sans lg:text-5xl leading-normal mt-12"
          ref={headingRef}
        >
          Why Spotlight One?
        </h2>
        <div className="flex flex-col gap-6 w-full lg:flex-row items-center md:justify-center h-full p-4">
          <PhotoCard
            photoName="cd"
            title="For Clients"
            description="Elevate your casting with Spotlight One for efficiency and control."
            handleExpansion={() =>
              setExpandedState({
                clients: true,
                talents: false,
              })
            }
            hoveredContent={<ClientsContent />}
          />

          <PhotoCard
            photoName="talent"
            title="For Talent"
            description="Your Spotlight Awaits : Unleash your potential with Spotlight One."
            handleExpansion={() =>
              setExpandedState({
                talents: true,
                clients: false,
              })
            }
            hoveredContent={<TalentsContent />}
          />
        </div>
      </div>
      <Modal isOpen={expandedState.clients}>
        <Clients
          handleBack={() =>
            setExpandedState({
              clients: false,
              talents: false,
            })
          }
        />
      </Modal>

      <Modal isOpen={expandedState.talents}>
        <Talents
          handleBack={() =>
            setExpandedState({
              clients: false,
              talents: false,
            })
          }
        />
      </Modal>
    </>
  );
};

export default FifthPage;
