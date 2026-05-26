// ─── VIDEO ASSET CONFIGURATION ───────────────────────────────────────────────
// Instrucciones de uso:
// 1. Coloca tus archivos .mp4 en la carpeta /public/assets/videos/
// 2. Usa los mismos nombres de archivo que se especifican abajo.
// 3. Los componentes Hero y Carousel cargarán los videos automáticamente.
//    Si el archivo no existe, se mostrará un placeholder animado.
// ─────────────────────────────────────────────────────────────────────────────

export const heroVideo = {
  src:    '/assets/videos/hero_principal.mp4',
  poster: '/assets/videos/hero_poster.jpg',
  title:  'Omar Benvenuto — Tu Profesor de Inglés',
};

export const testimonialVideos = [
  {
    id:     1,
    src:    '/assets/videos/testimonio_1.mp4',
    poster: '/assets/videos/poster_1.jpg',
    name:   'María García',
    result: 'Aprobó el DET con 120 pts',
    flag:   '🇦🇷',
  },
  {
    id:     2,
    src:    '/assets/videos/testimonio_2.mp4',
    poster: '/assets/videos/poster_2.jpg',
    name:   'Carlos López',
    result: 'Consiguió trabajo en empresa USA',
    flag:   '🇲🇽',
  },
  {
    id:     3,
    src:    '/assets/videos/testimonio_3.mp4',
    poster: '/assets/videos/poster_3.jpg',
    name:   'Ana Martínez',
    result: 'Viajó sola por Europa 3 meses',
    flag:   '🇨🇴',
  },
  {
    id:     4,
    src:    '/assets/videos/testimonio_4.mp4',
    poster: '/assets/videos/poster_4.jpg',
    name:   'Diego Fernández',
    result: 'Cerró contratos en inglés',
    flag:   '🇺🇾',
  },
];

export const WHATSAPP_NUMBER = '584245510485';
export const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola Omar! Vi tu landing page y quiero más información sobre tus cursos de inglés.'
);
export const INSTAGRAM_URL = 'https://www.instagram.com/omarbenvenuto_/';
export const YOUTUBE_URL   = 'https://youtube.com/@omarbenvenuto';
