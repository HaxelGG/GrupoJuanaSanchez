"use client";

// Video que reproduce solo cuando está en viewport — brief §8
// ("autoplay solo en secciones visibles").
//
// Sin cambio visual: el usuario ve el video reproduciéndose siempre que
// esté en pantalla. La diferencia es que los videos fuera de vista se
// pausan en vez de seguir decodificando — antes los 3 (HQ 4.5 MB) corrían
// a la vez. Reanuda donde se quedó al volver a entrar en vista.
import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  src: string;
  poster: string;
};

export function AutoplayVideo({ src, poster }: AutoplayVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // play() puede rechazar (autoplay bloqueado) — sin problema.
            void video.play().catch(() => {});
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.1 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    // Sin atributo autoPlay: el IntersectionObserver controla play/pause.
    // muted es obligatorio para que play() programático funcione sin gesto.
    <video ref={ref} muted loop playsInline preload="metadata" poster={poster}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
