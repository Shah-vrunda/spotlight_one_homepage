import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "./swipe.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import { useEffect } from "preact/hooks";

const SecondPage = () => {
  const carouselSlides = [
    {
      image: "carousel1.svg",
      heading: "Access",
      subHeading:
        "One platform for talented performers to access viable opportunities and genuine casting directors in the Indian film and entertainment industry.",
      textContentClassName: "right-0",
      animation: "fade-left",
    },
    {
      image: "carousel2.png",
      heading: "Inclusion",
      subHeading:
        "One platform to promote talented performers, irrespective of caste, religion, gender, geography or social status",
      textContentClassName: "left-0",
      animation: "fade-right",
    },
    {
      image: "carousel3.png",
      heading: "Expression",
      subHeading:
        "One platform to unearth and nurture the performer's unique talents, with the help of India’s foremost casting directors.",
      textContentClassName: "right-0",
      animation: "fade-left",
    },
  ];

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="entertainment, acting, casting, performances, auditions, acting career, casting platform, Spotlight One"
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
      >
        {carouselSlides.map((slide, index) => (
          <SwiperSlide key={index} className="bg-cover bg-center">
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={`slide.heading`}
            />
            <div
              data-aos={slide.animation}
              className={`absolute inset-y-0 ${slide.textContentClassName} flex items-center justify-center w-1/2 text-white p-3 md:p-4`}
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

            <img
              src="top-left-circle.svg"
              alt="top-left-circle"
              className="absolute top-0 left-0 hidden lg:flex"
            />
            <img
              src="top-right-circle.svg"
              alt="top-right-circle"
              className="absolute top-0 right-0 hidden lg:flex"
            />
            <img
              src="bottom-right-circle.svg"
              alt="bottom-right-circle"
              className="absolute right-0 bottom-0 hidden lg:flex"
            />
            <img
              src="bottom-left-circle.svg"
              alt="bottom-left-circle"
              className="absolute left-12 bottom-0 hidden lg:flex"
            />
            <img
              src="bottom-center-circle.svg"
              alt="bottom-center-circle"
              className="absolute bottom-0 inset-x-2/3 hidden lg:flex"
            />
            <img
              src="top-center-circle.svg"
              alt="top-center-circle"
              className="absolute top-0 inset-x-2/4 mx-auto hidden lg:flex"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SecondPage;
