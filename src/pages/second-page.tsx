import { createRef, useRef, useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import useIntersectionObserver from "./reusableHooks";
import { Helmet } from "react-helmet";

const SecondPage = () => {
  const carouselSlides = [
    {
      image: "/carousel1.svg",
      heading: "Access",
      subHeading:
        "One platform for talented performers to access viable opportunities and genuine casting directors in the Indian film and entertainment industry.",
      textContentClassName:
        "right-0 animate-fade-left animate-duration-[2000ms]",
    },
    {
      image: "/carousel2.png",
      heading: "Inclusion",
      subHeading:
        "One platform to promote talented performers, irrespective of caste, religion, gender, geography or social status",
      textContentClassName:
        "left-0 animate-fade-right animate-duration-[2000ms]",
    },

    {
      image: "/carousel3.png",
      heading: "Expression",
      subHeading:
        "One platform to unearth and nurture the performer's unique talents, with the help of India’s foremost casting directors.",
      textContentClassName:
        "right-0 animate-fade-left animate-duration-[2000ms]",
    },
  ];

  const topLeftCircleRef = useRef(null);
  const topRightCircleRef = useRef(null);
  const bottomRightCircleRef = useRef(null);
  const bottomLeftCircleRef = useRef(null);
  const bottomCenterCircleRef = useRef(null);
  const topCenterCircleRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Apply the useIntersectionObserver hook to each circle
  useIntersectionObserver(
    topLeftCircleRef,
    "animate-fade-down",
    "animate-delay-[300ms]"
  );
  useIntersectionObserver(
    topRightCircleRef,
    "animate-fade-down",
    "animate-delay-[300ms]"
  );
  useIntersectionObserver(
    bottomRightCircleRef,
    "animate-fade-up",
    "animate-delay-[300ms]"
  );
  useIntersectionObserver(
    bottomLeftCircleRef,
    "animate-fade-up",
    "animate-delay-[300ms]"
  );
  useIntersectionObserver(
    bottomCenterCircleRef,
    "animate-fade-up",
    "animate-delay-[300ms]"
  );
  useIntersectionObserver(
    topCenterCircleRef,
    "animate-fade-down",
    "animate-delay-[300ms]"
  );
  const textContentRefs = useRef(carouselSlides.map(() => createRef()));

  textContentRefs.current.forEach((textContentRef, index) => {
    // Use the classes from the carouselSlides array for each slide
    const animationClass = carouselSlides[index].textContentClassName
      .split(" ")
      .find((cls) => cls.startsWith("animate-"));
    useIntersectionObserver(
      textContentRef,
      animationClass,
      "animate-duration-[2000ms]"
    );
  });

  return (
    <>
      <Helmet>
        <title>Explore Opportunities in Entertainment - Spotlight One</title>
        <meta
          name="description"
          content="Join Spotlight One to access a wide range of opportunities in the entertainment industry. Whether you're an actor, musician, or performer, our platform connects you with casting directors and projects."
        />
        <meta
          name="keywords"
          content="entertainment, acting, casting, performances, auditions, acting career, casting platform, Spotlight One"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="author" content="Spotlight One" />

        <meta
          property="og:title"
          content="Explore Opportunities in Entertainment - Spotlight One"
        />
        <meta
          property="og:description"
          content="Discover new horizons in the entertainment industry with Spotlight One. Access auditions, casting calls, and unique opportunities to showcase your talent."
        />
        <meta property="og:url" content="https://www.spotlightone.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content=" https://cdn.stg.spotlightone.com/images/talentonboarding.png"
        />
      </Helmet>
      <Swiper
        className="w-full h-[40vh] md:h-[70vh] lg:h-[90vh] relative"
        autoplay={
          {
            delay: 3000,
            disableOnInteraction: false,
          } as any
        }
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        slidesPerView={1}
        spaceBetween={0}
        speed={800}
        loop={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-cover bg-center">
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={`slide.heading`}
            />
            <div
              ref={textContentRefs.current[index]}
              className={`absolute inset-y-0 ${
                slide.textContentClassName
              } flex items-center justify-center w-1/2 text-white p-3 md:p-4 ${
                index === activeIndex ? slide.textContentClassName : "opacity-0"
              }`}
            >
              <div className="flex flex-col gap-8 lg:w-[60%]">
                <h1 className="text-md md:text-5xl font-work-sans lg:text-7xl font-bold">
                  Freedom of{" "}
                  <span className="text-[#FED703]">{slide.heading}</span>
                </h1>
                <h2 className="text-[0.5rem] font-wix-madefor-display md:text-md lg:text-lg">
                  {slide.subHeading}
                </h2>
              </div>
            </div>
            {/* Circles */}
            <img
              src="/top-left-circle.svg"
              alt="top-left-circle"
              ref={topLeftCircleRef}
              className="absolute top-0 left-0 hidden lg:flex animate-delay-[300ms] animate-fade-down"
            />
            <img
              src="/top-right-circle.svg"
              alt="top-right-circle"
              ref={topRightCircleRef}
              className="absolute top-0 right-0 hidden lg:flex animate-delay-[300ms] animate-fade-down"
            />
            <img
              ref={bottomRightCircleRef}
              src="/bottom-right-circle.svg"
              alt="bottom-right-circle"
              className="absolute right-0 bottom-0 hidden lg:flex animate-delay-[300ms] animate-fade-up"
            />
            <img
              ref={bottomLeftCircleRef}
              src="/bottom-left-circle.svg"
              alt="bottom-left-circle"
              className="absolute left-12 bottom-0 hidden lg:flex animate-delay-[300ms] animate-fade-up"
            />
            <img
              ref={bottomCenterCircleRef}
              src="/bottom-center-circle.svg"
              alt="bottom-center-circle"
              className="absolute bottom-0 inset-x-2/3 hidden lg:flex animate-delay-[300ms] animate-fade-up"
            />
            <img
              ref={topCenterCircleRef}
              src="/top-center-circle.svg"
              alt="top-center-circle"
              className="absolute top-0 inset-x-2/4 mx-auto hidden lg:flex animate-delay-[300ms] animate-fade-down"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SecondPage;
