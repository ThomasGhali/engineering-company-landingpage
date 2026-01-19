import ReadMoreBtn from '@/components/ui/ReadMoreBtn';

import { JSX, useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { poppins } from '@/app/fonts';

import { motion } from 'motion/react';

const carouselCardsData = [
  {
    about: 'UK',
    header: 'Powering Nuclear Innovation',
    description:
      'Our expertise ensures the safe and efficient operation of advanced nuclear generation facilities across the globe.',
  },
  {
    about: 'BRAZIL',
    header: 'Engineering at National Scale',
    description:
      'Through strategic collaboration with leading utilities, Qualtec contributed to the development of the national grid infrastructure.',
  },
  {
    about: 'GLOBAL',
    header: 'Engineering High-Speed Rail',
    description:
      'Qualtec designs and implements the advanced propulsion and signaling systems that power the next generation of modern transit.',
  },
  {
    about: 'NATIONAL',
    header: 'Constructing Modern Landmarks',
    description:
      'Qualtec provides the structural integrity and engineering precision required for the world’s most ambitious architectural projects.',
  },
  {
    about: 'EGYPT',
    header: 'Electrifying Global Networks',
    description:
      'From Brazil to Vietnam, we deliver the robust electrical infrastructure necessary to support growing economies and urban centers.',
  },
];

const CarouselDescriptionCard = ({
  progress,
  imageIndex,
  imagesCount,
}: {
  progress: number;
  imageIndex: number;
  imagesCount: number;
}): JSX.Element => {
  const [currentCardIndex, setCurrentCardIndex] = useState(imageIndex);

  useEffect(() => {
    setCurrentCardIndex(imageIndex - 1);
  }, [imageIndex]);

  return (
    <>
      <div
        className={cn(
          poppins.className,
          'w-full md:w-[390px] bg-white relative md:absolute md:left-0 md:bottom-0 md:p-7 md:pb-0 md:m-5 md:flex-col md:justify-between md:items-start drop-shadow pt-2 px-4 z-10',
        )}
      >
        {/* Card Content */}
        <div>
          {/* Title */}
          {carouselCardsData[currentCardIndex].about && (
            <div className="overflow-hidden">
              <motion.span
                key={`about-${currentCardIndex}`}
                className="text-[1rem] font-light text-navy-100 inline-block"
                initial={{ opacity: 0, y: '-100%' }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {carouselCardsData[currentCardIndex].about}
              </motion.span>
            </div>
          )}

          {/* Header */}
          <div className="overflow-hidden">
            <motion.h1
              key={`header-${currentCardIndex}`}
              className="text-2xl lg:text-4xl leading-normal md:font-normal"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {carouselCardsData[currentCardIndex].header}
            </motion.h1>
          </div>

          <motion.div
          key={`description-${currentCardIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1, ease: 'easeInOut' }}
          >
            {/* Description */}
            <div className="overflow-hidden">
              <p className="mt-1 sm:mt-4 font-light text-[0.9rem] md:text-[1rem] lg:text-[1.125rem]">
                {carouselCardsData[currentCardIndex].description}
              </p>
            </div>

            <ReadMoreBtn transparent btnStyles="mb-5 font-normal" />
          </motion.div>
        </div>

        {/* Image order */}
        <div className="absolute bottom-2 right-5 md:hidden">
          <span className="text-xl font-semibold">{imageIndex} </span>

          <span>/ {imagesCount}</span>
        </div>

        <div className="bg-text-muted/30 -mr-4 -ml-7 md:w-[389.5px] h-0.5 md:h-1 relative overflow-hidden">
          <div
            className="absolute left-0 rounded-r-2xl bg-navy-100 h-0.5 w-full animate-[scaleX_8s_cubic-bezier(.52,.79,.84,1.03)_paused] origin-left md:h-1"
            style={{ animationDelay: `-${(progress * 8) / 100}s` }}
          />
        </div>
      </div>
    </>
  );
};

export default CarouselDescriptionCard;
