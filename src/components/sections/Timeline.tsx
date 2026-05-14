// Sección 6 · Timeline horizontal — 7 hitos (1975 → 2026).
// Scroll-snap nativo CSS; los botones prev/next y el rail progresivo llegan en Fase 3.

type Step = {
  year: string;
  event: string;
  title: string;
  desc: string;
  kind?: "key" | "now";
};

const STEPS: Step[] = [
  {
    year: "1975",
    event: "Origen · Madrid",
    title: "Se funda la casa",
    desc: "Un taller pequeño con una convicción enorme: el detalle hecho a mano sostiene un día entero.",
    kind: "key",
  },
  {
    year: "1983",
    event: "Consolidación",
    title: "Un hito en la industria",
    desc: "La firma se consolida como casa de referencia en complementos de ceremonia.",
  },
  {
    year: "1986",
    event: "FIMI · Valencia / Madrid",
    title: "Líderes en moda infantil de autor",
    desc: "Primera presencia en FIMI. Inicio de una historia ininterrumpida con la feria internacional de moda infantil.",
    kind: "key",
  },
  {
    year: "1998",
    event: "Novia España · Barcelona",
    title: "La esencia de la novia artesanal",
    desc: "Debut en Barcelona Bridal Week. La firma se afirma como referencia de la novia artesanal española.",
    kind: "key",
  },
  {
    year: "2003",
    event: "Puerta de Europa · Madrid",
    title: "Proyección internacional",
    desc: "Madrid acoge la presentación que define la sofisticación de la casa para el siguiente capítulo.",
  },
  {
    year: "2012",
    event: "Pasarela Cibeles · Madrid",
    title: "El reconocimiento de la moda española",
    desc: "Cibeles. La consagración nacional. La firma deja de ser una referencia y se convierte en una autoridad.",
    kind: "key",
  },
  {
    year: "2026",
    event: "FIMI 40 · Esta semana",
    title: "Pabellón 8 — Stand C35",
    desc: "Cuarenta años después del primer FIMI. Aquí estamos, mismo oficio, nuevas piezas. 15 y 16 de mayo.",
    kind: "now",
  },
];

export function Timeline() {
  return (
    <section className="timeline-section">
      <div className="timeline-head">
        <h2 className="reveal">
          Una trayectoria
          <br />
          <em>escrita en las</em>
          <br />
          mejores pasarelas.
        </h2>
        <p className="reveal delay-1">
          Medio siglo de oficio no se cuenta con palabras, se cuenta con
          escenarios. Del primer taller en 1975 a la próxima feria de mañana,
          una línea continua de presencia en la moda española.
        </p>
      </div>

      <div className="timeline-track" id="timelineTrack">
        <div className="timeline-rail">
          {STEPS.map((s) => (
            <div
              key={s.year}
              className={`t-step${s.kind ? ` is-${s.kind}` : ""}`}
            >
              <div className="t-dot" />
              <div className="t-year">{s.year}</div>
              <span className="t-event">{s.event}</span>
              <h4 className="t-title">{s.title}</h4>
              <p className="t-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="timeline-cue">
        Desliza horizontalmente para ver la trayectoria
      </div>
    </section>
  );
}
