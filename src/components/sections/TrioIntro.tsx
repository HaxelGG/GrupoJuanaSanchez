// Sección 7 · Trío — las 3 firmas, una card por marca.
type Card = {
  brand: "js" | "lolikas" | "printellar";
  href: string;
  num: string;
  name: React.ReactNode;
  tagline: string;
};

const CARDS: Card[] = [
  {
    brand: "js",
    href: "#juana",
    num: "01 — Casa madre",
    name: (
      <>
        <em>Juana</em>
        <br />
        Sánchez
      </>
    ),
    tagline: "La ceremonia. El primer día que recordarás siempre.",
  },
  {
    brand: "lolikas",
    href: "#lolikas",
    num: "02 — La hermana joven",
    name: <em>Lolikas</em>,
    tagline: "La moda. Elegancia con un toque de fresco autor.",
  },
  {
    brand: "printellar",
    href: "#printellar",
    num: "03 — El taller técnico",
    name: <em>Printellar</em>,
    tagline: "La precisión. Tu idea, exacta, sobre cualquier superficie.",
  },
];

export function TrioIntro() {
  return (
    <section className="trio">
      <div className="trio-head">
        <div className="eyebrow reveal">
          <span className="dot" />
          Cap. 02 — El Grupo
        </div>
        <h2 className="reveal delay-1">
          Tres nombres,
          <br />
          <em>un mismo latido.</em>
        </h2>
        <p className="serif-prose reveal delay-2">
          Una sola escuela, tres lenguajes. La ceremonia, la moda diaria y el
          taller técnico que los une.
        </p>
      </div>

      <div className="trio-grid">
        {CARDS.map((c, i) => (
          <a
            key={c.brand}
            href={c.href}
            className={`trio-card reveal${i ? ` delay-${i}` : ""}`}
            data-brand={c.brand}
          >
            <div className="trio-card-num">{c.num}</div>
            <div>
              <div className="trio-card-name">{c.name}</div>
              <p className="trio-card-tagline" style={{ marginTop: 20 }}>
                {c.tagline}
              </p>
            </div>
            <div className="trio-card-foot">
              <span>Conocer</span>
              <span className="arr">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
