const items = [
  { title: 'Método Inmersivo', desc: 'Nada de gramática aburrida. Aprendes hablando desde el minuto uno, como un niño aprende su idioma.' },
  { title: 'Resultados en 90 Días', desc: 'Programa intensivo y estructurado. Sin relleno. Ves progreso real desde la primera semana.' },
  { title: 'Clases Personalizadas', desc: 'Cada alumno es único. Tu plan se adapta a tu nivel, horario y objetivo profesional.' },
  { title: '100% Online', desc: 'Desde cualquier lugar del mundo. Solo necesitas WiFi y ganas. Todo el material en tu plataforma.' },
  { title: 'Profesor Certificado', desc: 'Omar tiene más de 1.200 alumnos y una calificación de 4.9 ★. Tu profesor sabe lo que hace.' },
  { title: 'Preparación DET', desc: 'Especialista en Duolingo English Test. 92% de aprobación. Simulacros reales incluidos.' },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #050505 0%, #0D0820 30%, #0A0A1A 60%, #080812 100%)' }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Metodología</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3">¿Por qué aprender con <span className="gradient-text">Omar</span>?</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">Un método diseñado para personas reales con objetivos reales.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((b) => (
            <div key={b.title} className="card p-7 flex flex-col border border-purple-500/10 hover:border-purple-500/30">
              <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
