import { useState } from 'react';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { cn } from '../utils/utils';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

const ToothPain = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5">
    <path d="M7 4C4 4 3 7 3 10C3 14 5 16 6 19C6.5 21 8 22 9 22C10.5 22 11 20 12 18C13 20 13.5 22 15 22C16 22 17.5 21 18 19C19 16 21 14 21 10C21 7 20 4 17 4C15 4 13.5 5.5 12 7C10.5 5.5 9 4 7 4Z" />
    <path d="M12 2L12 0 M6 3L4 1 M18 3L20 1" stroke="#F59E0B" strokeLinecap="round" />
  </svg>
);

const SensitiveTeeth = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5">
    <path d="M7 4C4 4 3 7 3 10C3 14 5 16 6 19C6.5 21 8 22 9 22C10.5 22 11 20 12 18C13 20 13.5 22 15 22C16 22 17.5 21 18 19C19 16 21 14 21 10C21 7 20 4 17 4C15 4 13.5 5.5 12 7C10.5 5.5 9 4 7 4Z" />
    <circle cx="17" cy="7" r="1.5" fill="#60A5FA" stroke="none" />
    <path d="M16 6l2 2m0-2l-2 2" stroke="#60A5FA" strokeLinecap="round" />
  </svg>
);

const BleedingGums = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5">
    <path d="M7 4C4 4 3 7 3 10C3 14 5 16 6 19C6.5 21 8 22 9 22C10.5 22 11 20 12 18C13 20 13.5 22 15 22C16 22 17.5 21 18 19C19 16 21 14 21 10C21 7 20 4 17 4C15 4 13.5 5.5 12 7C10.5 5.5 9 4 7 4Z" />
    <path d="M4 18c0 0 3 4 5 4s3-2 3-2 1 2 3 2 5-4 5-4" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const Cavities = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5">
    <path d="M7 4C4 4 3 7 3 10C3 14 5 16 6 19C6.5 21 8 22 9 22C10.5 22 11 20 12 18C13 20 13.5 22 15 22C16 22 17.5 21 18 19C19 16 21 14 21 10C21 7 20 4 17 4C15 4 13.5 5.5 12 7C10.5 5.5 9 4 7 4Z" />
    <path d="M9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" fill="#475569" stroke="none" />
    <path d="M10 8l1-1" stroke="#475569" strokeLinecap="round" />
  </svg>
);

const MissingTeeth = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5" strokeLinecap="round">
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <path d="M10 7v14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V7" />
    <path d="M8 11h8 M8 15h8 M8 19h8" />
  </svg>
);

const YellowTeeth = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="#FEF08A" stroke="#1E616C" strokeWidth="1.5">
    <path d="M7 4C4 4 3 7 3 10C3 14 5 16 6 19C6.5 21 8 22 9 22C10.5 22 11 20 12 18C13 20 13.5 22 15 22C16 22 17.5 21 18 19C19 16 21 14 21 10C21 7 20 4 17 4C15 4 13.5 5.5 12 7C10.5 5.5 9 4 7 4Z" />
  </svg>
);

const CrookedTeeth = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5" strokeLinecap="round">
    <path d="M2 12c0-3 3-5 5-5s3 2 5 2 3-2 5-2 5 2 5 5-3 5-5 5-3-2-5-2-3 2-5 2-5-2-5-5z" />
    <path d="M7 7v10 M12 9v6 M17 7v10" />
    <path d="M2 12h20" stroke="#94A3B8" strokeWidth="2" />
  </svg>
);

const Checkup = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" />
    <path d="M9 12l2 2 4-4" stroke="#1E616C" />
  </svg>
);

const SmileMakeover = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <path d="M8 10c0 1.5 1.5 3 4 3s4-1.5 4-3" />
  </svg>
);

const Other = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1E616C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M8 12h.01 M12 12h.01 M16 12h.01" strokeWidth="3" />
  </svg>
);

const issues = [
  { id: 'tooth-pain', label: 'Tooth Pain', icon: <ToothPain />, response: 'Tooth pain can have several causes, including decay, infection, or sensitivity. A dental examination can help identify the cause.' },
  { id: 'sensitive-teeth', label: 'Sensitive Teeth', icon: <SensitiveTeeth />, response: 'Sensitivity often indicates worn enamel or exposed roots. We can help desensitize and protect your teeth.' },
  { id: 'bleeding-gums', label: 'Bleeding Gums', icon: <BleedingGums />, response: 'Bleeding gums can be an early sign of gingivitis or gum disease. Professional cleaning and assessment are recommended.' },
  { id: 'cavities', label: 'Cavities', icon: <Cavities />, response: 'Cavities need to be treated early to prevent further decay. We offer modern, tooth-colored fillings.' },
  { id: 'missing-teeth', label: 'Missing Teeth', icon: <MissingTeeth />, response: 'Missing teeth can be replaced with implants, bridges, or dentures to restore function and appearance.' },
  { id: 'yellow-teeth', label: 'Yellow / Stained', icon: <YellowTeeth />, response: 'Professional teeth whitening can safely and effectively brighten your smile.' },
  { id: 'crooked-teeth', label: 'Crooked Teeth', icon: <CrookedTeeth />, response: 'We offer orthodontic solutions like clear aligners and braces to straighten your teeth.' },
  { id: 'checkup', label: 'Routine Checkup', icon: <Checkup />, response: 'Regular checkups are the best way to maintain optimal oral health and catch issues early.' },
  { id: 'smile-makeover', label: 'Smile Makeover', icon: <SmileMakeover />, response: 'A smile makeover combines cosmetic treatments to give you the confident smile you deserve.' },
  { id: 'other', label: 'Other', icon: <Other />, response: 'Whatever your concern, our team is here to listen and provide the right dental care.' },
];

export const InteractiveIssues = () => {
  const [selected, setSelected] = useState(issues[0]);

  return (
    <section className="py-16 lg:py-20 bg-white min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          <FadeIn direction="up" className="md:col-span-7 lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">
              What can we help you with?
            </h2>
            <p className="text-slate-600 mb-8 text-lg">
              Select your concern and we'll guide you better.
            </p>

            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {issues.map((issue) => (
                <StaggerItem key={issue.id}>
                  <button
                    onClick={() => setSelected(issue)}
                    className={cn(
                      "w-full h-full flex flex-col items-center justify-center p-3 rounded-xl border transition-all text-center gap-2",
                      selected.id === issue.id
                        ? "border-teal-700 bg-teal-50/50 text-teal-900 shadow-sm ring-1 ring-teal-700"
                        : "border-slate-100 bg-white text-slate-600 hover:border-slate-200 hover:bg-slate-50"
                    )}
                  >
                    <div className="mb-2 flex justify-center">{issue.icon}</div>
                    <span className="text-xs font-medium">{issue.label}</span>
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="md:col-span-5 lg:col-span-4 bg-brand-ivory p-8 rounded-2xl border border-slate-100 shadow-sm h-full flex flex-col">
            <div className="mb-4 flex">{selected.icon}</div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">{selected.label}</h3>
            <p className="text-slate-600 mb-8 leading-relaxed grow">
              {selected.response}
            </p>
            <a
              href={generateWhatsAppLink(`Hi, I'm reaching out regarding: ${selected.label}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded text-white bg-brand-teal-dark hover:bg-teal-900 transition-colors mt-auto w-full"
            >
              Discuss on WhatsApp
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
