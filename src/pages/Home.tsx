import { Hero } from '../components/Hero';
import { QuickActions } from '../components/QuickActions';
import { InteractiveIssues } from '../components/InteractiveIssues';
import { TreatmentsSection } from '../components/TreatmentsSection';
import { CarePlans } from '../components/CarePlans';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { DoctorsSection } from '../components/DoctorsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { LocationSection } from '../components/LocationSection';
import { ContactCTA } from '../components/ContactCTA';
export const Home = () => {
  return (
    <>
      <Hero />
      <QuickActions />
      <InteractiveIssues />
      <TreatmentsSection />
      <CarePlans />
      <div id="about">
        <WhyChooseUs />
      </div>
      <DoctorsSection />
      <TestimonialsSection />
      <LocationSection />
      <ContactCTA />
    </>
  );
};
