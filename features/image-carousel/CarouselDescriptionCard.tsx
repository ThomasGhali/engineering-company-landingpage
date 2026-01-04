import ReadMoreBtn from '@/components/ui/ReadMoreBtn';

export default function CarouselDescriptionCard() {
  return (
    <>
      {/* Content card with heading and description */}
      <div className="w-full md:w-[390px] bg-white rounded-b-3xl md:rounded-none md:absolute md:left-[2%] md:bottom-[15%] drop-shadow py-2 px-4">
        <div>
          <h1 className="text-4xl leading-normal font-medium">
            Engineering at{' '}
            <span className="underline decoration-primary-100 decoration-5 underline-offset-8">
              National
            </span>{' '}
            Scale
          </h1>

          <p className="mt-1 sm:mt-4">
            Through strategic collaboration with leading utilities, Qualtec
            contributed.
          </p>
        </div>

        <ReadMoreBtn />
      </div>
    </>
  );
}
