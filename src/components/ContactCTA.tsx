import { generateWhatsAppLink } from '../utils/whatsapp';

export const ContactCTA = () => {
  return (
    <section className="bg-brand-teal-dark py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center mb-8 rotate-3">
          <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to take care of your smile?
        </h2>
        <p className="text-teal-50 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light">
          Talk to our clinic and find the right next step for your dental care.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#book"
            className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded shadow-sm text-brand-teal-dark bg-white hover:bg-slate-50 transition-colors"
          >
            Book Appointment
          </a>
          <a
            href={generateWhatsAppLink("Hello, I would like to book an appointment.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center px-8 py-4 border border-teal-600/50 text-base font-semibold rounded text-white bg-transparent hover:bg-white/10 transition-colors"
          >
            WhatsApp Clinic
          </a>
        </div>
      </div>
    </section>
  );
};
