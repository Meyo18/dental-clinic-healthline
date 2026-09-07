import { doctors } from '../data/doctors';
import { FadeIn, StaggerContainer, StaggerItem } from './FadeIn';

export const DoctorsSection = () => {
  return (
    <section id="doctors" className="py-16 lg:py-20 bg-white border-t border-slate-100 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FadeIn direction="up" className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Meet Your Dental Care Team</h2>
            <p className="text-slate-600 text-lg">Experienced professionals dedicated to your oral health.</p>
          </div>
          <a href="#book" className="hidden md:inline-flex text-brand-teal font-semibold hover:text-teal-900 transition-colors">
            View All Doctors &rarr;
          </a>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <StaggerItem key={doctor.id} className="bg-white rounded border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="aspect-4/3 sm:aspect-square overflow-hidden bg-slate-100">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-900 mb-1">{doctor.name}</h3>
                <p className="text-brand-teal font-medium text-xs mb-3">{doctor.specialization} • {doctor.qualifications}</p>
                <div className="space-y-2 pt-3 border-t border-slate-100">
                  <p className="text-xs text-slate-600 flex justify-between">
                    <span className="font-semibold text-slate-900">Experience:</span>
                    <span>{doctor.experience}</span>
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1 line-clamp-2">
                    {doctor.biography}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-8 text-center md:hidden">
          <a href="#book" className="inline-flex text-brand-teal font-semibold hover:text-teal-900 transition-colors">
            View All Doctors &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
