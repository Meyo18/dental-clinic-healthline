import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartPulse, faCircleCheck, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { clinic } from '../config/clinic';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export const WhyChooseUs = () => {
  const reasons = [
    { title: "Patient-first care", description: "Clear communication and comfortable consultations.", icon: faHeart },
    { title: "Modern treatment approach", description: "Focus on appropriate, evidence-based dental care.", icon: faHeartPulse },
    { title: "Transparent guidance", description: "Understand your treatment options before making decisions.", icon: faCircleCheck },
    { title: "Convenient location", description: `Located in ${clinic.address.split(',')[1]?.trim() || clinic.city}, ${clinic.address.split(',')[0]}.`, icon: faMapMarkerAlt }
  ];

  return (
    <section className="py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Why Choose Us</h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              We believe in providing honest, professional dental care in a comfortable environment.
              Your smile and oral health are our priority.
            </p>

            <StaggerContainer className="space-y-8">
              {reasons.map((reason, idx) => (
                <StaggerItem key={idx} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded bg-teal-50/70 flex items-center justify-center text-brand-teal">
                    <FontAwesomeIcon icon={reason.icon} className="text-2xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{reason.title}</h4>
                    <p className="text-slate-600">{reason.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </FadeIn>

          <FadeIn direction="left" className="relative">
            <div className="aspect-4/5 rounded bg-slate-200 overflow-hidden shadow-2xl border border-slate-200/50">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
                alt="Dental Clinic Interior"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 sm:p-5 rounded-xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {clinic.clientAvatars.map((avatar, idx) => (
                    <img key={idx} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={avatar} alt={`Client ${idx + 1}`} />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-50 flex items-center justify-center text-xs font-bold text-brand-teal z-10">
                    +5k
                  </div>
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Our Local Clients</div>
                  <div className="text-xs text-slate-500">Trusted by thousands</div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
