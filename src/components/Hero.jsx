import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
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
    <section id="inicio" className="relative min-h-[100dvh] flex items-center overflow-hidden pt-16 lg:pt-0" style={{ background: 'linear-gradient(160deg, #050505 0%, #080510 20%, #0D0820 50%, #080510 80%, #050505 100%)' }}>
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(50px)' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">
          {/* Left column: Title + Subtitle + CTA (desktop) */}
          <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.15 } } }} className="flex flex-col gap-3 lg:gap-5">
            <motion.h1 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }} className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
              Habla Inglés con{' '}
              <span className="gradient-text">Confianza Real</span>
            </motion.h1>
            <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="text-base sm:text-lg text-gray-400 max-w-md font-light">
              Clases online para latinos que quieren resultados reales.
            </motion.p>
            <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }} className="hidden lg:block">
              <button onClick={scrollToCourses} className="btn-primary px-10 py-3.5 rounded-full text-base sm:text-lg font-bold tracking-wide animate-cta-bounce w-fit">
                ENTRAR AHORA
              </button>
            </motion.div>
          </motion.div>

          {/* Right column: Video */}
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative">
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
          </motion.div>

          {/* Mobile CTA (below video) */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="lg:hidden">
            <button onClick={scrollToCourses} className="btn-primary w-full py-3.5 rounded-full text-base font-bold tracking-wide animate-cta-bounce">
              ENTRAR AHORA
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
