export default function Navbar() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center text-white font-black text-xs sm:text-sm bg-gradient-to-br from-purple-500 to-purple-700 shadow-[0_0_12px_rgba(124,58,237,0.4)]">OB</div>
          <span className="font-bold text-sm sm:text-base text-white tracking-tight">Omar <span className="text-purple-400">Benvenuto</span></span>
        </button>
        <button onClick={() => scrollTo('#cursos')} className="animate-cta-bounce bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white font-bold px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm tracking-wide transition-all duration-200 shadow-[0_4px_20px_rgba(124,58,237,0.5)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.6)] hover:scale-105 active:scale-95 border border-purple-400/20 whitespace-nowrap ">Entrar Ahora</button>
      </div>
    </div>
  );
}
