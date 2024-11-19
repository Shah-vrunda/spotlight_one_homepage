import { Helmet } from "react-helmet";

const brands = [
  {
    src: "cast-it-reach",
    alt: "cast-it-reach",
    className: "carousel-image",
  },
  {
    src: "cast-it-systems",
    alt: "cast-it-systems",
    className: "carousel-image",
  },
  {
    src: "cast-it-talent",
    alt: "cast-it-talent",
    className: "carousel-image",
  },
  {
    src: "casting-networks",
    alt: "casting-networks",
    className: "carousel-image",
  },
  {
    src: "spotlight-coloured",
    alt: "spotlight-coloured",
    className: "carousel-image",
  },
  {
    src: "tagmin",
    alt: "tagmin",
    className: "carousel-image",
  },
  {
    src: "casting-frontier",
    alt: "casting-frontier",
    className: "carousel-image",
  },
  {
    src: "staff-me-up",
    alt: "staff-me-up",
    className: "carousel-image",
  },
  {
    src: "cast-it-reach",
    alt: "cast-it-reach",
    className: "carousel-image",
  },
  {
    src: "cast-it-systems",
    alt: "cast-it-systems",
    className: "carousel-image",
  },
  {
    src: "cast-it-talent",
    alt: "cast-it-talent",
    className: "carousel-image",
  },
  {
    src: "casting-networks",
    alt: "casting-networks",
    className: "carousel-image",
  },
  {
    src: "spotlight-coloured",
    alt: "spotlight-coloured",
    className: "carousel-image",
  },
  {
    src: "tagmin",
    alt: "tagmin",
    className: "carousel-image",
  },
  {
    src: "casting-frontier",
    alt: "casting-frontier",
    className: "carousel-image",
  },
  {
    src: "staff-me-up",
    alt: "staff-me-up",
    className: "carousel-image",
  },
];

const Carousel = () => {
  return (
    <div className="bg-background-pattern bg-cover " id="company-carousel">
      <Helmet>
        <title>Spotlight one global brands</title>
        <meta name="description" content="Spotlight one global brands" />
        <meta
          name="keywords"
          content="spotlight one, spotlight, casting, spotlight india, india casting, largest casting software, largest casting software company, spotlight one global brands"
        />
      </Helmet>
      <div className="flex flex-col pt-12 pb-28">
        <div className="text-white font-work-sans text-[35px] font-medium leading-normal self-center pb-10">
          Our Global Brands
        </div>

        <div className="flex overflow-hidden items-center justify-center relative h-36">
          <div className="flex animate-slide justify-center">
            {brands.map((brand, index) => (
              <img
                key={index}
                className={`${brand.className}  object-contain transform mx-7`}
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
