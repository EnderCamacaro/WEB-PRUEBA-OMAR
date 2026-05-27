import { INSTAGRAM_URL, WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../config/videos';
import { WhatsAppIcon } from './icons';

export default function Footer() {
  const year = new Date().getFullYear();
  const nav = (href) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <footer className="relative pt-10 sm:pt-20 pb-24 sm:pb-10 overflow-hidden" style={{ background: 'linear-gradient(180deg, #050505 0%, #030308 40%, #020205 70%, #000 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.5), transparent)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm bg-gradient-to-br from-purple-500 to-purple-700 shadow-[0_0_10px_rgba(124,58,237,0.4)]">OB</div>
            <span className="font-bold text-base text-white">Omar <span className="text-purple-400">Benvenuto</span></span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => nav('#testimonios')} className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Testimonios</button>
            <button onClick={() => nav('#cursos')} className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Cursos</button>
            <button onClick={() => nav('#beneficios')} className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Metodología</button>
          </div>
          <div className="flex items-center gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
              className="w-9 h-9 rounded-lg border border-purple-500/20 bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
              className="w-9 h-9 rounded-lg border border-purple-500/20 bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/40 transition-all">
              <WhatsAppIcon size={16} />
            </a>
          </div>
        </div>
        <div className="h-px w-full mb-4" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-medium text-gray-600">
          <p>&copy; {year} Omar Benvenuto. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
