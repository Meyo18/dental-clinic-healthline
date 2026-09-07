import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { generateAppointmentMessage, generateWhatsAppLink } from '../utils/whatsapp';

export const AppointmentModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#book') {
        setIsOpen(true);
        // Clear hash so it can be re-triggered
        window.history.pushState('', document.title, window.location.pathname + window.location.search);
      }
    };
    
    window.addEventListener('hashchange', handleHashChange);
    // Check on initial load
    if (window.location.hash === '#book') {
      handleHashChange();
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    treatment: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = generateAppointmentMessage(
      formData.name,
      formData.phone,
      formData.date,
      formData.time,
      formData.treatment,
      formData.message
    );
    window.open(generateWhatsAppLink(msg), '_blank');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
      <div 
        className="bg-white rounded-xl w-full max-w-md shadow-2xl overflow-hidden flex flex-col max-h-[95vh] animate-in fade-in zoom-in-95 duration-200" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-brand-ivory">
          <h3 className="text-xl font-bold text-slate-900">Book Appointment</h3>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
            <FontAwesomeIcon icon={faTimes} className="text-2xl" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto grow flex flex-col gap-4">
          <div className="bg-teal-50 text-teal-800 p-4 rounded text-sm mb-2 border border-teal-100 font-medium">
            Your enquiry will be prepared. Continue on WhatsApp to confirm your appointment with the clinic.
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
            <input required type="text" className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600" 
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input required type="tel" pattern="[0-9]{10}" title="10 digit phone number" className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600" 
              value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date <span className="text-red-500">*</span></label>
              <input required type="date" className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-700" 
                value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Time <span className="text-red-500">*</span></label>
              <input required type="time" className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 text-slate-700" 
                value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Treatment / Reason <span className="text-red-500">*</span></label>
            <select required className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 bg-white"
              value={formData.treatment} onChange={e => setFormData({...formData, treatment: e.target.value})}>
              <option value="" disabled>Select Treatment</option>
              <option value="General Dental Checkup">General Dental Checkup</option>
              <option value="Teeth Cleaning">Teeth Cleaning</option>
              <option value="Root Canal Treatment">Root Canal Treatment</option>
              <option value="Dental Filling">Dental Filling</option>
              <option value="Teeth Whitening">Teeth Whitening</option>
              <option value="Braces / Orthodontics">Braces / Orthodontics</option>
              <option value="Dental Implants">Dental Implants</option>
              <option value="Tooth Extraction">Tooth Extraction</option>
              <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
            <textarea rows={3} className="w-full border border-slate-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600 resize-none"
              value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
          </div>

          <button type="submit" className="w-full bg-[#25D366] text-white font-semibold py-3 rounded mt-4 hover:bg-[#128C7E] transition-colors shadow flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            Send Enquiry on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};
