import { testimonials } from '../data/testimonials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FadeIn } from './FadeIn';

export const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-16 lg:py-20 bg-brand-ivory min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn direction="up" className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">What Our Patients Say</h2>
            <p className="text-slate-600 text-lg">Real experiences from our clinic.</p>
          </div>
        </FadeIn>

        <div className="overflow-hidden relative w-full -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex w-max animate-marquee gap-6 py-4">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={`${testimonial.id}-${idx}`} className="w-[300px] md:w-[400px] shrink-0 bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col cursor-grab active:cursor-grabbing">
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
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-ivory to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-ivory to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
