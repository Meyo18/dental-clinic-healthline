import { clinic } from '../config/clinic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-6 text-brand-teal">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <span className="text-xl font-bold text-slate-900 leading-tight">{clinic.name}</span>
            </div>
            <p className="text-slate-500 text-sm mb-6 leading-relaxed">
              {clinic.description}
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-brand-teal transition-colors"><FontAwesomeIcon icon={faFacebook} className="text-xl" /></a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-brand-teal transition-colors"><FontAwesomeIcon icon={faInstagram} className="text-xl" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Treatments', 'Plans', 'Doctors', 'Reviews', 'Location'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm text-slate-500 hover:text-brand-teal transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500 hover:text-brand-teal transition-colors">
                <FontAwesomeIcon icon={faPhoneAlt} className="mt-1 shrink-0 text-sm" />
                <a href={`tel:${clinic.phone}`}>{clinic.phone}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500 hover:text-brand-teal transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="mt-1 shrink-0 text-sm" />
                <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mt-1 shrink-0 text-sm" />
                <span>{clinic.address}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Clinic Hours</h4>
            <div className="text-sm text-slate-500 space-y-2 whitespace-pre-line leading-relaxed">
              {clinic.timings}
            </div>
            <p className="text-xs text-slate-400 mt-6">*Timings are subject to change.</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} {clinic.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
