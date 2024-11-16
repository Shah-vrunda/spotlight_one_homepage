import { Autoplay, Pagination } from "swiper/modules";
export { Swiper, SwiperSlide } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./swipe.css";

const SecondPage = () => {
  const carouselSlides = [
    {
      image: "/carousel1.svg",
      heading: "Access",
      subHeading:
        "One platform for talented performers to access viable opportunities and genuine casting directors in the Indian film and entertainment industry.",
      textContentClassName: "right-0",
    },
    {
      image: "/carousel2.png",
      heading: "Inclusion",
      subHeading:
        "One platform to promote talented performers, irrespective of caste, religion, gender, geography or social status",
      textContentClassName: "left-0",
    },

    {
      image: "/carousel3.png",
      heading: "Expression",
      subHeading:
        "One platform to unearth and nurture the performer's unique talents, with the help of India’s foremost casting directors.",
      textContentClassName: "right-0",
    },
  ];

  return (
    <Swiper
      className="w-full h-[40vh] md:h-[70vh] lg:h-[90vh] relative"
      modules={[Pagination, Autoplay]}
      pagination={{
        clickable: true,
      }}
      slidesPerView={1}
      spaceBetween={0}
      speed={300}
      loop={true}
      autoPlay={{
        delay: 3000,
      }}
    >
      {carouselSlides.map((slide, index) => (
        <SwiperSlide key={index} className="bg-cover bg-center">
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
          <div
            className={`absolute inset-y-0 ${slide.textContentClassName} flex items-center justify-center w-1/2 text-white p-3 md:p-4`}
          >
            <div className="flex flex-col gap-8 lg:w-[60%]">
              <h2 className="text-md md:text-5xl lg:text-7xl font-bold">
                Freedom of{" "}
                <span className="text-[#FED703]">{slide.heading}</span>
              </h2>
              <p className="text-[0.5rem] md:text-md lg:text-lg">
                {slide.subHeading}
              </p>
            </div>
          </div>
          {/* Circles */}
          <img
            src="/top-left-circle.svg"
            className="absolute top-0 left-0 hidden lg:flex"
          />
          <img
            src="/top-right-circle.svg"
            className="absolute top-0 right-0 hidden lg:flex"
          />
          <img
            src="/bottom-right-circle.svg"
            className="absolute right-0 bottom-0 hidden lg:flex"
          />
          <img
            src="/bottom-left-circle.svg"
            className="absolute left-12 bottom-0 hidden lg:flex"
          />
          <img
            src="/bottom-center-circle.svg"
            className="absolute bottom-0 inset-x-2/3 hidden lg:flex"
          />
          <img
            src="/top-center-circle.svg"
            className="absolute top-0 inset-x-2/4 mx-auto hidden lg:flex"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SecondPage;
