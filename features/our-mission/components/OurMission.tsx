'use client';

import { JSX } from 'react';

import ReadMoreBtn from '@/components/ui/ReadMoreBtn';

import AnimatedUnderline from '@/components/ui/AnimatedUnderline';

import { inriaSans, kodchasan, inter } from '@/app/fonts';

const OurMission = (): JSX.Element => {
  return (
    <>
      {/* Section Header */}
      <h1
        className={
          inriaSans.className +
          ' text-text-muted md:text-[2.7rem] lg:text-[3.7rem] text-center text-[2rem] font-bold uppercase mb-5 mt-10 tracking-widest'
        }
      >
        Our Mission
      </h1>
      <section className="text-text-main grid grid-cols-1 items-center md:grid-cols-2 gap-10 md:gap-20 mx-5 mt-10 md:mt-20">
        {/* LEFT COLUMN: Description Container */}
        <div className="md:w-[72%] justify-self-end">
          <div className="leading-relaxed">
            {/* Description Header */}
            <h2
              className={
                inter.className +
                ' text-text-main md:text-[2.7rem] lg:text-6xl text-[2rem] md:min-w-[245px] font-normal lg:mb-10 mb-5'
              }
            >
              Engineering the Future
            </h2>

            {/* Description Text */}
            <div
              className={kodchasan.className + ' text-text-muted text-[1rem]'}
            >
              <p>
                We design and build infrastructure that balances{' '}
                <AnimatedUnderline>structural excellence</AnimatedUnderline>{' '}
                with{' '}
                <AnimatedUnderline>
                  environmental responsibility
                </AnimatedUnderline>
                .
              </p>

              <p className="my-4.5">
                From civil energy projects to high-speed transit networks, we
                partner with governments to solve the world's{' '}
                <AnimatedUnderline>most complex challenges</AnimatedUnderline>.
              </p>

              <p className="my-4.5">
                Reliable engineering, and infrastructure that delivers{' '}
                <AnimatedUnderline>lasting value</AnimatedUnderline>.
              </p>
            </div>

            <div className="mt-9">
              <ReadMoreBtn filled={true} />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Video */}
        <div className="aspect-square rounded-sm overflow-hidden">
          <video
            src="/our-mission.mp4"
            autoPlay
            loop
            muted
            className="object-cover w-full h-full"
          />
        </div>
      </section>
    </>
  );
};

export default OurMission;
