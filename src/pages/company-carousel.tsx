const brands = [
  "cast-it-reach",
  "cast-it-systems",
  "cast-it-talent",
  "spotlight",
  "casting-frontier",
  "casting-networks",
  "staff-me-up",
  "tagmin",
  "cast-it-reach",
  "cast-it-systems",
  "cast-it-talent",
  "spotlight",
  "casting-frontier",
  "casting-networks",
  "staff-me-up",
  "tagmin",
];

const Carousel = () => {
  return (
    <div className="bg-[url('./background.svg')] bg-cover">
      <div className="flex flex-col p-8">
        <div className="text-white font-[worksans] text-[35px] font-medium leading-normal self-center">
          Our Global Brands
        </div>

        <div className="flex overflow-hidden relative h-48">
          <div className="flex animate-slide">
            {brands.map((brand, index) => (
              <img
                key={index}
                className="min-w-[400px] transform scale-75"
                src={`./${brand}.svg`}
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
