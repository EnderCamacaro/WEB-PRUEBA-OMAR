import { useState, useEffect } from 'react';

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToCourses = () => {
    const el = document.querySelector('#cursos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="glass-strong border-t border-purple-500/20 px-4 py-3">
        <div className="max-w-lg mx-auto">
          <button
            onClick={scrollToCourses}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white font-bold text-base py-3.5 rounded-full transition-all duration-200 shadow-[0_4px_20px_rgba(124,58,237,0.5)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.6)] active:scale-[0.98]"
          >
            Obtener Acceso
          </button>
        </div>
      </div>
    </div>
  );
}
