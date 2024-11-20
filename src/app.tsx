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
  title: "Spotlight One - Empowering Talent in the Entertainment Industry",
  description:
    "Spotlight One is the ultimate platform for casting directors and performers, offering cutting-edge tools and opportunities to connect, collaborate, and succeed in the entertainment industry. Join us and elevate your casting experience.",
  url: "https://spotlightone.com/",
  image: "https://cdn.stg.spotlightone.com/images/talentonboarding.png",
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
        <link rel="preload" href="./1st-screen.svg" as="image" />
        <link rel="preload" href="./3rd-screen.svg" as="image" />
        <link rel="preload" href="./about.svg" as="image" />
        <link rel="preload" href="./bottom-center-circle.svg" as="image" />
        <link rel="preload" href="./bottom-left-circle.svg" as="image" />
        <link rel="preload" href="./bottom-right-circle.svg" as="image" />
        <link rel="preload" href="./carousel1.svg" as="image" />
        <link rel="preload" href="./carousel2.png" as="image" />
        <link rel="preload" href="./carousel3.png" as="image" />
        <link rel="preload" href="./cast-it-reach.svg" as="image" />
        <link rel="preload" href="./cast-it-systems.svg" as="image" />
        <link rel="preload" href="./cast-it-talent.svg" as="image" />
        <link rel="preload" href="./casting-frontier.svg" as="image" />
        <link rel="preload" href="./casting-networks.svg" as="image" />
        <link rel="preload" href="./cd.svg" as="image" />
        <link rel="preload" href="./centralize.svg" as="image" />
        <link rel="preload" href="./list.svg" as="image" />
        <link rel="preload" href="./one.svg" as="image" />
        <link rel="preload" href="./pink-circle.svg" as="image" />
        <link rel="preload" href="./primary-logo-purple.svg" as="image" />
        <link rel="preload" href="./purple-circle.svg" as="image" />
        <link rel="preload" href="./search.svg" as="image" />
        <link rel="preload" href="./secondary-logo-purple.svg" as="image" />
        <link rel="preload" href="./spotlight-coloured.svg" as="image" />
        <link rel="preload" href="./spoytlight.svg" as="image" />
        <link rel="preload" href="./staff-me-up.svg" as="image" />
        <link rel="preload" href="./tagmin.svg" as="image" />
        <link rel="preload" href="./talent.svg" as="image" />
        <link rel="preload" href="./top-center-circle.svg" as="image" />
        <link rel="preload" href="./top-left-circle.svg" as="image" />
        <link rel="preload" href="./top-right-circle.svg" as="image" />
        <link rel="preload" href="./yello-circle.svg" as="image" />
      </Helmet>
      <Navbar />

      <FirstPage />

      <div
        data-aos={"fade"}
        data-aos-duration="600"
        className="breaker1 bg-transparent flex justify-center items-center py-6 lg:py-10 text-3xl md:text-4xl lg:text-[50px] font-bold font-work-sans bg-[#FFFaeb] "
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
