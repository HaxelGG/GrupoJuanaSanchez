// Sección 5 · Cita editorial gigante.
export function PullQuote() {
  return (
    <section className="pullquote">
      <span className="pullquote-mark">&ldquo;</span>
      <p className="pullquote-text reveal">
        Un <strong>legado.</strong> Tres firmas.
        <br />
        Cincuenta años <em>cosiendo</em> lo único
        <br />
        que no caduca.
      </p>
      <div className="pullquote-attr reveal delay-1">
        Grupo Juana Sánchez · MCMLXXV — MMXXVI
      </div>
    </section>
  );
}
