import { useState, useRef } from 'react';
import { heroVideo } from '../config/videos';
import { PlayIcon, PauseIcon } from './icons';

const stats = [
  { v: '+1.200', l: 'Estudiantes' },
  { v: '4.9★', l: 'Calificación' },
  { v: '92%', l: 'Aprobación DET' },
];

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

  const renderVideo = () => (
    <div className="relative rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_40px_rgba(124,58,237,0.15)] group">
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
  );

  return (
    <section id="inicio" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16 lg:pt-8" style={{ background: 'linear-gradient(160deg, #050505 0%, #080510 20%, #0D0820 50%, #080510 80%, #050505 100%)' }}>
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 lg:gap-7">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 text-xs lg:text-sm font-medium text-purple-300 glass">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500" />
            </span>
            Clases online · Método probado · Resultados reales
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight text-white max-w-4xl">
            Habla Inglés con{' '}
            <span className="gradient-text">Confianza Real</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-lg lg:max-w-xl font-light">
            Clases online para latinos que quieren resultados reales.
          </p>

          <div className="w-full max-w-2xl lg:max-w-4xl">
            {renderVideo()}
          </div>

          <button onClick={scrollToCourses} className="btn-primary px-10 py-3.5 rounded-full text-base lg:text-lg font-bold tracking-wide w-fit">
            ENTRAR AHORA
          </button>

          <div className="grid grid-cols-3 gap-6 lg:gap-12 max-w-xs lg:max-w-sm mt-1">
            {stats.map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl lg:text-3xl font-black gradient-text">{s.v}</span>
                <span className="text-xs lg:text-sm text-gray-500 mt-0.5">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
