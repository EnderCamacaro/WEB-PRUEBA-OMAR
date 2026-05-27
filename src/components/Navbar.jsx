import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './icons';

const links = [
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Cursos', href: '#cursos' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm bg-gradient-to-br from-purple-500 to-purple-700 shadow-[0_0_15px_rgba(124,58,237,0.5)]">OB</div>
              <span className="font-bold text-sm sm:text-base text-white tracking-tight whitespace-nowrap">Omar <span className="text-purple-400">Benvenuto</span></span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <button key={l.href} onClick={() => nav(l.href)}
                  className="px-4 py-2 rounded-lg text-sm font-semibold text-gray-400 hover:text-white hover:bg-white/[0.05] transition-all duration-200">
                  {l.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              <button onClick={() => nav('#cursos')} className="hidden md:inline-flex bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white font-bold px-6 py-2.5 rounded-full text-sm tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(124,58,237,0.5)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 border border-purple-400/20">Entrar Ahora</button>
              <button className="md:hidden p-2 rounded-xl bg-gray-800/80 text-purple-400 active:scale-90 transition-transform" onClick={() => setOpen(!open)}>
                {open ? <XIcon size={22} /> : <MenuIcon size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed top-[60px] left-0 right-0 z-40 bg-[#050505]/90 backdrop-blur-xl border-b border-purple-900/20 p-5 flex flex-col gap-3 shadow-2xl transition-all duration-200 ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        {links.map((l) => (
          <button key={l.href} onClick={() => nav(l.href)}
            className="text-left text-base font-bold py-3 px-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/[0.03] transition-all">{l.label}</button>
        ))}
        <button onClick={() => nav('#cursos')} className="bg-gradient-to-br from-purple-500 to-purple-600 text-white font-bold py-4 rounded-full text-base mt-2 shadow-[0_4px_20px_rgba(124,58,237,0.5)] border border-purple-400/20">Entrar Ahora</button>
      </div>
    </>
  );
}
