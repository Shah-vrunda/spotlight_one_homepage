const FourthPage = () => {
  return (
    <>
      <div
        className="screen4 text-[#fffaeb] py-10 px-10 md:pt-28 md:pb-28 flex justify-center w-full bg-[#51025e] h-auto relative"
        id="our-features"
      >
        <div className="flex flex-col gap-16 md:gap-28">
          <div className="flex justify-center w-full">
            <div className="title flex flex-col justify-center gap-2 w-full">
              <h1
                data-aos="fade-down"
                data-aos-duration="500"
                className="font-bold text-md md:text-2xl self-center font-work-sans"
              >
                It’s the Casting Director’s Casting Platform
              </h1>
              <h2 className="md:w-3/5 self-center text:lg md:text-2xl font-wix-madefor-display font-normal text-center">
                Spotlight One gives casting directors the freedom to do what
                they do best: unearth talented performers. We streamline your
                casting process with :
              </h2>
            </div>
          </div>
          <div className="flex justify-evenly font-wix-madefor-display gap-8 md:gap-0 md:flex-row flex-col text-base font-normal">
            <div className="flex flex-col gap-4 md:gap-12  w-full md:w-1/4">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="rounded-full w-24 h-24 self-center"
              >
                <img
                  src="search.svg"
                  alt="search icon"
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-center text:lg md:text-2xl">
                Broadcast targeted casting calls, reaching untapped talent
                nationwide
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-12 w-full md:w-1/4">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="rounded-full w-24 h-24 self-center"
              >
                <img
                  src="list.svg"
                  alt="list icon"
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-center text:lg md:text-2xl">
                Use intelligent filters for quick, precise role matching
              </h2>
            </div>
            <div className="flex flex-col gap-4 md:gap-12  w-full md:w-1/4">
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="rounded-full w-24 h-24 self-center"
              >
                <img
                  src="centralize.svg"
                  alt="centralize icon"
                  className="rounded-full object-cover"
                />
              </div>
              <h2 className="text-center text:lg md:text-2xl">
                Centralize your data and simplify collaboration with automation
                and support
              </h2>
            </div>
          </div>
          <div className="flex justify-center">
            <h2
              data-aos="fade-up"
              data-aos-duration="500"
              className="text:lg md:text-2xl font-normal font-wix-madefor-display text-center "
            >
              Experience casting freedom with Spotlight One, where technology
              meets talent.
            </h2>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-[6%] md:w-1/12 h-full overflow-hidden">
          <div className="h-full">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="w-full h-full"
            >
              <polygon fill="#ffc012" points="0,0 100,0 0,100" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-10 md:h-28 z-0">
          <svg
            viewBox="0 0 100 40"
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            <polygon fill="#ffc012" points="0,40 100,40 100,0" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FourthPage;
