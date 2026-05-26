import { motion } from 'framer-motion';
import { BookOpenIcon, BotIcon, AwardIcon, BriefcaseIcon, PlaneIcon, LightbulbIcon, Volume2Icon, LineChartIcon, MapPinIcon, GlobeIcon, StarIcon, ChevronRightIcon } from './icons';

function PriceRibbon({ price }) {
  return (
    <div className="absolute text-center font-bold text-base text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] pointer-events-none z-20"
      style={{
        top: '18px', left: '-35px', width: '150px', padding: '8px 0',
        transform: 'rotate(-45deg)',
        background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
        boxShadow: '0 2px 8px rgba(59,130,246,0.4)',
      }}>
      {price}
    </div>
  );
}

const GE = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-5 overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(30,58,138,0.4) 0%, rgba(15,23,42,0.8) 100%)', boxShadow: 'inset 0 0 20px rgba(59,130,246,0.2)' }}>
    <span className="text-white font-bold text-lg sm:text-xl mb-4 relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center leading-tight">Estructuras<br/>en Ingles</span>
    <div className="flex gap-3 relative z-10 items-center">
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 230 60" preserveAspectRatio="xMidYMid meet" style={{ zIndex: 0 }}>
        <path d="M 20 32 Q 51 10, 82 25 Q 113 45, 144 32 Q 175 10, 206 25" stroke="#3B82F6" strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round" />
      </svg>
      {['A','B','C','D'].map((l,i) => (
        <div key={l} className="relative z-10 w-10 h-12 bg-black/80 border border-slate-600 rounded-xl flex items-center justify-center text-base font-black text-white shadow-[0_5px_15px_rgba(0,0,0,0.5)]" style={{ transform: `translateY(${i%2===0?'5px':'-5px'})` }}>{l}</div>
      ))}
    </div>
    <div className="absolute bottom-[-20px] w-3/4 h-[40px] bg-purple-500/30 blur-[20px] rounded-full"></div>
  </div>
);

const GB = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-5 overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.95) 100%)' }}>
    <div className="flex items-center gap-2 mb-5 relative z-10">
      <StarIcon size={18} color="#60A5FA" />
      <span className="text-white font-black text-xl sm:text-2xl drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">Bases del Ingles</span>
    </div>
    <div className="flex gap-3 sm:gap-4 relative z-10">
      <div className="w-14 h-16 sm:w-16 sm:h-18 bg-[#1e293b]/80 border border-blue-500/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]"><BookOpenIcon size={30} /></div>
      <div className="w-14 h-16 sm:w-16 sm:h-18 bg-[#1e293b]/80 border border-cyan-400/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)]"><LightbulbIcon size={30} /></div>
      <div className="w-14 h-16 sm:w-16 sm:h-18 bg-[#1e293b]/80 border border-blue-400/50 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.3)]"><Volume2Icon size={30} /></div>
    </div>
    <div className="absolute bottom-[-20px] w-full h-[40px] bg-cyan-400/20 blur-[20px] rounded-full"></div>
  </div>
);

const GIA = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-5 overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(30,58,138,0.5) 0%, rgba(15,23,42,0.9) 100%)' }}>
    <div className="flex items-center justify-center gap-4 relative z-10 w-full px-2">
      <BotIcon size={40} />
      <div className="flex flex-col items-center">
        <span className="text-2xl sm:text-3xl font-black text-white italic tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-none">Curso</span>
        <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-none">IA</span>
      </div>
      <StarIcon size={22} color="#C084FC" />
    </div>
    <div className="absolute bottom-0 right-0 w-[120px] h-[120px] bg-purple-500/30 blur-[40px] rounded-full"></div>
  </div>
);

