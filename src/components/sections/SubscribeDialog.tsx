"use client";

// Captura de email pre-lanzamiento (brief §10). Dialog de shadcn +
// react-hook-form + zod. Envía a /api/subscribe (Resend) y confirma con toast.
import { useState } from "react";
import { useForm } from "react-hook-form";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.email("Introduce un email válido."),
});
type FormValues = z.infer<typeof schema>;

export function SubscribeDialog() {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    // zod 4 implementa Standard Schema → este resolver evita la
    // fricción de tipos entre zod 4.4 y @hookform/resolvers.
    resolver: standardSchemaResolver(schema),
  });

  async function onSubmit(values: FormValues) {
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        toast.error(data.error ?? "No se pudo registrar. Inténtalo de nuevo.");
        return;
      }
      toast.success("Te avisaremos el 17 de mayo a las 18:00 CET.");
      reset();
      setOpen(false);
    } catch {
      toast.error("Error de conexión. Inténtalo de nuevo.");
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="btn-ghost">Avísame por email</DialogTrigger>
      <DialogContent className="border-border bg-paper sm:max-w-100">
        <DialogHeader>
          <DialogTitle className="font-display text-3xl leading-none font-normal tracking-tight text-ink">
            Sé de las primeras en verla
          </DialogTitle>
          <DialogDescription className="font-serif text-base text-ink-soft italic">
            Te escribimos una sola vez: el 17 de mayo, cuando se abra la tienda.
            Nada más.
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-2 flex flex-col gap-3"
          noValidate
        >
          <div className="flex flex-col gap-1.5">
            <Input
              type="email"
              autoComplete="email"
              placeholder="tu@email.com"
              aria-invalid={Boolean(errors.email)}
              {...register("email")}
            />
            {errors.email && (
              <p className="font-mono text-[11px] tracking-wide text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="font-mono text-[10px] tracking-[0.25em] uppercase bg-mauve-deep text-cream px-6 py-3.5 transition-colors hover:bg-mauve disabled:opacity-60"
          >
            {isSubmitting ? "Enviando…" : "Avísame"}
          </button>

          <p className="font-mono text-[10px] tracking-wide text-ink-faint">
            Sin spam. Solo el aviso del lanzamiento.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
