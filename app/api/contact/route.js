import nodemailer from 'nodemailer';

export async function POST(request) {
  const { name, email, sector, companySize, message } = await request.json();

  if (!name || !email || !message) {
    return Response.json({ error: 'Faltan campos requeridos' }, { status: 400 });
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
      to: 'hello@adisoftco.com',
      replyTo: email,
      subject: `Nuevo contacto de ${name}`,
      text: `Nombre: ${name}\nCorreo: ${email}\nSector: ${sector || 'No especificado'}\nTamaño de empresa: ${companySize || 'No especificado'}\n\nCaso:\n${message}`,
    });
    return Response.json({ ok: true });
  } catch (err) {
    console.error('Error enviando el correo de contacto:', err);
    return Response.json({ error: 'No se pudo enviar el mensaje' }, { status: 500 });
  }
}
