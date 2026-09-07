import { clinic } from '../config/clinic';

export const generateWhatsAppLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${clinic.whatsapp}?text=${encodedMessage}`;
};

export const generateAppointmentMessage = (
  name: string,
  phone: string,
  date: string,
  time: string,
  treatment: string,
  message?: string
) => {
  let msg = `Hello Health Line Clinics, I would like to book an appointment.\n\n`;
  msg += `*Name:* ${name}\n`;
  msg += `*Phone:* ${phone}\n`;
  msg += `*Preferred Date:* ${date}\n`;
  msg += `*Preferred Time:* ${time}\n`;
  msg += `*Treatment:* ${treatment}\n`;
  
  if (message) {
    msg += `*Message:* ${message}\n`;
  }
  
  return msg;
};
