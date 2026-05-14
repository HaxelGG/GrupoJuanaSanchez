// Sección 12 · Manifiesto — pantalla casi vacía, frase grande.
export function Manifesto() {
  return (
    <section className="manifesto">
      <div className="manifesto-inner">
        <div className="manifesto-eyebrow reveal">Capítulo VI · Filosofía</div>
        <p className="manifesto-text reveal delay-1">
          Hacemos lo mismo desde hace cincuenta años:
          <br />
          <em>convertir un día cualquiera</em>
          <br />
          en uno que se recuerda.
        </p>
        <div className="manifesto-sign reveal delay-2">
          Grupo Juana Sánchez · Murcia
        </div>
      </div>
    </section>
  );
}
