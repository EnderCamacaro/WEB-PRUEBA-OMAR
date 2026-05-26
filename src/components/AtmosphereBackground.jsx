const texts = [
  'Aprobé el DET', 'Habla fluido', 'Sin traducir',
  'Pienso en inglés', 'Business English', 'Pronunciación clara',
  'Viajo sin miedo', 'Listening fácil', 'Fluidez total',
  'Entrevista en inglés', 'Confianza al hablar', 'Inglés natural',
  'Vocabulario real', 'Sin gramática', '100% conversacional',
  'Inglés real', 'Sin pensar', 'Fluido y seguro',
  'Sin barreras', 'Resultados rápido', 'Nivel avanzado',
  'Cero miedo', 'Speaking suelto', 'Entiendo todo',
  'Acento perfecto', 'Sin bloqueos', 'Claridad total',
  'Inglés intuitivo', 'Suena natural', 'Ya hablo inglés',
];

const depthCfg = [
  { blur: '0px', speed: 1, opacity: '0.1', tailOff: 20 },
  { blur: '2px', speed: 0.65, opacity: '0.06', tailOff: 14 },
  { blur: '4px', speed: 0.4, opacity: '0.04', tailOff: 10 },
];

function IconHeart({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function IconThumb({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
    </svg>
  );
}

const items = [];
for (let i = 0; i < 30; i++) {
  if (i % 4 === 2) {
    items.push({ icon: 'heart', depth: i % 3 });
  } else if (i % 4 === 3) {
    items.push({ icon: 'thumb', depth: i % 3 });
  } else {
    items.push({ text: texts[i % texts.length], depth: i % 3 });
  }
}

export default function AtmosphereBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {items.map((item, i) => {
        const cfg = depthCfg[item.depth];
        const left = 2 + ((i * 11 + 5) % 96);
        const bottom = -80 + ((i * 23 + 7) % 180);
        const dur = 22 + item.depth * 10 + (i % 6) * 1.5;
        const del = -(i * 1.8 + (i % 4) * 0.6);
        const isIcon = !!item.icon;
        const iconSize = 22 + (1.5 - item.depth * 0.5) * 5;

        return (
          <div
            key={i}
            className="bubble"
            style={{
              left: `${left}%`,
              bottom: `${bottom}px`,
              opacity: cfg.opacity,
              filter: `blur(${cfg.blur})`,
              animation: `rise ${dur}s ${del}s linear infinite`,
              padding: isIcon ? '6px' : '5px 11px 6px',
            }}
          >
            {isIcon ? (
              item.icon === 'heart' ? <IconHeart size={iconSize} /> : <IconThumb size={iconSize} />
            ) : (
              <span style={{ fontSize: `${10 + (1.5 - item.depth * 0.5) * 3}px` }}>{item.text}</span>
            )}
            <div className="tail" style={{ left: `${cfg.tailOff}px` }} />
          </div>
        );
      })}
      <style>{`
        .bubble {
          position: absolute;
          border-radius: 10px;
          border: 1px solid rgba(59,130,246,0.08);
          background: rgba(59,130,246,0.025);
          white-space: nowrap;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: rgba(147,197,253,0.85);
          pointer-events: none;
        }
        .tail {
          position: absolute;
          bottom: -5px;
          width: 8px;
          height: 8px;
          border-right: 1px solid rgba(59,130,246,0.08);
          border-bottom: 1px solid rgba(59,130,246,0.08);
          background: rgba(59,130,246,0.025);
          transform: rotate(45deg);
          border-radius: 0 0 2px 0;
        }
        @keyframes rise {
          0% { transform: translateY(0) translateX(0); }
          15% { transform: translateY(-70px) translateX(6px); }
          30% { transform: translateY(-140px) translateX(-4px); }
          50% { transform: translateY(-210px) translateX(8px); }
          70% { transform: translateY(-280px) translateX(-3px); }
          85% { transform: translateY(-330px) translateX(5px); }
          100% { transform: translateY(-380px) translateX(2px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
