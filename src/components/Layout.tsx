import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { AppointmentModal } from './AppointmentModal';
import { ScrollToTop } from './ScrollToTop';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-brand-ivory font-sans selection:bg-teal-100 selection:text-teal-900">
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <AppointmentModal />
    </div>
  );
};
