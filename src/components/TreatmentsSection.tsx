import  { useState } from 'react';
import { treatments } from '../data/treatments';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const TreatmentsSection = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<typeof treatments[0] | null>(null);

  return (
    <section id="treatments" className="py-16 lg:py-20 bg-brand-ivory min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">Our Dental Treatments</h2>
          <p className="text-slate-600 max-w-2xl text-lg mx-auto">Comprehensive care using modern techniques for your oral health.</p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment) => (
            <StaggerItem
              key={treatment.id}
              className="bg-white rounded p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedTreatment(treatment)}
            >
              <div className="w-12 h-12 rounded bg-teal-50/50 flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={treatment.icon} className="text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">{treatment.title}</h3>
              <p className="text-slate-500 text-sm mb-6 grow leading-relaxed">{treatment.description}</p>

              <button className="text-brand-teal text-sm font-medium flex items-center gap-1 group-hover:text-teal-900 transition-colors mt-auto">
                Learn More <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
              </button>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Treatment Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedTreatment(null)}>
          <div
            className="bg-white rounded-lg w-full max-w-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-brand-ivory">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-teal-50 flex items-center justify-center text-brand-teal">
                  <FontAwesomeIcon icon={selectedTreatment.icon} className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{selectedTreatment.title}</h3>
              </div>
              <button onClick={() => setSelectedTreatment(null)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">What it is</h4>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{selectedTreatment.details}</p>
                </div>

                <div className="bg-slate-50 rounded p-4 border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">When to consider</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">{selectedTreatment.whenToConsider}</p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">The Process</h4>
                  <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{selectedTreatment.process}</p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-white flex gap-4">
              <a
                href={generateWhatsAppLink(`Hello, I would like to ask about ${selectedTreatment.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-white border border-slate-200 text-slate-700 text-center px-4 py-2.5 rounded font-medium hover:bg-slate-50 transition-colors text-sm sm:text-base"
              >
                Ask on WhatsApp
              </a>
              <a
                href="#book"
                onClick={() => setSelectedTreatment(null)}
                className="flex-1 bg-brand-teal-dark text-white text-center px-4 py-2.5 rounded font-medium hover:bg-teal-900 transition-colors text-sm sm:text-base shadow-sm"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
