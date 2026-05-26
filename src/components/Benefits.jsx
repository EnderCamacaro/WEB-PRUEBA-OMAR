import { motion } from 'framer-motion';

function NeonIcon({ children, delay }) {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
      style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(29,78,216,0.1))', border: '1px solid rgba(59,130,246,0.35)',
        boxShadow: '0 0 20px rgba(59,130,246,0.25), inset 0 1px 0 rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.3)' }}>
      {children}
    </motion.div>
  );
}

function SvgIcon({ id, c1, c2 }) {
  const gid = `bg-${id}`;
  const paths = [
    <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></>,
    <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
    <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    <><rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
    <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>,
  ];
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={`url(#${gid})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <defs><linearGradient id={gid} x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor={c1} /><stop offset="100%" stopColor={c2} /></linearGradient></defs>
      {paths[id]}
    </svg>
  );
}

const items = [
  { title: 'Método Inmersivo', c1: '#60A5FA', c2: '#93C5FD', desc: 'Nada de gramática aburrida. Aprendes hablando desde el minuto uno, como un niño aprende su idioma.' },
  { title: 'Resultados en 90 Días', c1: '#60A5FA', c2: '#BFDBFE', desc: 'Programa intensivo y estructurado. Sin relleno. Ves progreso real desde la primera semana.' },
  { title: 'Clases Personalizadas', c1: '#93C5FD', c2: '#3B82F6', desc: 'Cada alumno es único. Tu plan se adapta a tu nivel, horario y objetivo profesional.' },
  { title: '100% Online', c1: '#60A5FA', c2: '#2563EB', desc: 'Desde cualquier lugar del mundo. Solo necesitas WiFi y ganas. Todo el material en tu plataforma.' },
  { title: 'Profesor Certificado', c1: '#FCD34D', c2: '#F59E0B', desc: 'Omar tiene más de 1.200 alumnos y una calificación de 4.9 ★. Tu profesor sabe lo que hace.' },
  { title: 'Preparación DET', c1: '#93C5FD', c2: '#60A5FA', desc: 'Especialista en Duolingo English Test. 92% de aprobación. Simulacros reales incluidos.' },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A0A0F 0%, #0D0820 30%, #0A0A1A 60%, #080812 100%)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(50px)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Metodología</span>
          <h2 className="section-title text-white mt-3">¿Por qué aprender con <span className="gradient-text">Omar</span>?</h2>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">Un método diseñado para personas reales con objetivos reales.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }} className="card p-7 flex flex-col">
              <NeonIcon delay={i * 0.08}><SvgIcon id={i} c1={b.c1} c2={b.c2} /></NeonIcon>
              <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
