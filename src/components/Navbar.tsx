import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhoneAlt, faTooth } from '@fortawesome/free-solid-svg-icons';
import { clinic } from '../config/clinic';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Treatments', href: '#treatments' },
    { name: 'Plans', href: '#plans' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="text-teal-700">
              {/* <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> */}
              <FontAwesomeIcon icon={faTooth} className="text-2xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 leading-tight">{clinic.name}</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${clinic.phone}`} className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-teal-700">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-sm" />
              <span>{clinic.phone}</span>
            </a>
            <a href="#book" className="bg-brand-teal-dark text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-teal-900 transition-colors">
              Book Appointment
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isOpen ? <FontAwesomeIcon icon={faTimes} className="text-2xl" /> : <FontAwesomeIcon icon={faBars} className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a href="#book" onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-brand-teal-dark text-white px-5 py-3 rounded text-base font-medium hover:bg-teal-900">
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
