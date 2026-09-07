import { Navbar } from '../components/Navbar';
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
import { Footer } from '../components/Footer';
import { AppointmentModal } from '../components/AppointmentModal';

export const Home = () => {
  return (
    <div className="min-h-screen bg-brand-ivory font-sans selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
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
      </main>
      <Footer />
      <AppointmentModal />
    </div>
  );
};
