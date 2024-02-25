'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed } from '@fortawesome/free-solid-svg-icons';
import { GALLERYGROUP } from '@/constants';
import MyModal from '@/components/Tool/MyModal';

const ImageOverlay = ({
  src,
  alt,
  rooms,
  baths,
  m2,
  id,
  price,
  length,
  label,
}: {
  src: string;
  alt: string;
  rooms: number;
  baths: number;
  m2: number;
  id: string;
  price: string;
  length: string;
  label: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
      <div onClick={openModal} 
      className="absolute inset-0 flex items-center justify-center 
      text-white text-2xl font-bold cursor-pointer">
        <MyModal
          modalId={id}
          modalDetails={{ src, rooms, baths, m2, price, length, label }}
          onClose={handleCloseModal}
        />
      </div>
      <div className="hidden absolute bottom-0 w-full lg:flex justify-between px-4 pb-4 text-white">
        <div className="flex space-x-3">
          <FontAwesomeIcon icon={faBath} className="w-6 h-6 cursor-pointer " />
          <span>{baths}</span>
        </div>
        <div className="flex space-x-3">
          <FontAwesomeIcon icon={faBed} className="w-6 h-6 cursor-pointer " />
          <span>{rooms}</span>
        </div>
        <div className="flex space-x-3">
          <img
            src="/svg/square.svg"
            className="w-6 h-6 cursor-pointer"
            alt="View Icon"
          />
          <span>{m2}</span>
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


const GalleryOfProperties = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {isModalOpen && (
      <div onClick={openModal} className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold cursor-pointer">
        Open Modal
      </div>
      )}
      <div className="grid gap-4">
        {GALLERYGROUP.GALLERYGROUP1.map((image, index) => (
          <ImageOverlay
            key={index}
            src={image.src}
            alt=""
            rooms={image.rooms}
            baths={image.baths}
            m2={image.m2}
            id={`modal-${index}`}
            price={image.price}
            length={image.length}
            label={image.label}
          />
        ))}
      </div>
      <div className="grid gap-4">
        {GALLERYGROUP.GALLERYGROUP2.map((image, index) => (
          <ImageOverlay
            key={index}
            src={image.src}
            alt=""
            rooms={image.rooms}
            baths={image.baths}
            m2={image.m2}
            id={`modal-${index}`}
            price={image.price}
            length={image.length}
            label={image.label}
          />
        ))}
      </div>
      <div className="grid gap-4">
        {GALLERYGROUP.GALLERYGROUP3.map((image, index) => (
          <ImageOverlay
            key={index}
            src={image.src}
            alt=""
            rooms={image.rooms}
            baths={image.baths}
            m2={image.m2}
            id={`modal-${index}`}
            price={image.price}
            length={image.length}
            label={image.label}
          />
        ))}
      </div>
      <div className="grid gap-4">
        {GALLERYGROUP.GALLERYGROUP4.map((image, index) => (
          <ImageOverlay
            key={index}
            src={image.src}
            alt=""
            rooms={image.rooms}
            baths={image.baths}
            m2={image.m2}
            id={`modal-${index}`}
            price={image.price}
            length={image.length}
            label={image.label}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryOfProperties;
