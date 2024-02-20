'use client';

import Image from 'next/image';

const GalleryOne = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa2.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa3.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa4.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa6.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa7.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa8.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa9.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa10.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa11.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa12.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/villa13.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>{' '}
    </div>
  );
};

export default GalleryOne;
