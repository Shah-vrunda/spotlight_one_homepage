const brands = [
  {
    src: "cast-it-reach",
    alt: "cast-it-reach",
    className: "carousel-image min-w-[150px]",
  },
  {
    src: "cast-it-systems",
    alt: "cast-it-systems",
    className: "carousel-image min-w-[150px]",
  },
  {
    src: "cast-it-talent",
    alt: "cast-it-talent",
    className: "carousel-image min-w-[150px]",
  },
  {
    src: "casting-networks",
    alt: "casting-networks",
    className: "carousel-image min-w-[150px]",
  },

  {
    src: "spotlight-coloured",
    alt: "spotlight-coloured",
    className: "carousel-image min-w-[600px]",
  },
  {
    src: "tagmin",
    alt: "tagmin",
    className: "carousel-image min-w-[100px]",
  },
  {
    src: "casting-frontier",
    alt: "casting-frontier",
    className: "carousel-image min-w-[250px]",
  },

  {
    src: "staff-me-up",
    alt: "staff-me-up",
    className: "carousel-image min-w-[150px]",
  },

  {
    src: "cast-it-reach",
    alt: "cast-it-reach",
    className: "carousel-image min-w-[150px]",
  },
  {
    src: "cast-it-systems",
    alt: "cast-it-systems",
    className: "carousel-image min-w-[150px]",
  },
  {
    src: "cast-it-talent",
    alt: "cast-it-talent",
    className: "carousel-image min-w-[150px]",
  },
  {
    src: "casting-networks",
    alt: "casting-networks",
    className: "carousel-image min-w-[150px]",
  },
  {
    src: "spotlight-coloured",
    alt: "spotlight-coloured",
    className: "carousel-image min-w-[600px]",
  },
  {
    src: "tagmin",
    alt: "tagmin",
    className: "carousel-image min-w-[100px]",
  },
  {
    src: "casting-frontier",
    alt: "casting-frontier",
    className: "carousel-image min-w-[250px]",
  },

  {
    src: "staff-me-up",
    alt: "staff-me-up",
    className: "carousel-image min-w-[150px]",
  },
];

const Carousel = () => {
  return (
    <div className="bg-background-pattern bg-cover ">
      <div className="flex flex-col pt-12 pb-28">
        <div className="text-white font-work-sans text-[35px] font-medium leading-normal self-center pb-10">
          Our Global Brands
        </div>

        <div className="flex overflow-hidden items-center justify-around relative h-36">
          <div className="flex animate-slide">
            {brands.map((brand, index) => (
              <img
                key={index}
                className={`${brand.className} min-w-[200px] object-contain transform scale-75 mx-7`}
                src={`./${brand.src}.svg`}
                alt="logo"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
