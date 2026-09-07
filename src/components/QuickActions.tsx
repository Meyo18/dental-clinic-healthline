import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCommentDots, faPhoneAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { generateWhatsAppLink } from '../utils/whatsapp';
import { clinic } from '../config/clinic';
import { StaggerContainer, StaggerItem } from './FadeIn';

export const QuickActions = () => {
  const actions = [
    {
      title: "Book Appointment",
      description: "Schedule your visit",
      icon: faCalendarAlt,
      href: "#book"
    },
    {
      title: "WhatsApp",
      description: "Chat with our team",
      icon: faCommentDots,
      href: generateWhatsAppLink("Hello!"),
      external: true,
      color: "text-green-600"
    },
    {
      title: "Call Clinic",
      description: "Speak to our staff",
      icon: faPhoneAlt,
      href: `tel:${clinic.phone}`
    },
    {
      title: "Get Directions",
      description: "Find us easily",
      icon: faMapMarkerAlt,
      href: clinic.googleMapsUrl,
      external: true
    }
  ];

  return (
    <div className="relative -mt-20 lg:-mt-28 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <StaggerContainer delay={0.4} className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 divide-y md:divide-y-0 md:divide-x divide-slate-100 flex flex-col md:flex-row">
        {actions.map((action, i) => (
          <StaggerItem key={i} className="flex-1">
            <a 
              href={action.href}
            target={action.external ? "_blank" : "_self"}
            rel={action.external ? "noopener noreferrer" : ""}
            className="flex-1 flex items-center p-4 hover:bg-slate-50 transition-colors group rounded"
          >
              {/* target={action.external ? "_blank" : "_self"}
              rel={action.external ? "noopener noreferrer" : ""}
              className="flex-1 flex items-center p-4 hover:bg-slate-50 transition-colors group rounded"
            > */}
              <div className={`shrink-0 mr-4 ${action.color || 'text-teal-700'} group-hover:scale-110 transition-transform`}>
                <FontAwesomeIcon icon={action.icon} className="text-2xl" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{action.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{action.description}</p>
              </div>
            </a>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  );
};
