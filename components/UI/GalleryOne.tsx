import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed } from '@fortawesome/free-solid-svg-icons';

const ImageOverlay = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold ">
        <img
          src="/svg/view.svg"
          className="w-6 h-6 lg:w-10 lg:h-10 md:w-8 md:h-8 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
          alt="View Icon"
        />
      </div>
      <div className="hidden absolute bottom-0 w-full lg:flex justify-between px-4 pb-4 text-white">
        <div className="flex space-x-3">
          {' '}
          <FontAwesomeIcon
            icon={faBath}
            className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer "
          />
          <span>4</span>
        </div>
        <div className="flex space-x-3">
          {' '}
          <FontAwesomeIcon
            icon={faBed}
            className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer "
          />
          <span>14</span>
        </div>
        <div className="flex space-x-3">
          <img
            src="/svg/square.svg"
            className="lg:w-6 lg:h-6 md:w-4 md:h-4 cursor-pointer"
            alt="View Icon"
          />
          <span>250</span>
        </div>
      </div>
      <Image
        className="h-full max-w-full rounded-lg"
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    </div>
  );
};

const GalleryOne = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
      <div className="grid gap-4">
        <ImageOverlay src="/image/villa.jpg" alt="" />
        <ImageOverlay src="/image/villa9.png" alt="" />
        <ImageOverlay src="/image/villa3.png" alt="" />
      </div>
      <div className="grid gap-4">
        <ImageOverlay src="/image/villa4.jpg" alt="" />
        <ImageOverlay src="/image/villa11.jpg" alt="" />
        <ImageOverlay src="/image/villa2.jpg" alt="" />
      </div>
      <div className="grid gap-4">
        <ImageOverlay src="/image/villa8.jpg" alt="" />
        <ImageOverlay src="/image/villa7.png" alt="" />
        <ImageOverlay src="/image/villa6.png" alt="" />
      </div>
      <div className="grid gap-4">
        <ImageOverlay src="/image/villa10.jpg" alt="" />
        <ImageOverlay src="/image/villa7.png" alt="" />
      </div>
    </div>
  );
};

export default GalleryOne;
