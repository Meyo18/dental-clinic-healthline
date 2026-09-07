import { useParams, Navigate } from 'react-router-dom';
import { treatments } from '../data/treatments';
import { FadeIn } from '../components/FadeIn';

export const TreatmentPage = () => {
  const { id } = useParams();
  
  // Find the corresponding treatment data
  const treatment = treatments.find(t => t.id === id);

  if (!treatment) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="py-20 lg:py-32 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center mb-24">
          <FadeIn direction="right" className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              {treatment.title} in Kanpur
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              {treatment.description}
            </p>
            <a href="#book" className="inline-block bg-brand-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-brand-teal-dark transition-colors shadow-lg hover:shadow-xl text-lg">
              Book an Initial Consultation
            </a>
          </FadeIn>
          
          <FadeIn direction="left" className="lg:w-1/2">
            <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 relative group">
              {treatment.imageUrl && (
                <img 
                  src={treatment.imageUrl} 
                  alt={treatment.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              )}
            </div>
          </FadeIn>
        </div>

        {/* Content Section */}
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <FadeIn direction="up">
            <h2 className="text-2xl font-bold text-brand-teal mb-4">What is it?</h2>
            <p className="text-slate-700 leading-relaxed mb-10 text-lg">
              {treatment.details}
            </p>

            <h2 className="text-2xl font-bold text-brand-teal mb-4">When are they used?</h2>
            <p className="text-slate-700 leading-relaxed mb-10 text-lg">
              {treatment.whenToConsider}
            </p>

            <h2 className="text-2xl font-bold text-brand-teal mb-4">What does the treatment involve?</h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              {treatment.process}
            </p>
          </FadeIn>
        </div>

      </div>
    </div>
  );
};
