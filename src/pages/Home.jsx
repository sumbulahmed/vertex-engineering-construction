import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import SectorsSection from '../components/sections/SectorsSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import OngoingProjects from '../components/sections/OngoingProjects';
import Statistics from '../components/sections/Statistics';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import TeamSection from '../components/sections/TeamSection';
import QualitySafety from '../components/sections/QualitySafety';
import Testimonials from '../components/sections/Testimonials';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <SectorsSection />
      <ServicesSection />
      <FeaturedProjects />
      <OngoingProjects />
      <Statistics />
      <WhyChooseUs />
      <TeamSection />
      <QualitySafety />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
