import HeroSection from '@/sections/HeroSection';
import SkillsSection from '@/sections/SkillsSection';
import FeaturedProjectsSection from '@/sections/FeaturedProjectsSection';
import CTASection from '@/sections/CTASection';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <CTASection />
    </div>
  );
}
