import ReadMoreBtn from '@/components/ui/ReadMoreBtn';

import { JSX } from 'react';

import AnimatedUnderline from '@/components/ui/AnimatedUnderline';

const CarouselDescriptionCard = ({
  progress,
  imageIndex,
  imagesCount,
}: {
  progress: number;
  imageIndex: number;
  imagesCount: number;
}): JSX.Element => (
  <>
    {/* Card Container */}
    <div className="w-full md:w-[390px] bg-white relative md:absolute md:left-0 md:bottom-0 md:ml-5 md:mb-5 md:flex md:flex-col md:justify-between md:items-start drop-shadow pt-2 px-4 z-10">
      {/* Card Content */}
      <div>
        {/* Header */}
        <h1 className="text-4xl leading-normal font-medium">
          Engineering at <AnimatedUnderline>National</AnimatedUnderline> Scale
        </h1>

        {/* Description */}
        <p className="mt-1 sm:mt-4">
          Through strategic collaboration with leading utilities, Qualtec
          contributed.
        </p>
      </div>

      <ReadMoreBtn transparent />

      {/* Image order */}
      <div className="absolute bottom-2 right-5 md:hidden">
        <span className="text-xl font-semibold">{imageIndex} </span>

        <span>/ {imagesCount}</span>
      </div>

      <div className="bg-text-muted/30 -mr-4 -ml-4 md:w-[390px] h-0.5 md:h-1 relative overflow-hidden">
        <div
          className="absolute left-0 rounded-r-2xl bg-navy-100 h-0.5 md:h-1"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  </>
);

export default CarouselDescriptionCard;
