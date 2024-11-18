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
import { useRef } from "react";
import useIntersectionObserver from "./pages/reusableHooks";

const ogData = {
  title: "Spotlight One Home Page",
  description: "Spotlight One Home Page",
  url: "https://spotlightone.com/",
  image: "https://cdn.stg.spotlightone.com/images/talentonboarding.png",
  siteName: "Spotlight One",
};

export function App() {
  const headingRef = useRef(null);
  useIntersectionObserver(headingRef, "animate-fade", "animate-duration-600");
  return (
    <>
      <Helmet>
        <meta property="og:title" content={ogData.title} />
        <meta property="og:description" content={ogData.description} />
        <meta property="og:url" content={ogData.url} />
        <meta property="og:image" content={ogData.image} />
        <meta property="og:site_name" content={ogData.siteName} />
        <meta name="description" content={ogData.description} />
        <meta
          name="keywords"
          content="talent, actors, cd, spotlight one, spotlight, casting, casting software, casting platform, casting call, casting calls, casting agency, casting agencies, casting agent, casting agents, casting directors, casting director, casting director software, casting director platform, casting director tools, casting director tool, casting director app, casting director apps, casting director website, casting director websites, casting director site, casting director sites, casting director services, casting director service, casting director company, casting director companies, casting director tool, casting director tools, casting director platform, casting director platforms, casting director software, casting director softwares, casting director app, casting director apps, casting director website, casting director websites, casting director site, casting director sites, casting director services, casting director service, casting director company, casting director companies"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Spotlight One",
              "url": "https://www.spotlightone.com",
              "logo": "https://www.spotlightone.com/spotlight.svg",
              "sameAs": [
                "https://www.facebook.com/spotlightone",
                "https://www.twitter.com/spotlightone",
                "https://www.instagram.com/spotlightone"
              ]
            }
          `}
        </script>
      </Helmet>
      <Navbar />

      <FirstPage />

      <div
        ref={headingRef}
        className="breaker1 bg-transparent flex justify-center items-center py-6 lg:py-10 text-3xl md:text-4xl lg:text-[50px] font-bold font-work-sans bg-[#FFFaeb] animate-fade animate-duration-600"
      >
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
