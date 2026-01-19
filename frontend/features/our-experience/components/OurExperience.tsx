'use client';

import { JSX } from 'react';

import ReadMoreBtn from '@/components/ui/ReadMoreBtn';

import { inter, kodchasan } from '@/app/fonts';

import { motion } from 'motion/react';

const ExperienceCard = ({
  title,
  header,
  description,
}: {
  title: string;
  header: string;
  description: string;
}): JSX.Element => {
  return (
    <a href="#" className="group">
      <motion.div
        className="pl-6 pr-10 mb-5 pt-8 pb-6 md:h-[500px] w-full border bg-charcoal-900 flex flex-col justify-between items-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        viewport={{ amount: 0.3, once: true }}
      >
        <p className="title-sm-text mb-13">{title}</p>

        <h3 className={inter.className + ' text-2xl text-white mb-9'}>
          {header}
        </h3>

        <p className="text-white mb-3 md:mb-13">{description}</p>

        <ReadMoreBtn
          empty
          btnStyles="underline-expand group-hover:after:scale-x-100 -ml-5"
        />
      </motion.div>
    </a>
  );
};

const OurExperience = () => {
  return (
    <div>
      <section className="bg-charcoal-700 pt-16 pl-4 pr-2 flex flex-col lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-12 lg:-center">
        {/* Sticky Section */}
        <div className="lg:sticky top-28 mb-18 h-min">
          <motion.h2
            className="title-sm-text"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            viewport={{ amount: 1, once: true }}
          >
            Our Experience
          </motion.h2>

          <motion.h3
            className={inter.className + ' text-3xl text-white my-9'}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            viewport={{ amount: 1, once: true }}
          >
            Experience That Delivers
          </motion.h3>

          <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.4, ease: 'easeIn'}} viewport={{amount: 0.5, once: true}}>
            <p className={kodchasan.className + ' text-white text-lg'}>
              Qualtech is a leading engineering and construction firm dedicated to
              delivering high-performance infrastructure and building solutions
              through innovation, efficiency, and a collaborative approach.
            </p>
            <ReadMoreBtn btnStyles="mt-10" white content="Company" />
          </motion.div>
        </div>

        {/* Columns container */}
        <div className="flex gap-x-5 flex-col md:flex-row">
          {/* Left Column */}
          <div className="experience-col">
            <ExperienceCard
              title="Effecient"
              header="Fast deliver, lasting quality"
              description="Establishing a solid projects management systems enabled one of the best efficiencies in the industry"
            />
            <ExperienceCard
              title="Innovative"
              header="Smart solutions for complex challenges"
              description="We push the boundaries of what is possible, using advanced construction techniques to solve complex problems."
            />
            <ExperienceCard
              title="Sustainable"
              header="Building for a greener future"
              description="We integrate eco-friendly practices and materials to ensure long-term environmental and social responsibility."
            />
          </div>

          {/* Right Column */}
          <div className="experience-col md:mt-40">
            <ExperienceCard
              title="Reliable"
              header="Proven track record of success"
              description="With decades of experience, we have built a reputation for delivering projects on time and within budget."
            />
            <ExperienceCard
              title="Collaborative"
              header="Working together for better results"
              description="Our integrated approach ensures seamless collaboration between all stakeholders for superior project outcomes."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurExperience;
