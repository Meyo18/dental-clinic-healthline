# Health Line Clinics

A premium, production-quality dental clinic website built with React, TypeScript, and Vite.

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Configuration & Content Updates

All clinic-specific data is centralized to ensure easy updates without modifying the UI components.

### 1. Update Clinic Info (Phone, WhatsApp, Maps)
Edit `src/config/clinic.ts`. 
- To update the WhatsApp number, change `whatsapp` (use the full number with country code, e.g., `919876543210`).
- To update Google Maps embed, change `googleMapsEmbedUrl` with the `src` URL from a Google Maps iframe.

### 2. Update Treatments
Edit `src/data/treatments.ts`. 
You can add, remove, or modify treatments. Icons are imported from `lucide-react`.

### 3. Update Doctors
Edit `src/data/doctors.ts`. 
Replace the placeholder data and `imageUrl` with genuine doctor profiles.

### 4. Update Care Plans
Edit `src/data/plans.ts`. 
Adjust the features or pricing notes for each care plan.

### 5. Update Patient Reviews
Edit `src/data/testimonials.ts`.
Replace placeholder testimonials with genuine patient reviews.

## Deployment

To deploy the static frontend, run:
```bash
npm run build
```
This will generate a `dist` folder which can be hosted on Vercel, Netlify, GitHub Pages, or any static hosting service.
