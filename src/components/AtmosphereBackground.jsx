const items = [
  { text: 'Excelente', icon: null, depth: 0 },
  { text: '100% recomendado', icon: null, depth: 1 },
  { text: 'Brutal', icon: null, depth: 2 },
  { text: null, icon: 'heart', depth: 0 },
  { text: 'Increible', icon: null, depth: 1 },
  { text: null, icon: 'star', depth: 2 },
  { text: 'Cambio mi vida', icon: null, depth: 0 },
  { text: null, icon: 'thumb', depth: 1 },
  { text: 'Lo maximo', icon: null, depth: 2 },
  { text: null, icon: 'heart', depth: 1 },
  { text: 'Super recomendado', icon: null, depth: 0 },
  { text: null, icon: 'star', depth: 0 },
  { text: 'De otro nivel', icon: null, depth: 2 },
  { text: null, icon: 'heart', depth: 2 },
  { text: 'Resultados reales', icon: null, depth: 1 },
];

const depthCfg = [
  { scale: 1, blur: '0px', speed: 1, opacity: '0.08' },
  { scale: 0.75, blur: '2px', speed: 0.65, opacity: '0.05' },
  { scale: 0.5, blur: '4px', speed: 0.4, opacity: '0.03' },
];

function Icon({ type, size }) {
  const p = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (type === 'heart')
    return <svg {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>;
  if (type === 'star')
    return <svg {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
  if (type === 'thumb')
    return <svg {...p}><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>;
  return null;
}

export default function AtmosphereBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => {
        const cfg = depthCfg[item.depth];
        const left = 3 + ((i * 17 + 13) % 94);
        const bottom = -80 + ((i * 37 + 7) % 180);
        const dur = 18 + item.depth * 10 + (i % 5) * 2;
        const del = -(i * 2.7 + (i % 3) * 1.5);
        const size = 14 + (2 - item.depth) * 5;

        return (
          <div
            key={i}
            className="absolute flex items-center justify-center rounded-xl border pointer-events-none"
            style={{
              left: `${left}%`,
              bottom: `${bottom}px`,
              padding: item.text ? '5px 12px' : '7px',
              background: 'rgba(255,255,255,0.02)',
              borderColor: 'rgba(255,255,255,0.06)',
              opacity: cfg.opacity,
              filter: `blur(${cfg.blur})`,
              animation: `rise ${dur}s ${del}s linear infinite`,
            }}
          >
            {item.icon ? (
              <Icon type={item.icon} size={size} />
            ) : (
              <span className="whitespace-nowrap font-medium tracking-wide text-white/90" style={{ fontSize: `${size - 2}px` }}>
                {item.text}
              </span>
            )}
          </div>
        );
      })}
      <style>{`@keyframes rise{0%{transform:translateY(0)translateX(0)}20%{transform:translateY(-60px)translateX(5px)}40%{transform:translateY(-130px)translateX(-4px)}60%{transform:translateY(-200px)translateX(7px)}80%{transform:translateY(-270px)translateX(-3px)}100%{transform:translateY(-340px)translateX(4px)}}`}</style>
    </div>
  );
}
