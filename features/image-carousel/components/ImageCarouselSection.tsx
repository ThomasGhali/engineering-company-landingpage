'use client';

import { JSX, useEffect, useState } from 'react';

import { ChevronRight, ChevronLeft, SkipForward } from 'lucide-react';

import Image, { StaticImageData } from 'next/image';

import ReadMoreBtn from '@/components/ui/ReadMoreBtn';

import useImageIndexloop from '@/features/image-carousel/hooks/useImageIndexloop';

import carousel1 from '@/public/carousel1.jpg';
import carousel2 from '@/public/carousel2.jpg';
import carousel3 from '@/public/carousel3.jpg';
import carousel4 from '@/public/carousel4.jpg';
import carousel5 from '@/public/carousel5.jpg';

import nextArrow from '@/public/nextArrow.svg';

import CarouselDescriptionCard from '@/features/image-carousel/components/CarouselDescriptionCard';

const carouselImagesSrc: StaticImageData[] = [
  carousel1,
  carousel2,
  carousel3,
  carousel4,
  carousel5,
];

const CarouselImage = ({ imageIndex }: { imageIndex: number }): JSX.Element => {
  return (
    <>
      {/* Carousel image wrapper */}
      <div className="relative h-[45vh] md:h-[80vh]  w-full overflow-hidden">
        {carouselImagesSrc.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`carousel${index}`}
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              index === imageIndex
                ? 'opacity-100 z-10 animate-[zoomIn_4s_ease-in-out]'
                : 'opacity-0 z-0'
            }`}
            fill
            priority
          />
        ))}
      </div>
    </>
  );
};

const DesktopCarouselControls = ({
  nextImage,
  imageIndex,
  imagesCount,
}: {
  nextImage: () => void;
  imageIndex: number;
  imagesCount: number;
}): JSX.Element => {
  return (
    <>
      {/* Carousel nav container */}
      <div className="text-xl absolute bottom-5 right-5 z-10 bg-white hidden md:flex w-50 h-16 items-center justify-between px-7">
        {/* Image index/count */}
        <div className="flex items-center">
          <span className="text-xl font-semibold mr-1">{imageIndex}</span>

          <span className="text-base">/ {imagesCount}</span>
        </div>

        {/* Carousel controls */}

        {/* Pause/play button */}
        <button className="flex-center gap-x-1 cursor-pointer md:p-2">
          <span className="h-5 md:h-7 w-1.5 bg-navy-100" />
          <span className="h-5 md:h-7 w-1.5 bg-navy-100" />
        </button>

        {/* Next button */}
        <button onClick={nextImage}>
          <Image
            src={nextArrow}
            alt="next-arrow"
            className="size-7 cursor-pointer"
          />
        </button>
      </div>
    </>
  );
};

export default function ImageCarousel(): JSX.Element {
  const { imageIndex, progress, nextImage } = useImageIndexloop(
    carouselImagesSrc.length,
    4000,
  );

  const imageIndexPlusOne = imageIndex + 1;
  return (
    <>
      {/* Hero section container */}
      <section className="w-full text-text-main md:relative">
        <CarouselImage imageIndex={imageIndex} />

        <CarouselDescriptionCard
          progress={progress}
          imageIndex={imageIndexPlusOne}
          imagesCount={carouselImagesSrc.length}
        />

        <DesktopCarouselControls
          imageIndex={imageIndexPlusOne}
          imagesCount={carouselImagesSrc.length}
          nextImage={nextImage}
        />
      </section>
    </>
  );
}
