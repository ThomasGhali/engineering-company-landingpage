import Image from 'next/image';

import carousel1 from '@/public/carousel1.jpg';

export default function CarouselImage() {
  return (
    <>
      {/* Carousel image wrapper */}
      <div className="relative h-[45vh] md:h-[80vh]  w-full">
        <Image
          src={carousel1}
          alt="carousel1"
          className="object-cover md:rounded-b-2xl"
          fill
        />
      </div>
    </>
  );
}
