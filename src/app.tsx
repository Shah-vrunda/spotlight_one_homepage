import BottomNavigation from "./pages/bottom-navigation";
import FirstPage from "./pages/first-page";
import FourthPage from "./pages/fourth-page";
import Navbar from "./pages/navbar";
import SecondPage from "./pages/second-page";
import SixthPage from "./pages/sixth-page";
import ThirdPage from "./pages/third-page";
import FifthPage from "./pages/fifth-page/fifth-page";
import Carousel from "./pages/company-carousel";

export function App() {
  return (
    <>
      <Navbar />

      <FirstPage />

      <div className="breaker1 bg-transparent flex justify-center items-center  py-4 md:py-6 lg:py-8 text-3xl md:text-4xl lg:text-[50px] font-bold font-['Work Sans']">
        <text className="text-[#270530]">Our Values</text>
      </div>

      <SecondPage />

      <ThirdPage />

      <FourthPage />

      <FifthPage />

      <SixthPage />

      <Carousel />

      <BottomNavigation />
    </>
  );
}
