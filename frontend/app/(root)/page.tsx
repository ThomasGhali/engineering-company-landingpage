import ImageCarousel from '@/features/image-carousel/components/ImageCarouselSection';
import OurMission from '@/features/our-mission/components/OurMission';
import CountupStats from '@/features/countup-stats/components/CountupStats';
import OurExperience from '@/features/our-experience/components/OurExperience';

export default function Home() {
  return (
    <>
      <ImageCarousel />
      <OurMission />
      <CountupStats />
      <OurExperience />
    </>
  );
}
