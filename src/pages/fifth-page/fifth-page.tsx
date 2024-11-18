import { useState } from "preact/hooks";
import PhotoCard from "./components/card";
import ClientsContent from "./components/clients-content";
import TalentsContent from "./components/talents-content";
import Modal from "./components/modal";
import Clients from "./components/clients";
import Talents from "./components/talents";

const FifthPage = () => {
  const [expandedState, setExpandedState] = useState({
    clients: false,
    talents: false,
  });

  return (
    <>
      <div
        id="our-solutions"
        className="flex flex-col items-center h-screen w-full bg-[#270530] justify-center gap-4 p-8 md:p-12 lg:p-16"
      >
        <h1 className="text-[#FFFAEB] font-bold text-3xl lg:text-5xl leading-normal">
          Why Spotlight One?
        </h1>
        <div className="flex flex-col gap-6 w-full h-full lg:flex-row  items-center md:justify-center">
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
