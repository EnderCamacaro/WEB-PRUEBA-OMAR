import { INSTAGRAM_URL, YOUTUBE_URL } from '../config/videos';

function Svg({ size, children, viewBox = "0 0 24 24" }) {
  return <svg width={size} height={size} viewBox={viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const nav = (href) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden" style={{ background: 'linear-gradient(180deg, #0A0A0F 0%, #050812 40%, #020205 70%, #000 100%)' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-lg bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]">OB</div>
              <span className="font-bold text-lg text-white">Omar <span className="text-blue-400">Benvenuto</span></span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">Profesor de ingles online. Metodo inmersivo que transforma tu vida profesional y personal en 90 dias.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Navegacion</h4>
            <div className="flex flex-col gap-3">
              {[{ label: 'Metodologia', href: '#beneficios' }, { label: 'Cursos', href: '#cursos' }, { label: 'Testimonios', href: '#testimonios' }].map((l) => (
                <button key={l.href} onClick={() => nav(l.href)} className="text-sm font-medium text-slate-500 hover:text-blue-400 transition-colors text-left">{l.label}</button>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">Redes Sociales</h4>
            <div className="flex items-center gap-3">
              {[
                { icon: <Svg size={20}><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></Svg>, href: INSTAGRAM_URL, label: 'Instagram' },
                { icon: <Svg size={20}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" /><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></Svg>, href: YOUTUBE_URL, label: 'YouTube' },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-xl border border-blue-500/20 bg-slate-800/50 flex items-center justify-center text-slate-400 transition-all duration-300 hover:text-blue-400 hover:bg-blue-900/30 hover:scale-[1.15] hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] active:scale-[0.92]">
                  {s.icon}
                </a>
              ))}
            </div>

          </div>
        </div>
        <div className="h-px w-full mb-6" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)' }} />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-600">
          <p>&copy; {year} Omar Benvenuto. Todos los derechos reservados.</p>
          <p>Hecho con <span className="text-blue-500">&hearts;</span> para transformar vidas.</p>
        </div>
      </div>
    </footer>
  );
}
