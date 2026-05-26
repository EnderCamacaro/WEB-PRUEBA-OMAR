# Documentación de Proyecto: Landing Page "Omar Benvenuto"

## 1. Visión General del Proyecto
Este proyecto es una **Landing Page de alta conversión** diseñada para "Omar Benvenuto", un profesor de inglés. El objetivo principal es vender tutorías y cursos de inglés, reflejando una identidad moderna, dinámica y profesional (basada en el tráfico proveniente de Instagram y TikTok). 

El diseño se rige estrictamente por la filosofía **"Deep UI"** (cero "Flat Design"):
* **Dark Mode Nativo:** Fondos muy oscuros (`#0A0A0F`, `#0D0D1A`).
* **Glassmorphism:** Uso intensivo de fondos semitransparentes con `backdrop-blur`.
* **Iluminación Neón:** Sombras y bordes brillantes con acentos morados (`#8B5CF6`).
* **Volumen 3D:** Tarjetas y botones con efectos de elevación al interactuar.
* **Prohibición estricta:** No existe (ni debe existir) una sección de FAQ.

## 2. Stack Tecnológico
* **Framework:** React.js montado sobre Vite (`create-vite`).
* **Estilos:** Tailwind CSS (versión v4 usando `@tailwindcss/vite`) + CSS Nativo Avanzado.
* **Animaciones:** Framer Motion (para transiciones, staggering y scroll-reveal) y animaciones CSS puras (pulso, marquee, partículas flotantes).
* **Íconos:** `lucide-react` (para la interfaz) e íconos SVG personalizados diseñados a mano (usados en Beneficios y en el Footer para evitar problemas de compatibilidad de módulos).

## 3. Lógica de Assets Dinámicos (Videos)
La plataforma está diseñada para cargar videos `.mp4` sin codificarlos en el HTML (*hardcoding*).
* **Directorio de destino:** `public/assets/videos/`.
* **Configuración:** Todo se centraliza en `src/config/videos.js`.
* **Comportamiento:** Si los videos no existen en el directorio, la UI renderiza de forma elegante un *placeholder animado* con un ícono de reproducción y un mensaje indicando qué archivo falta.

## 4. Estructura de Archivos y Componentes

### 📂 `src/config/`
* **`videos.js`**: Archivo vital. Contiene las variables de entorno de la app (rutas de videos de Hero y Carrusel, Número de WhatsApp, Email y URLs de redes sociales).

### 📂 `src/components/` (Renderizados en este orden en `App.jsx`)
1. **`Navbar.jsx`**: Barra de navegación *sticky*. Transparente arriba, pasa a modo *glassmorphism* con blur y borde al hacer scroll. Menú móvil tipo drawer.
2. **`Hero.jsx`**: Sección principal de retención (primeros 3 segundos). Título con texto en gradiente, botón CTA principal, reproductor de video de presentación (volumétrico con bordes iluminados) y estadísticas. Partículas flotantes de fondo.
3. **`Carousel.jsx`**: Carrusel tipo "Reels/TikTok" para testimonios de clientes satisfechos. Tarjetas verticales (`aspect-ratio: 9/16`). Soporta *swipe* táctil en móvil.
4. **`Benefits.jsx`**: Grilla de "Por qué aprender con Omar". Utiliza íconos SVG 3D/Neón inyectados directamente en código en lugar de íconos planos genéricos.
5. **`Courses.jsx`**: Catálogo de cursos. Interacción central: tarjetas colapsadas que, al hacer *hover* (PC) o *tap* (Mobile), se expanden fluidamente (`AnimatePresence` de Framer Motion) para revelar el temario completo sin cambiar de página.
6. **`Pricing.jsx`**: Tarjetas de precios. El plan recomendado (`Pro`) tiene una tarjeta de diseño distinguido con bordes y brillos morados intensos.
7. **`WhatsAppButton.jsx`**: Componente global (Fixed/Z-Index alto) flotante en la esquina inferior derecha. Efecto de "pulso" constante verde y *tooltip*.
8. **`Footer.jsx`**: Cierre de página con branding y links sociales. **Nota Técnica:** Se eliminó la dependencia de `lucide-react` aquí tras un error de exportación del bundler de Vite (`Instagram` y `Youtube` no existían en esa versión instalada). Todo se renderiza con SVGs inyectados directamente.

### 📂 Archivos Globales
* **`src/index.css`**: Contiene la definición de variables globales de tema de Tailwind v4 (`@theme`), inyección de tipografías (`Inter` y `Poppins`), animaciones (`keyframes`) y las clases de utilidad visual fundamentales (`.glass`, `.neon-border`, `.btn-primary`). **Nota Técnica:** El import de fuentes de Google está forzado en la línea 1 antes de Tailwind para cumplir las reglas de PostCSS.
* **`index.html`**: Optimizaciones SEO ya implementadas (Meta title, description, keywords, Open Graph para compartir enlaces y pre-connect de fuentes).

## 5. Estado Actual del Proyecto
* **El código Front-End está 100% completado**, modularizado y estilizado acorde al diseño solicitado.
* El entorno de Vite compila sin errores (Se resolvieron bugs de importación de estilos y módulos rotos de la librería de íconos).
* **Siguientes pasos sugeridos:** Entregar el proyecto al cliente para que suba los videos `.mp4` reales a la carpeta `/public/assets/videos/` e inicie el despliegue a producción (Vercel, Netlify o similar).
