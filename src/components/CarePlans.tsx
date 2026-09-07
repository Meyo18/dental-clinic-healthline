
import { carePlans } from '../data/plans';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { cn } from '../utils/utils';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export const CarePlans = () => {
  return (
    <section id="plans" className="py-16 lg:py-20 bg-white border-t border-slate-100 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Choose a care plan<br />that works for you</h2>
          <p className="text-slate-600 text-lg">We offer structured care plans designed to keep your smile healthy year-round.</p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {carePlans.map((plan) => (
            <StaggerItem
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded p-8 border transition-all",
                plan.highlighted
                  ? "bg-white border-teal-600 shadow-xl scale-100 md:scale-105 z-10"
                  : "bg-slate-50 border-slate-200 shadow-sm"
              )}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-brand-teal text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-sm">
                    Recommended
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.title}</h3>
                <p className="text-sm text-slate-600 h-10">{plan.subtitle}</p>
              </div>

              <ul className="space-y-4 mb-8 grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCheck} className={cn("shrink-0 mt-1", plan.highlighted ? "text-teal-600" : "text-slate-400")} />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={generateWhatsAppLink(`Hello, I would like to know more about the ${plan.title} plan.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full text-center py-3 px-4 rounded font-medium transition-colors text-sm",
                  plan.highlighted
                    ? "bg-brand-teal-dark text-white hover:bg-teal-900 shadow-sm"
                    : "bg-white text-slate-900 border border-slate-300 hover:bg-slate-50"
                )}
              >
                {plan.ctaText}
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="text-center text-xs text-slate-400 mt-12 max-w-2xl mx-auto">
          * Plans and treatments are subject to clinical evaluation and availability. Contact clinic for current pricing.
        </p>
      </div>
    </section>
  );
};
