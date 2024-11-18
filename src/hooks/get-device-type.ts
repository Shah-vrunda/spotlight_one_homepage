import { useState, useEffect } from "react";

const getDeviceType = (width: number) => {
  if (width < 768) return "sm";
  if (width >= 768 && width < 1024) return "md";
  if (width >= 1024) return "lg";
};

function useDeviceType() {
  const [deviceType, setDeviceType] = useState<"sm" | "md" | "lg" | undefined>(
    undefined
  );

  useEffect(() => {
    const handleResize = () => {
      setDeviceType(getDeviceType(window.innerWidth));
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}

export default useDeviceType;
