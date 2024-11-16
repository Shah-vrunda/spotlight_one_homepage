import BottomNavigation from "./pages/bottom-navigation";
import FirstPage from "./pages/first-page";
import FourthPage from "./pages/fourth-page";
import Navbar from "./pages/navbar";
import SecondPage from "./pages/second-page";
import SixthPage from "./pages/sixth-page";
import ThirdPage from "./pages/third-page";
import FifthPage from "./pages/fifth-page/fifth-page";
import Carousel from "./pages/company-carousel";
import { Helmet } from "react-helmet";

const ogData = {
  title: "Spotlight One Home Page",
  description: "Spotlight One Home Page",
  url: "http://localhost:5173",
  image: "./spotlight.svg",
  siteName: "Spotlight One",
};

export function App() {
  return (
    <>
      <Helmet>
        <meta property="og:title" content={ogData.title} />
        <meta property="og:description" content={ogData.description} />
        <meta property="og:url" content={ogData.url} />
        <meta property="og:image" content={ogData.image} />
        <meta property="og:site_name" content={ogData.siteName} />

        <meta name="description" content={ogData.description} />
      </Helmet>
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
