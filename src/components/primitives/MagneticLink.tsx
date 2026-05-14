"use client";

// Enlace con magnetic pull — wrapper reusable sobre useMagnetic (addendum §5.4).
// Usado en los botones de tienda (Shops) y el CTA del LaunchCountdown.
import { motion } from "motion/react";
import { useMagnetic } from "@/lib/hooks/useMagnetic";

type MagneticLinkProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
  strength?: number;
  target?: string;
  rel?: string;
  "data-brand"?: string;
  "aria-label"?: string;
};

export function MagneticLink({
  href,
  className,
  children,
  strength = 0.3,
  target,
  rel,
  ...rest
}: MagneticLinkProps) {
  const { ref, x, y } = useMagnetic<HTMLAnchorElement>(strength);
  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      style={{ x, y }}
      className={className}
      data-magnetic
      {...rest}
    >
      {children}
    </motion.a>
  );
}
