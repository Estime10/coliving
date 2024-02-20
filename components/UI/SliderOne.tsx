'use client';

import Slider from 'react-slick';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SLIDER_ONE } from '@/constants';

const SliderOne = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    className: 'w-full mx-auto  cursor-pointer center-mode',
  };

  if (isMediumScreen) {
    settings.slidesToShow = 3;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <section
      className="max-container padding-container 
      lg:px-0 xl:p-0 md:p-0 
    flex flex-col gap-20 py-10
    md:pr-32
    md:gap-28 lg:py-20 lg:pr-32
    xl:flex-row xl:pr-32"
    >
      <Slider {...settings}>
        {SLIDER_ONE.map((image) => (
          <div key={image} className="rounded-md px-1 md:py-5">
            <Image
              src={image}
              alt="slider1"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SliderOne;
