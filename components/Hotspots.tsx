import SliderOne from './UI/SliderOne';

const Hotspots = () => {
  return (
    <section
      className="max-container padding-container 
    flex flex-col gap-20 py-10
    md:gap-28 lg:py-20 
    xl:flex-row"
    >
      <div>
        <div className="flex items-center">
          <h1 className="bold-32 text-center lg:bold-32 xl:text-start mr-4 capitalize">
            hot spots
          </h1>
          <hr className="w-1/2 flex-shrink-0 border-t-2 border-gray-500" />
        </div>
        <div>
          <span className="regular-14 text-center xl:text-start capitalize">
            Dive into an exceptional community living experience where the
            comfort of your home meets the excitement of shared living.
          </span>
        </div>

        <SliderOne />
      </div>
    </section>
  );
};

export default Hotspots;
