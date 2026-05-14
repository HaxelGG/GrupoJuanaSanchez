// Sección 13 · FIMI Valencia 2026 — evento en curso.
export function FimiEvent() {
  return (
    <section className="event">
      <div className="event-inner">
        <div className="event-left reveal">
          <div className="live-tag">
            <span className="live-dot" />
            En curso · Esta semana
          </div>
          <h2 className="event-title">
            Estamos en
            <br />
            <em>FIMI Valencia</em>
            <br />
            2026.
          </h2>
          <p className="event-sub reveal delay-1">
            Cuarenta años después de nuestra primera presencia. Mismo oficio,
            piezas nuevas. Pasaos a ver el muestrario completo.
          </p>
          <div className="event-details">
            <div className="event-detail-row reveal delay-2">
              <span className="ed-lbl">Cuándo</span>
              <span className="ed-val">
                <span className="big">15 — 16 mayo</span>MMXXVI
              </span>
            </div>
            <div className="event-detail-row reveal delay-2">
              <span className="ed-lbl">Dónde</span>
              <span className="ed-val">
                <span className="big">Pabellón 8 · Stand C35</span>Feria Valencia
              </span>
            </div>
            <div className="event-detail-row reveal delay-3">
              <span className="ed-lbl">Edición</span>
              <span className="ed-val">
                <span className="big">FIMI 40</span>Moda infantil de autor
              </span>
            </div>
          </div>
        </div>

        <div className="event-right reveal delay-1">
          <div className="er-top">
            <span>FIMI · 2026</span>
            <span>EDICIÓN 40</span>
          </div>
          <div className="er-mid">
            <div className="label">Os esperamos</div>
            <div className="show">
              Pabellón 8
              <br />
              Stand C35
            </div>
            <div className="where">— Feria Valencia —</div>
          </div>
          <div className="er-bottom">
            <span>15 / 05</span>
            <span>16 / 05</span>
          </div>
        </div>
      </div>
    </section>
  );
}