const GDET = () => (
  <div className="relative w-full h-full flex items-center justify-center p-5 overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(30,20,50,0.8) 0%, rgba(15,23,42,0.95) 100%)' }}>
    <div className="absolute top-3 left-3 z-10">
      <svg width="38" height="38" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="11" fill="#58CC02" />
        <circle cx="8" cy="10" r="3" fill="white" />
        <circle cx="16" cy="10" r="3" fill="white" />
        <circle cx="8" cy="10" r="1.4" fill="#1a1a2e" />
        <circle cx="16" cy="10" r="1.4" fill="#1a1a2e" />
        <path d="M9 15 Q12 18, 15 15" stroke="#1a1a2e" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </svg>
    </div>
    <div className="flex flex-col items-center justify-center relative z-10 mt-2">
      <span className="text-white font-black text-lg sm:text-xl leading-none drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-center">Certificacion</span>
      <span className="text-yellow-400 font-black text-3xl sm:text-4xl drop-shadow-[0_0_15px_rgba(250,204,21,0.6)] tracking-wider">DET</span>
    </div>
    <div className="absolute bottom-4 right-4 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"><AwardIcon size={30} /></div>
    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-[120%] h-[35px] rounded-[100%] bg-pink-500/40 blur-[15px]"></div>
  </div>
);

const GN = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-5 overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(15,23,42,0.6) 0%, rgba(15,23,42,0.95) 100%)' }}>
    <div className="flex items-center justify-center gap-3 sm:gap-5 relative z-10 w-full px-2">
      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black/60 border border-slate-700 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.4)]">
        <LineChartIcon size={34} />
      </div>
      <div className="flex flex-col text-center">
        <span className="text-white font-bold text-lg sm:text-xl leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Ingles para</span>
        <span className="text-white font-black text-2xl sm:text-3xl leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">negocios</span>
      </div>
      <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.6)] flex-shrink-0"><BriefcaseIcon size={40} /></span>
    </div>
    <div className="absolute bottom-0 right-0 w-[150px] h-[50px] bg-blue-500/25 blur-[25px] rotate-[-20deg]"></div>
    <div className="absolute bottom-0 left-0 w-[100px] h-[40px] bg-purple-500/20 blur-[20px] rotate-[20deg]"></div>
  </div>
);

const GV = () => (
  <div className="relative w-full h-full flex flex-col items-center justify-center p-5 overflow-hidden rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(20,10,40,0.8) 0%, rgba(15,23,42,0.95) 100%)' }}>
    <div className="flex items-center relative z-10 w-full justify-center mt-2 px-2">
      <span className="text-white absolute left-2 sm:left-6 top-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] rotate-[15deg]"><PlaneIcon size={28} /></span>
      <div className="w-2/3 h-[2px] border-t-2 border-dashed border-white/40 absolute top-5"></div>
      <div className="flex flex-col items-center z-10 mt-6">
        <span className="text-white font-bold text-sm sm:text-base tracking-wider">Ingles para</span>
        <span className="text-white font-black text-2xl sm:text-3xl tracking-[0.2em] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">VIAJES</span>
      </div>
      <span className="text-white absolute right-2 sm:right-6 top-0 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"><MapPinIcon size={28} /></span>
    </div>
    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] opacity-40">
      <GlobeIcon size={100} />
    </div>
    <div className="absolute top-[-20px] w-full h-[30px] bg-purple-500/20 blur-[15px] rounded-full"></div>
  </div>
);

