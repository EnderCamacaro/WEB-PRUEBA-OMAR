import { MessageCircleIcon } from './icons';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config/videos';

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-24 sm:bottom-6 right-6 z-50 group"
      style={{ animation: 'scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94) 1.5s both' }}
      aria-label="WhatsApp">
      <span className="absolute inset-0 rounded-full" style={{ background: 'rgba(34,197,94,0.25)', animation: 'pulse-ring 2s ease-out infinite' }} />
      <div className="relative w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-90"
        style={{ background: 'linear-gradient(135deg, #22C55E, #16A34A)', boxShadow: '0 0 20px rgba(34,197,94,0.4), 0 4px 20px rgba(0,0,0,0.3)', border: '2px solid rgba(255,255,255,0.15)' }}>
        <MessageCircleIcon size={24} />
      </div>
    </a>
  );
}
