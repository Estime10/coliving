import Image from 'next/image';

const ImageOverlay = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-100 rounded-lg"></div>
      <Image
        className="h-auto max-w-full rounded-lg"
        src={src}
        alt={alt}
        width={500}
        height={500}
      />
    </div>
  );
};

export default ImageOverlay;
