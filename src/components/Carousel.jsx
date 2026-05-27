import { useRef, useState, useEffect, useCallback } from 'react';
import { PlayIcon } from './icons';
import { testimonialVideos } from '../config/videos';

const CARD_W = 260;
const GAP = 16;
const STEP = CARD_W + GAP;

function TestimonialCard({ video, showVideo }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  const play = useCallback(() => {
    if (!videoRef.current) return;
    setPlaying(true);
    videoRef.current.play().catch(() => {});
  }, []);

  const stop = useCallback(() => {
    if (!videoRef.current) return;
    setPlaying(false);
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }, []);

  useEffect(() => {
    if (!showVideo && playing) stop();
  }, [showVideo, playing, stop]);

  useEffect(() => {
    if (!showVideo) setReady(false);
  }, [showVideo]);

  return (
    <div
      className="flex-shrink-0 rounded-2xl overflow-hidden border border-purple-500/20 cursor-pointer"
      style={{
        width: CARD_W + 'px',
        aspectRatio: '9/16',
        maxHeight: '500px',
        background: '#0A0A0A',
        scrollSnapAlign: 'start',
        contain: 'layout style paint',
      }}
      onClick={play}
    >
      <div className="relative w-full h-full">
        {showVideo && (
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            onCanPlay={() => setReady(true)}
            onLoadedData={() => setReady(true)}
            onError={() => setReady(false)}
            onEnded={stop}
            playsInline
            preload="auto"
            className={`absolute inset-0 w-full h-full object-cover ${ready ? 'block' : 'hidden'}`}
          />
        )}
        <img
          src={video.poster}
          alt={video.name}
          className={`absolute inset-0 w-full h-full object-cover ${showVideo && ready ? 'hidden' : 'block'}`}
          loading="lazy"
        />
        {!playing && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3" style={{ background: 'linear-gradient(135deg, #0A0A0A, #0D0820)' }}>
            <div className="w-14 h-14 rounded-full flex items-center justify-center backdrop-blur-xl bg-black/50 border border-white/20 transition-transform hover:scale-110">
              <PlayIcon size={24} fillColor="white" strokeColor="white" />
            </div>
            {!showVideo && <p className="text-gray-500 text-xs font-medium">{video.name}</p>}
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-20" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.9))' }}>
          <div className="flex items-center gap-2">
            <span className="text-lg">{video.flag}</span>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-semibold leading-tight truncate">{video.name}</p>
              <p className="text-purple-300 text-xs mt-0.5 leading-tight truncate">{video.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Carousel() {
  const scrollRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const idx = Math.round(el.scrollLeft / STEP);
      setActiveIdx(Math.max(0, Math.min(idx, testimonialVideos.length - 1)));
    };
    el.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="testimonios" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #050505 0%, #080510 25%, #0A0812 55%, #08080F 80%, #050505 100%)' }}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Testimonios Reales</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3">Lo que dicen <span className="gradient-text">mis alumnos</span></h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">Resultados reales de estudiantes que transformaron su vida con el inglés.</p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {testimonialVideos.map((video, i) => (
            <TestimonialCard key={video.id} video={video} showVideo={Math.abs(activeIdx - i) <= 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
