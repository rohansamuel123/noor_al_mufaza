import { WHATSAPP_NUMBER } from '../data/constants';

export const useWhatsApp = () => {
  const handleBookService = (serviceName) => {
    const message = `Hi Noor Al Mufaza! I'm interested in booking your ${serviceName} service. Could you please provide me with more details and a quote? Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsAppContact = () => {
    const message = `Hi Noor Al Mufaza! I would like to inquire about your services. Please contact me. Thank you!`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return {
    handleBookService,
    handleWhatsAppContact
  };
};
