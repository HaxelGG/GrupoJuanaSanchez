// Sección 4 · Declaración — el nombre del Grupo + 3 stats.
export function Declaration() {
  return (
    <section className="declaration" id="legado">
      <div className="declaration-eyebrow eyebrow reveal">La casa</div>
      <h2 className="declaration-name reveal delay-1">Grupo Juana Sánchez</h2>
      <div className="declaration-stats reveal delay-2">
        <div className="stat">
          <div className="stat-num">1975</div>
          <div className="stat-label">Fundación</div>
        </div>
        <div className="stat">
          <div className="stat-num">3</div>
          <div className="stat-label">Firmas hermanas</div>
        </div>
        <div className="stat">
          <div className="stat-num">
            50<span style={{ fontSize: "0.5em", verticalAlign: "super" }}>+</span>
          </div>
          <div className="stat-label">Años de oficio</div>
        </div>
      </div>
    </section>
  );
}
