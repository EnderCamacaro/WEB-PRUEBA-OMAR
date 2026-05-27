import { useState, useRef } from 'react';
import { heroVideo } from '../config/videos';
import { PlayIcon, PauseIcon } from './icons';

export default function Hero() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current || !ready) return;
    if (playing) { videoRef.current.pause(); setPlaying(false); }
    else { videoRef.current.play(); setPlaying(true); }
  };

  const scrollToCourses = () => {
    const el = document.querySelector('#cursos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-24 sm:pt-32 pb-16 sm:pb-20" style={{ background: 'linear-gradient(160deg, #050505 0%, #080510 20%, #0D0820 50%, #080510 80%, #050505 100%)' }}>
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 text-xs sm:text-sm font-medium text-purple-300 glass mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
          </span>
          Clases online · Método probado · Resultados reales
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[0.95] tracking-tight text-white max-w-4xl mx-auto">
          Habla inglés con{' '}
          <span className="gradient-text">confianza real</span>
          <br />
          <span className="text-gray-300">sin métodos aburridos</span>
        </h1>

        <p className="text-gray-400 text-base sm:text-lg md:text-xl mt-6 max-w-xl mx-auto font-light">
          Olvida las reglas. Habla desde el día uno y transforma tu vida profesional y personal.
        </p>

        <div className="mt-10 w-full max-w-2xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_30px_rgba(124,58,237,0.15)] group">
            <video
              ref={videoRef}
              src={heroVideo.src}
              poster={heroVideo.poster}
              onCanPlay={() => setReady(true)}
              onLoadedData={() => setReady(true)}
              onError={() => setReady(false)}
              onEnded={() => setPlaying(false)}
              playsInline
              preload="metadata"
              className={`w-full aspect-video object-cover ${ready ? 'block' : 'hidden'}`}
            />
            {!ready && (
              <div className="w-full aspect-video flex flex-col items-center justify-center gap-3" style={{ background: 'linear-gradient(135deg, #0A0A0A, #0D0820)' }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center border-2 border-purple-500/40 bg-purple-500/10">
                  <PlayIcon size={28} fillColor="#8B5CF6" strokeColor="#8B5CF6" />
                </div>
                <p className="text-gray-500 text-sm">Video de presentación</p>
              </div>
            )}
            {ready && (
              <button onClick={toggleVideo} className="absolute inset-0 z-10 flex items-center justify-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-xl bg-black/40 border border-white/20 transition-all duration-300 group-hover:scale-110 ${playing ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                  {playing ? <PauseIcon size={24} /> : <PlayIcon size={28} fillColor="white" strokeColor="white" />}
                </div>
              </button>
            )}
          </div>
        </div>

        <button onClick={scrollToCourses} className="btn-primary mt-8 px-12 py-4 rounded-full text-lg sm:text-xl font-bold tracking-wide">
          ENTRAR AHORA
        </button>

        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 max-w-md mx-auto">
          {[{ v: '+1.200', l: 'Estudiantes' }, { v: '4.9★', l: 'Calificación' }, { v: '92%', l: 'Aprobación DET' }].map((s) => (
            <div key={s.l} className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-black gradient-text">{s.v}</span>
              <span className="text-xs sm:text-sm text-gray-500 mt-1">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
