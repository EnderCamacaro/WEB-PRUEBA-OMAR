import imgEstructuras from '../assets/images/courses/curso-estructuras.webp';
import imgBases from '../assets/images/courses/bases-del-ingles.webp';
import imgIa from '../assets/images/courses/curso-ia.webp';
import imgDet from '../assets/images/courses/curso-det.webp';
import imgNegocios from '../assets/images/courses/ingles-para-negocios.webp';
import imgViajes from '../assets/images/courses/ingles-para-viajes.webp';

const courses = [
  { id: 'estructuras', title: 'Estructuras en Inglés', image: imgEstructuras, price: '$29/mes', desc: 'Aprende a construir oraciones correctamente paso a paso, desde lo más básico hasta estructuras complejas.', topics: ['Gramática esencial', 'Tiempos verbales', 'Formación de oraciones', 'Ejercicios interactivos'] },
  { id: 'bases', title: 'Bases del Inglés', image: imgBases, price: '$39/mes', desc: 'Domina las bases sólidas del idioma con pronunciación americana y vocabulario esencial.', topics: ['Pronunciación americana', 'Top 500 palabras', 'Conversación básica fluida'] },
  { id: 'ia', title: 'Curso de IA + Inglés', image: imgIa, price: '$49/mes', desc: 'Aprende inglés aprovechando herramientas de Inteligencia Artificial para acelerar tu aprendizaje.', topics: ['Prompts en inglés profesional', 'Vocabulario tech & AI', 'Escritura con IA'] },
  { id: 'det', title: 'Certificación DET', image: imgDet, price: '$59/mes', desc: 'Curso intensivo para aprobar el Duolingo English Test con simulacros y estrategias reales.', topics: ['Simulacros de examen', 'Estrategias por sección', 'Garantía de mejora'] },
  { id: 'negocios', title: 'Inglés para Negocios', image: imgNegocios, price: '$49/mes', desc: 'Inglés para cerrar tratos, liderar reuniones y escalar en tu carrera profesional.', topics: ['Negociación en inglés', 'Email & writing profesional', 'Vocabulario financiero'] },
  { id: 'viajes', title: 'Inglés para Viajes', image: imgViajes, price: '$39/mes', desc: 'Viaja sin miedo. Aprende todo lo que necesitas para moverte por el mundo con confianza.', topics: ['Aeropuerto & migraciones', 'Hoteles & restaurantes', 'Emergencias & transporte'] },
];

function CourseCard({ course }) {
  return (
    <div className="flex flex-col w-full max-w-[350px] mx-auto rounded-2xl border border-purple-500/15 bg-[rgba(255,255,255,0.02)] overflow-hidden hover:border-purple-500/30 transition-all duration-300">
      <div className="relative h-[200px] overflow-hidden">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute top-3 right-3 bg-purple-600/90 text-white text-xs font-bold px-3 py-1 rounded-full">
          {course.price}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2">{course.title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">{course.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.topics.map((t, i) => (
            <span key={i} className="text-xs text-gray-500 bg-white/[0.04] px-2.5 py-1 rounded-full border border-white/[0.06]">{t}</span>
          ))}
        </div>
        <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white text-sm font-bold py-3 rounded-full transition-all duration-200 shadow-[0_4px_15px_rgba(124,58,237,0.4)] hover:shadow-[0_6px_25px_rgba(124,58,237,0.5)] active:scale-[0.97]">
          Inscribirme
        </button>
      </div>
    </div>
  );
}

export default function Courses() {
  return (
    <section id="cursos" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(160deg, #050505 0%, #080510 30%, #050810 60%, #050505 100%)' }}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)', filter: 'blur(70px)' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-purple-400 text-sm font-bold uppercase tracking-widest">Catálogo de Cursos</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3">Elige tu <span className="gradient-text">Camino</span></h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-base">Selecciona el curso que mejor se adapte a tus objetivos.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c) => <CourseCard key={c.id} course={c} />)}
        </div>
      </div>
    </section>
  );
}
