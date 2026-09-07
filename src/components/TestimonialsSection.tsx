import { testimonials } from '../data/testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-16 lg:py-20 bg-brand-ivory min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn direction="up" className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">What Our Patients Say</h2>
            <p className="text-slate-600 text-lg">Real experiences from our clinic.</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-brand-teal font-semibold hover:text-teal-900 transition-colors">
            View All Reviews &rarr;
          </a>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.id} className="bg-white p-8 rounded border border-slate-100 shadow-sm flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i < testimonial.rating ? 'text-amber-400' : 'text-slate-200'}
                  />
                ))}
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 grow">"{testimonial.review}"</p>
              <div className="font-semibold text-sm text-slate-900">— {testimonial.patientName}</div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
