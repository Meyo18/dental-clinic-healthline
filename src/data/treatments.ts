import {
  faStethoscope,
  faHandSparkles,
  faHeartPulse,
  faShieldHalved,
  faSmile,
  faTeeth,
  faBaby,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

export const treatments = [
  {
    id: "general-dentistry",
    title: "General Dentistry",
    description: "Routine examinations, preventive care and oral health maintenance.",
    icon: faStethoscope,
    details: "Regular checkups are essential for maintaining optimal oral health. Our general dentistry services include comprehensive oral examinations, digital X-rays, and customized preventive care plans.",
    whenToConsider: "Every 6 months for routine maintenance, or if you notice any changes in your oral health.",
    process: "We start with a thorough examination, take necessary X-rays, discuss our findings with you, and create a personalized care plan."
  },
  {
    id: "teeth-cleaning",
    title: "Teeth Cleaning",
    description: "Professional cleaning and plaque/tartar removal.",
    icon: faHandSparkles,
    details: "Professional cleaning removes plaque and tartar buildup that regular brushing and flossing might miss, helping to prevent gum disease and cavities.",
    whenToConsider: "Every 6 months as part of your routine dental visit.",
    process: "Our hygienist carefully removes plaque and tartar, polishes your teeth to remove surface stains, and provides flossing guidance."
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Treatment aimed at saving infected or severely damaged teeth.",
    icon: faHeartPulse,
    details: "A root canal is a treatment used to repair and save a tooth that is badly decayed or becomes infected, rather than extracting it.",
    whenToConsider: "Severe toothache, prolonged sensitivity to heat or cold, discoloration of the tooth, or swelling in the gums.",
    process: "We remove the infected pulp, clean the inside of the tooth, fill and seal it, and typically place a crown to restore its strength."
  },
  {
    id: "dental-fillings",
    title: "Dental Fillings",
    description: "Restoration of teeth affected by cavities.",
    icon: faCircleCheck,
    details: "Fillings are used to treat tooth decay and restore the normal function and shape of the tooth. We use modern, tooth-colored materials.",
    whenToConsider: "When you have a cavity, a broken or cracked tooth, or a worn-down tooth.",
    process: "The decayed portion of the tooth is removed, the area is cleaned, and the cavity is filled with a durable restorative material."
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Cosmetic treatment for improving the appearance of stained or discoloured teeth.",
    icon: faSmile,
    details: "Professional teeth whitening is a safe and effective way to brighten your smile and remove stubborn stains from coffee, tea, or aging.",
    whenToConsider: "If you have discolored, dull, or stained teeth and want a brighter, more confident smile.",
    process: "We assess your teeth to ensure suitability, then apply a professional-grade whitening agent, sometimes activated by a special light, to achieve your desired shade."
  },
  {
    id: "braces-orthodontics",
    title: "Braces & Orthodontics",
    description: "Treatment planning for alignment and bite correction.",
    icon: faTeeth,
    details: "Orthodontic treatments correct improperly positioned teeth and jaws, improving both the function and aesthetics of your smile.",
    whenToConsider: "If you have crooked teeth, crowding, gaps, or bite issues (overbite, underbite).",
    process: "Following a comprehensive evaluation, we discuss your options (traditional braces or clear aligners) and design a step-by-step treatment plan to achieve a straight smile."
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Replacement options for missing teeth.",
    icon: faShieldHalved,
    details: "Dental implants are titanium posts surgically placed into the jawbone beneath your gums to mount replacement teeth or a bridge.",
    whenToConsider: "When you are missing one or more teeth and want a permanent, stable, and natural-looking replacement.",
    process: "The implant is placed in the jawbone, allowed to heal and integrate over a few months, and then a custom-made crown is attached to restore full function."
  },
  {
    id: "tooth-extraction",
    title: "Tooth Extraction",
    description: "Safe removal of teeth when clinically required.",
    icon: faBaby,
    details: "Sometimes a tooth needs to be removed due to severe decay, infection, or crowding (like wisdom teeth). We ensure the process is as comfortable as possible.",
    whenToConsider: "When a tooth is too damaged to be repaired, or to prepare for orthodontic treatment.",
    process: "The area is numbed, the tooth is carefully extracted, and we provide detailed aftercare instructions to promote quick healing."
  }
];
