import nodemailer from 'nodemailer';
import { interestOptions } from '../../academy/data';

// Destinatario de las solicitudes de AdiSoft Academy.
// Se configura con la variable de entorno ACADEMY_EMAIL (Vercel → Settings → Environment Variables).
// Si no está definida, cae en hello@adisoftco.com.
const ADISOFT_ACADEMY_EMAIL = process.env.ACADEMY_EMAIL || 'hello@adisoftco.com';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clean = (value, max) => (typeof value === 'string' ? value.trim().slice(0, max) : '');

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Solicitud inválida' }, { status: 400 });
  }

  // Honeypot: un bot llenó el campo oculto. Respondemos "ok" para no darle pistas y no enviamos nada.
  if (clean(body.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const message = clean(body.message, 2000);
  const interest = interestOptions.find((o) => o.value === body.interest);

  if (!name || !email || !message || !interest || !EMAIL_RE.test(email)) {
    return Response.json({ error: 'Faltan campos requeridos o son inválidos' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"AdiSoft Web" <${process.env.SMTP_USER}>`,
      to: ADISOFT_ACADEMY_EMAIL,
      replyTo: email,
      // El asunto solo usa texto de la lista fija de intereses (nunca texto libre del visitante).
      subject: `Academy: ${interest.label}`,
      text: [
        'Nueva solicitud de AdiSoft Academy',
        '',
        `Nombre: ${name}`,
        `Correo: ${email}`,
        `Teléfono: ${phone || 'No indicado'}`,
        `Interés: ${interest.label}`,
        '',
        'Mensaje:',
        message,
      ].join('\n'),
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Error enviando la solicitud de Academy:', err);
    return Response.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 });
  }
}
