import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhoneAlt, faTooth, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { clinic } from '../config/clinic';
import { treatments } from '../data/treatments';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const getHref = (hash: string) => isHome ? hash : `/${hash}`;

  const navLinks = [
    { name: 'Home', href: isHome ? '#home' : '/' },
    { name: 'Treatments', href: getHref('#treatments'), hasDropdown: true },
    { name: 'Plans', href: getHref('#plans') },
    { name: 'Doctors', href: getHref('#doctors') },
    { name: 'Reviews', href: getHref('#reviews') },
    { name: 'Location', href: getHref('#location') },
  ];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="text-teal-700">
              <FontAwesomeIcon icon={faTooth} className="text-2xl" />
            </div>
            <div>
              <Link to="/" className="text-xl font-bold text-slate-900 leading-tight block">{clinic.name}</Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-20 flex items-center">
                {link.hasDropdown ? (
                  <>
                    <a href={link.href} className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors flex items-center gap-1">
                      {link.name}
                      <FontAwesomeIcon icon={faChevronDown} className="text-xs" />
                    </a>
                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-b-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                      {treatments.map(t => (
                        <Link 
                          key={t.id} 
                          to={`/treatments/${t.id}`} 
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-brand-teal/5 hover:text-brand-teal"
                        >
                          {t.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <a href={link.href} className="text-sm font-medium text-slate-600 hover:text-teal-700 transition-colors">
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href={`tel:${clinic.phone}`} className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-teal-700">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-sm" />
              <span>{clinic.phone}</span>
            </a>
            <a href={getHref('#book')} className="bg-brand-teal-dark text-white px-5 py-2.5 rounded text-sm font-medium hover:bg-teal-900 transition-colors">
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
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <a
                  href={link.href}
                  onClick={() => !link.hasDropdown && setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-teal-700 rounded-md"
                >
                  {link.name}
                </a>
                {link.hasDropdown && (
                  <div className="pl-6 pb-2 space-y-1 border-l-2 border-slate-100 ml-4">
                    {treatments.map(t => (
                      <Link
                        key={t.id}
                        to={`/treatments/${t.id}`}
                        onClick={() => setIsOpen(false)}
                        className="block px-3 py-2 text-sm text-slate-500 hover:text-brand-teal"
                      >
                        {t.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={getHref('#book')} onClick={() => setIsOpen(false)} className="block w-full text-center mt-4 bg-brand-teal-dark text-white px-5 py-3 rounded text-base font-medium hover:bg-teal-900">
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
