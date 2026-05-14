"use client";

// Sección 2 · Nav fijo. Detecta scroll (.scrolled) y secciones oscuras
// (.on-dark) para mantener legibilidad. Menú hamburguesa en mobile.
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { WhatsAppNavButton } from "@/components/sections/WhatsAppNavButton";

const DARK_SELECTORS = ["#lanzamiento", "#printellar", ".event"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function update() {
      setScrolled(window.scrollY > 80);

      // ¿hay una sección oscura cruzando la franja de la nav (~100px)?
      let dark = false;
      for (const sel of DARK_SELECTORS) {
        const el = document.querySelector(sel);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top < 100 && r.bottom > 100) {
          dark = true;
          break;
        }
      }
      setOnDark(dark);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Bloquea el scroll del body mientras el menú mobile está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navClass = ["site-nav", scrolled && "scrolled", onDark && "on-dark"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClass}>
        <a href="#" className="nav-mark" aria-label="Grupo Juana Sánchez — inicio">
          <span>
            <em>Grupo</em> Juana Sánchez
          </span>
          <span className="est">EST · 1975</span>
        </a>

        <div className="nav-right">
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>

          <WhatsAppNavButton />

          <button
            type="button"
            className="nav-burger"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="nav-mobile" role="dialog" aria-modal="true">
          <button
            type="button"
            className="nav-mobile-close"
            onClick={() => setMenuOpen(false)}
          >
            Cerrar
          </button>
          {NAV_LINKS.map((l, i) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              <span className="idx">{String(i + 1).padStart(2, "0")}</span>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
