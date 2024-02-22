import { LOCATIONS } from '@/constants';
import Image from 'next/image';
import Select from '../UI/Select';

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
        <h1 className="bold-52 text-center lg:bold-40  xl:text-start md:mt-20">
          Coliving a<span className="capitalize text-gray-400"> unique </span>
          Experience
        </h1>
        <p
          className="regular-16 mt-2 bold-16 text-center text-gray-400 
           xl:text-start lg:regular-32 xl:bold-20"
        >
          Community - Comfort - Luxury
        </p>
        {/* select */}
        <div>
          <Select />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative z-20 flex-1 flex flex-col xl:w-full">
        <div className="relative h-full">
          {/* Image */}
          <div className="h-full w-full">
            <Image
              src="/image/housenude.png"
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
