import { clinic } from '../config/clinic';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FadeIn } from './FadeIn';

export const LocationSection = () => {
  return (
    <section id="location" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <FadeIn direction="right" className="lg:col-span-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Find us in<br />{clinic.address.split(',')[1]?.trim() || clinic.city}
            </h2>

            <div className="bg-slate-50 p-8 rounded border border-slate-100 mb-8 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">{clinic.name}</h3>
              <p className="text-slate-600 leading-relaxed text-sm mb-6">
                {clinic.address}
              </p>
              <a
                href={clinic.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center w-full py-3 items-center gap-2 text-sm font-semibold text-white bg-brand-teal-dark hover:bg-teal-900 rounded transition-colors shadow-sm"
              >
                <FontAwesomeIcon icon={faLocationArrow} className="text-sm" />
                Get Directions
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="lg:col-span-2 aspect-square lg:aspect-auto lg:h-125 bg-slate-100 rounded overflow-hidden shadow-inner relative border border-slate-200">
            {clinic.googleMapsEmbedUrl !== "REPLACE_WITH_EMBED_URL" ? (
              <iframe
                src={clinic.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-400 p-6 text-center bg-brand-ivory">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-5xl mb-4 text-slate-300" />
                <p>Google Maps embed will appear here.</p>
                <p className="text-xs mt-2 font-mono">Update config/clinic.ts</p>
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
