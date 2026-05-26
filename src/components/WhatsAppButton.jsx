import { MessageCircleIcon } from './icons';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config/videos';

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <a href={url} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      style={{ animation: 'scaleIn 0.5s cubic-bezier(0.25,0.46,0.45,0.94) 1.5s both' }}
      aria-label="WhatsApp">
      <span className="absolute inset-0 rounded-full" style={{ background: 'rgba(34,197,94,0.25)', animation: 'pulse-ring 2s ease-out infinite' }} />
      <span className="absolute inset-0 rounded-full" style={{ background: 'rgba(34,197,94,0.15)', animation: 'pulse-ring 2s ease-out 0.5s infinite' }} />
      <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-[1.12] active:scale-[0.92]"
        style={{ background: 'linear-gradient(135deg, #22C55E, #16A34A)', boxShadow: '0 0 20px rgba(34,197,94,0.5), 0 0 40px rgba(34,197,94,0.2), 0 4px 20px rgba(0,0,0,0.3)', border: '2px solid rgba(255,255,255,0.15)', animation: 'pulse-glow 2s ease-in-out infinite' }}>
        <MessageCircleIcon size={28} />
      </div>
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded-xl text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none glass-strong neon-border" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
Chatea con Omar
      </div>
      <style>{`@keyframes scaleIn{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}`}</style>
    </a>
  );
}
