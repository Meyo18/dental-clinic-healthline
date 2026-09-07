import { Link } from 'react-router-dom';
import { treatments } from '../data/treatments';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const TreatmentsSection = () => {
  return (
    <section id="treatments" className="py-16 lg:py-20 bg-brand-ivory min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn direction="up" className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2 tracking-tight">Our Dental Treatments</h2>
          <p className="text-slate-600 max-w-2xl text-lg mx-auto">Comprehensive care using modern techniques for your oral health.</p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment) => (
            <Link to={`/treatments/${treatment.id}`} key={treatment.id} className="block h-full">
              <StaggerItem
                className="bg-white rounded p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full cursor-pointer"
              >
                <div className="w-12 h-12 rounded bg-teal-50/50 flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform">
                  <FontAwesomeIcon icon={treatment.icon} className="text-2xl" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{treatment.title}</h3>
                <p className="text-slate-500 text-sm mb-6 grow leading-relaxed">{treatment.description}</p>

                <div className="text-brand-teal text-sm font-medium flex items-center gap-1 group-hover:text-teal-900 transition-colors mt-auto">
                  Learn More <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-1" />
                </div>
              </StaggerItem>
            </Link>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
