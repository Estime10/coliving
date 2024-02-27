import Image from 'next/image';

const ImageOverlay = ({
  id,
  src,
  alt,
  rooms,
  baths,
  m2,
  onImageClick
}: {
  id: number;
  src: string;
  alt: string;
  rooms: number;
  baths: number;
  m2: number;
  onImageClick: () => void;
}) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-100 rounded-lg"></div>
      <Image
        className="h-auto max-w-full rounded-lg"
        src={src}
        alt={alt}
        width={500}
        height={500}
        onClick={onImageClick}
      />
    </div>
  );
};

export default ImageOverlay;
