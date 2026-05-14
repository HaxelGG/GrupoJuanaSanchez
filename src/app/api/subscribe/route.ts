// Captura de leads pre-lanzamiento — registra el email en la audiencia
// de Resend "Grupo Juana Sánchez" (brief §10.2).
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  email: z.email(),
});

export async function POST(req: Request) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return Response.json(
      { ok: false, error: "Petición inválida." },
      { status: 400 },
    );
  }

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    return Response.json(
      { ok: false, error: "Introduce un email válido." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;
  if (!apiKey || !audienceId) {
    console.error("[subscribe] faltan RESEND_API_KEY / RESEND_AUDIENCE_ID");
    return Response.json(
      { ok: false, error: "Servicio no disponible. Inténtalo más tarde." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.contacts.create({
    email: parsed.data.email,
    audienceId,
    unsubscribed: false,
  });

  if (error) {
    // Resend devuelve error también si el contacto ya existe — en ese
    // caso para el usuario el resultado es el mismo: ya está avisado.
    const alreadyIn = /exist/i.test(error.message ?? "");
    if (alreadyIn) {
      return Response.json({ ok: true, already: true });
    }
    console.error("[subscribe] resend error:", error);
    return Response.json(
      { ok: false, error: "No se pudo registrar el email." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
