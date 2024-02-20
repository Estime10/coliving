import { LOCATIONS } from '@/constants';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className="max-container padding-container 
    flex flex-col gap-20 py-10
    md:gap-28 lg:py-20 
    xl:flex-row"
    >
      {/* LEFT */}
      <div className="flex-1 flex-col justify-center cursor-default">
        <h1 className="bold-52 text-center lg:bold-32  xl:text-start md:mt-20">
          Coliving a<span className="capitalize text-gray-400"> unique </span>
          Experience
        </h1>
        <p
          className="regular-16 mt-2 bold-16 text-center text-gray-400 
          xl:max-w-[520px] xl:text-start xl:regular-32 xl:bold-20"
        >
          Community - Comfort - Luxury
        </p>
        {/* select */}
        <div>
          <div>
            <select
              name="location"
              id="location"
              className="w-full p-2 mt-5 border-2 border-gray-300 rounded-md 
              regular-16 bold-16 text-gray-400 focus:outline-none
               focus:border-gray-500 
               xl:p-3 xl:mt-8  xl:bold-24 cursor-pointer"
            >
              {LOCATIONS.map((location) => (
                <option
                  className=" cursor-pointer
                regular-16 bold-16 text-gray-400 focus:outline-none
               focus:border-gray-500 
               xl:p-3 xl:mt-8  xl:bold-24"
                  key={location.key}
                  value={location.value}
                >
                  {location.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative z-20 flex-1 flex flex-col xl:w-full">
        <div className="relative h-full">
          {/* Image */}
          <div className="h-full w-full">
            <Image
              src="/housenude.png"
              alt="Hero Image"
              width={1920}
              height={1080}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
