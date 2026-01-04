import CarouselDescriptionCard from '@/features/image-carousel/CarouselDescriptionCard';
import CarouselImage from '@/features/image-carousel/CarouselImage';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function ImageCarousel() {
  return (
    <>
      {/* Hero section container */}
      <section className="lg:h-[calc(100vh-5.625rem)] bg-bg-400 w-full text-text-main bottom-border border-bg-border md:relative">
        <CarouselImage />

        <CarouselDescriptionCard />

        {/* Carousel navigation and progress bar */}
        <div className="h-14 md:h-16 text-xl font-semibold flex items-center justify-between px-8 md:px-20 lg:px-40">
          {/* Progress bar */}
          <div className="flex-center gap-x-4">
            <span className="text-text-main">01</span>

            <div className="bg-text-muted/30 w-20 h-0.5 relative overflow-">
              <div className="absolute -top-[50%] -left-full rounded-r-2xl bg-navy-100 h-1 w-full animate-[slide_4s_linear_infinite] " />
            </div>

            <span className="text-text-muted/70">05</span>
          </div>

          {/* Carousel nav */}
          <div className="flex-center gap-x-4">
            <button>
              <ChevronLeft size={30} strokeWidth={1.5} className="chevron" />
            </button>

            <button className="flex-center gap-x-1 cursor-pointer p-2">
              <span className="h-5 w-1 bg-text-main" />
              <span className="h-5 w-1 bg-text-main" />
            </button>

            <button>
              <ChevronRight size={30} strokeWidth={1.5} className="chevron" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
