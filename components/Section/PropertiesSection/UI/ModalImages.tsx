import { MODALGALLERY1 } from '@/constants';
import { useState } from 'react';
import Image from 'next/image';

const ModalImages = () => {
  const [upperIndex, setUpperIndex] = useState(0);

  const handleImageClick = (lowerIndex: number) => {
    setUpperIndex(lowerIndex);
  };

  return (
    <div className="grid gap-4">
      <Image
        src={MODALGALLERY1[upperIndex].src ?? ''}
        width={600}
        height={200}
        alt=""
        className="rounded-lg"
      />
      <div
        className="grid grid-cols-3 gap-2
      lg:grid-cols-6"
      >
        {MODALGALLERY1.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <Image
              src={image.src ?? ''}
              width={200}
              height={150}
              alt=""
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalImages;
