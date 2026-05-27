import { CheckIcon, StarIcon } from './icons';

const courses = [
  { title: 'Estructuras en Inglés', price: '$29/mes' },
  { title: 'Bases del Inglés', price: '$39/mes' },
  { title: 'Curso de IA + Inglés', price: '$49/mes' },
  { title: 'Certificación DET', price: '$59/mes' },
  { title: 'Inglés para Negocios', price: '$49/mes' },
  { title: 'Inglés para Viajes', price: '$39/mes' },
];

const totalValue = courses.reduce((acc, c) => {
  const num = parseInt(c.price.replace('$', ''));
  return acc + num;
}, 0);

const benefits = [
  'Acceso a los 6 cursos completos',
  'Actualizaciones gratuitas de por vida',
  'Comunidad privada de alumnos',
  'Material descargable + ejercicios',
  'Soporte directo con Omar',
];

export default function Pricing() {
  const scrollToCourses = () => {
    const el = document.querySelector('#cursos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #050505 0%, #0A0615 30%, #0D0820 60%, #050505 100%)' }}>
      <div className="absolute top-[-15%] right-[-10%] w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-purple-400 text-sm font-semibold uppercase tracking-widest">Inversión</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3">
            Todo lo que necesitas en{' '}
            <span className="gradient-text">un solo lugar</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">
            Accede al método completo sin límites ni contratos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-purple-500/20 bg-[rgba(255,255,255,0.02)] overflow-hidden">
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white text-[10px] font-black">
                      {['M','C','D'][i-1]}
                    </div>
                  ))}
                </div>
                <span className="text-gray-500 text-sm font-medium">
                  Únete a <span className="text-white font-bold">+1.200 estudiantes</span>
                </span>
              </div>

              <div className="mb-6 p-4 sm:p-5 rounded-xl border border-purple-500/10 bg-purple-500/[0.03]">
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest mb-3">Cursos incluidos</p>
                <div className="space-y-2">
                  {courses.map((c) => (
                    <div key={c.title} className="flex items-center justify-between py-1.5">
                      <div className="flex items-center gap-2.5">
                        <CheckIcon size={14} color="#8B5CF6" />
                        <span className="text-white text-sm font-medium">{c.title}</span>
                      </div>
                      <span className="text-gray-500 text-xs line-through">{c.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between py-4 border-y border-purple-500/10 mb-6">
                <span className="text-gray-400 text-sm font-medium">Valor total de los cursos</span>
                <span className="text-gray-400 text-lg line-through font-bold">${totalValue}/mes</span>
              </div>

              <div className="text-center mb-6">
                <span className="inline-block text-purple-400 text-xs font-bold uppercase tracking-widest mb-1">Oferta especial · 75% dcto</span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl sm:text-6xl font-black text-white">$47</span>
                  <span className="text-gray-400 text-lg font-medium">/mes</span>
                </div>
                <p className="text-gray-500 text-sm mt-2">Ahorras ${totalValue - 47}/mes vs. comprar por separado</p>
              </div>

              <button onClick={scrollToCourses} className="btn-primary w-full py-4 rounded-full text-lg font-bold tracking-wide">
                OBTENER ACCESO AHORA
              </button>

              <div className="flex items-center justify-center gap-4 mt-4 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  Pago seguro
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
                  Acceso inmediato
                </div>
                <div className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  Cancela cuando quieras
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-1 mt-6">
            {[1,2,3,4,5].map((i) => (
              <span key={i} className="text-amber-400">
                <StarIcon size={14} fill="currentColor" />
              </span>
            ))}
            <span className="text-gray-500 text-sm ml-2">
              <span className="text-white font-semibold">4.9</span> · +200 reseñas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
