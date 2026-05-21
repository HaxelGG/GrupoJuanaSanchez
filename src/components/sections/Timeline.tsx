"use client";

// Sección · Timeline — 7 hitos (1975 → 2026). Brief §6.
// Desktop: scroll-snap horizontal + botones prev/next + rueda vertical
// convertida a horizontal (liberada en los extremos para no pelear con
// Lenis) + rail que se rellena en malva según el progreso.
// Móvil: lista vertical (sin scroll horizontal).
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

type Step = {
  year: string;
  event: string;
  title: string;
  desc: string;
  kind?: "key" | "now";
  /** Ilustración decorativa (line-art) que recrea el hito. */
  img?: string;
  imgAlt?: string;
};

const STEPS: Step[] = [
  {
    year: "1975",
    event: "Origen · Caravaca de la Cruz",
    title: "Se funda la casa",
    desc: "Un taller pequeño con una convicción enorme: el detalle hecho a mano sostiene un día entero.",
    kind: "key",
    img: "/assets/images/timeline/hito-1975.png",
    imgAlt: "Ilustración del taller fundacional",
  },
  {
    year: "1983",
    event: "Consolidación",
    title: "Un hito en la industria",
    desc: "La firma se consolida como casa de referencia en complementos de ceremonia.",
  },
  {
    year: "1986",
    event: "FIMI · Valencia",
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
    img: "/assets/images/timeline/hito-1998.png",
    imgAlt: "Ilustración de novia artesanal",
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
    img: "/assets/images/timeline/hito-2012.png",
    imgAlt: "Ilustración de pasarela",
  },
  {
    year: "2026",
    event: "FIMI 40 · Valencia",
    title: "Cuarenta años en FIMI",
    desc: "Cuatro décadas después del primer FIMI, volvimos a Valencia con el mismo oficio y piezas nuevas. 15 y 16 de mayo.",
    kind: "now",
  },
];

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  // ¿La línea desborda y hace falta desplazarse? En desktop ancho suele verse
  // entera (max <= 0) → no mostramos el aviso de deslizar ni las flechas.
  const [hasOverflow, setHasOverflow] = useState(false);

  const sync = useCallback(() => {
    const t = trackRef.current;
    if (!t) return;
    const max = t.scrollWidth - t.clientWidth;
    const progress = max > 0 ? t.scrollLeft / max : 0;
    // El fill del rail se escribe directo en el DOM — sin re-render por frame.
    railRef.current?.style.setProperty("--rail-progress", String(progress));
    setAtStart(t.scrollLeft <= 1);
    setAtEnd(t.scrollLeft >= max - 1);
    setHasOverflow(max > 1);
  }, []);

  useEffect(() => {
    const t = trackRef.current;
    if (!t) return;
    sync();

    const onScroll = () => sync();
    t.addEventListener("scroll", onScroll, { passive: true });

    // NO secuestramos la rueda del ratón: el scroll vertical de la página debe
    // fluir siempre. La línea de tiempo se recorre con las flechas (y con
    // swipe táctil / gesto horizontal del trackpad / Shift+rueda).

    window.addEventListener("resize", sync);
    return () => {
      t.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  // Parallax vertical sutil de las ilustraciones: la capa deriva a distinta
  // velocidad que la página al hacer scroll. Desactivado en reduce-motion.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const p = (vh / 2 - (rect.top + rect.height / 2)) / vh;
        section.style.setProperty("--t-parallax", `${(p * 40).toFixed(1)}px`);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const scrollByStep = (dir: 1 | -1) => {
    const t = trackRef.current;
    if (!t) return;
    const step = t.querySelector<HTMLElement>(".t-step");
    const amount = step ? step.offsetWidth * 1.5 : t.clientWidth * 0.7;
    t.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="timeline-section" ref={sectionRef}>
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

      <div className="timeline-track" id="timelineTrack" ref={trackRef}>
        <div className="timeline-rail" ref={railRef}>
          {STEPS.map((s) => (
            <div
              key={s.year}
              className={`t-step${s.kind ? ` is-${s.kind}` : ""}`}
            >
              <div className="t-step-fig" aria-hidden={!s.img}>
                {s.img && (
                  <Image src={s.img} alt={s.imgAlt ?? ""} fill sizes="340px" />
                )}
              </div>
              <div className="t-dot" />
              <div className="t-year">{s.year}</div>
              <span className="t-event">{s.event}</span>
              <h4 className="t-title">{s.title}</h4>
              <p className="t-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {hasOverflow && (
        <div className="timeline-foot">
          <div className="timeline-cue">
            {/* Táctil: se desliza. Mouse (desktop): solo flechas. */}
            <span className="cue-touch">Desliza o usa las flechas</span>
            <span className="cue-pointer">Usa las flechas</span>
          </div>
          <div className="timeline-controls">
            <button
              type="button"
              className="t-ctrl"
              onClick={() => scrollByStep(-1)}
              disabled={atStart}
              aria-label="Hito anterior"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="t-ctrl"
              onClick={() => scrollByStep(1)}
              disabled={atEnd}
              aria-label="Hito siguiente"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