const courses = [
  { id: 'estructuras', title: 'Estructuras en ingles', Graphic: GE, color: '#3B82F6', price: '$29/mes', desc: 'Aprende a construir oraciones correctamente paso a paso, desde lo mas basico hasta estructuras complejas.', topics: ['Gramatica esencial', 'Tiempos verbales', 'Formacion de oraciones', 'Ejercicios interactivos'] },
  { id: 'bases', title: 'Bases del ingles', Graphic: GB, color: '#60A5FA', price: '$39/mes', desc: 'Domina las bases solidas del idioma con pronunciacion americana y vocabulario esencial.', topics: ['Pronunciacion americana', 'Top 500 palabras', 'Conversacion basica fluida'] },
  { id: 'ia', title: 'Curso de IA', Graphic: GIA, color: '#93C5FD', price: '$49/mes', desc: 'Aprende ingles aprovechando herramientas de Inteligencia Artificial para acelerar tu aprendizaje.', topics: ['Prompts en ingles profesional', 'Vocabulario tech & AI', 'Escritura con IA'] },
  { id: 'det', title: 'Certificacion DET', Graphic: GDET, color: '#34D399', price: '$59/mes', desc: 'Curso intensivo para aprobar el Duolingo English Test con simulacros y estrategias reales.', topics: ['Simulacros de examen reales', 'Estrategias de cada seccion', 'Garantia de mejora'] },
  { id: 'negocios', title: 'Ingles para negocios', Graphic: GN, color: '#F59E0B', price: '$49/mes', desc: 'Ingles para cerrar tratos, liderar reuniones y escalar en tu carrera profesional.', topics: ['Negociacion en ingles', 'Email & writing profesional', 'Vocabulario financiero'] },
  { id: 'viajes', title: 'Ingles para viajes', Graphic: GV, color: '#A78BFA', price: '$39/mes', desc: 'Viaja sin miedo. Aprende todo lo que necesitas para moverte por el mundo con confianza.', topics: ['Aeropuerto & migraciones', 'Hoteles & restaurantes', 'Emergencias & transporte'] },
];

function CourseCard({ course, index }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col group w-full max-w-[320px] mx-auto">
      <div className="relative w-full h-[210px] rounded-2xl p-[1px] overflow-hidden cursor-pointer"
        style={{ background: `linear-gradient(135deg, ${course.color}50 0%, rgba(15,23,42,0) 100%)`, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
        <div className="absolute inset-0">
          <PriceRibbon price={course.price} />
          <course.Graphic />
        </div>
        <div className="hidden sm:flex absolute inset-0 z-30 flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
          style={{ background: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>
          <p className="text-white/80 text-xs leading-[1.4] text-center mb-2.5">{course.desc}</p>
          <div className="flex flex-wrap justify-center gap-1.5">{course.topics.map((t, i) => (
            <span key={i} className="text-[10px] font-medium text-slate-400 bg-slate-800/70 px-2 py-1 rounded-full border border-slate-700">{t}</span>
          ))}</div>
          <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-transform">
            <ChevronRightIcon size={20} />
          </button>
        </div>
      </div>
      <div className="block sm:hidden mt-3 text-center max-w-[320px] mx-auto space-y-2">
        <p className="text-white/80 text-xs leading-[1.4]">{course.desc}</p>
        <div className="flex flex-wrap justify-center gap-1.5">{course.topics.map((t, i) => (
          <span key={i} className="text-[10px] font-medium text-slate-400 bg-slate-800/70 px-2 py-1 rounded-full border border-slate-700">{t}</span>
        ))}</div>
        <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-bold tracking-wider uppercase px-5 py-3 rounded-xl shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-transform">
          Inscribirme
        </button>
      </div>
      <div className="mt-4 text-center max-w-[320px] mx-auto">
        <h3 className="text-white font-bold text-xl sm:text-2xl leading-tight">{course.title}</h3>
      </div>
    </motion.div>
  );
}

export default function Courses() {
  return (
    <section id="cursos" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A0A0F 0%, #0D0820 30%, #050810 60%, #0A0F1A 100%)' }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)', filter: 'blur(70px)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(147,197,253,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-blue-400 text-sm font-bold uppercase tracking-widest">Catalogo de Modalidades</span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-3">Elige tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Camino</span></h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">Selecciona la modalidad de aprendizaje que mejor se adapte a tus objetivos.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[80px]">
          {courses.map((c, i) => <CourseCard key={c.id} course={c} index={i} />)}
        </div>
      </div>
    </section>
  );
}
