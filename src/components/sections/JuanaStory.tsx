"use client";

// Capítulo Juana Sánchez · bloque de storytelling con sticky scroll (brief §9 / §7.3).
// El texto scrollea a la izquierda; el visual sticky de la derecha hace
// crossfade entre 3 fotos reales de producto según el progreso de scroll.
// prefers-reduced-motion → imagen única estática.
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

const IMAGES = [
  {
    src: "/assets/images/juana-ceremonia.jpg",
    alt: "Esparteñas y corona de ceremonia Juana Sánchez, hechas a mano",
  },
  {
    src: "/assets/images/juana-calzado.jpg",
    alt: "Esparteñas de ceremonia Juana Sánchez, detalle artesanal",
  },
  {
    src: "/assets/images/juana-conjunto.jpg",
    alt: "Conjunto de ceremonia Juana Sánchez en rosa polvo",
  },
];

const SIZES = "(max-width: 920px) 100vw, 700px";

export function JuanaStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // 3 capas con crossfade: cada foto domina ~un tercio del recorrido.
  // Los hooks se llaman incondicionalmente (número fijo de imágenes).
  const op0 = useTransform(scrollYProgress, [0, 0.3, 0.42], [1, 1, 0]);
  const op1 = useTransform(scrollYProgress, [0.3, 0.42, 0.64, 0.76], [0, 1, 1, 0]);
  const op2 = useTransform(scrollYProgress, [0.64, 0.76, 1], [0, 1, 1]);
  const opacities = [op0, op1, op2];

  return (
    <div className="chapter-story" ref={ref}>
      <div className="story-text">
        <p className="tagline reveal">
          El primer día
          <br />
          <span
            style={{
              color: "var(--mauve-deep)",
              fontWeight: 500,
              fontStyle: "normal",
            }}
          >
            que recordarás
          </span>
          <br />
          siempre.
        </p>
        <p className="body-prose reveal delay-1">
          Especialistas en complementos y calzados únicos para los días que se
          cuentan en la familia: novias, madrinas, comunión, arras. Cada pieza
          nace en nuestro taller, una a una, sin prisa.{" "}
          <em>Diseñada con corazón y personalidad</em> para que tú o tu hijo os
          sintáis muy especiales.
        </p>
        <p className="body-prose reveal delay-2">
          Cincuenta años después del primer encargo, el método sigue siendo el
          mismo: hilo, paciencia, mirada. Las máquinas cortan. Las manos
          deciden.
        </p>
        <div className="story-meta reveal delay-3">
          <div className="story-meta-item">
            <span className="lbl">Especialidad</span>
            <span className="val">Comunión · Arras · Novia</span>
          </div>
          <div className="story-meta-item">
            <span className="lbl">Producción</span>
            <span className="val">Hecho a mano · Bajo pedido</span>
          </div>
          <div className="story-meta-item">
            <span className="lbl">Distribución</span>
            <span className="val">Boutiques selectas en España</span>
          </div>
        </div>
      </div>

      <div className="story-visual reveal delay-1">
        {reduced ? (
          <Image src={IMAGES[0].src} alt={IMAGES[0].alt} fill sizes={SIZES} />
        ) : (
          IMAGES.map((img, i) => (
            <motion.div
              key={img.src}
              className="story-visual-layer"
              style={{ opacity: opacities[i] }}
            >
              <Image src={img.src} alt={img.alt} fill sizes={SIZES} />
            </motion.div>
          ))
        )}
        <div className="img-meta">JS · MADRID · 1975</div>
      </div>
    </div>
  );
}
