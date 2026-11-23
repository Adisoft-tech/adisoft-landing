# AdiSoft Academy (`/academy`)

Página de la línea de formación de AdiSoft: webinars, cursos cortos, capacitación in-company y consultoría de diagnóstico.

## Archivos

| Archivo | Qué hace |
| --- | --- |
| `page.js` | La página (hero, por qué Academy, formatos, próximos eventos, formulario, FAQ, CTA final) y su `metadata` SEO. |
| `data.js` | **Todo el contenido editable**: formatos, eventos, beneficios, FAQ, opciones del selector. |
| `AcademyForm.js` | Formulario de inscripción (componente cliente). Envía a `/api/academy`. |
| `EnrollButton.js` | Botón "Inscribirme / Pedir cotización": lleva al formulario y preselecciona el interés. |
| `../api/academy/route.js` | Endpoint que valida el formulario y envía el correo (Nodemailer). |
| `../components/AcademyBadge.js` | Pill "ACADEMY" (teal). Única señal visual de la línea. |

## Configuración para producción (Vercel → Settings → Environment Variables)

El formulario reutiliza el mismo SMTP del formulario de contacto del sitio, así que si ese ya funciona en producción, **este también** sin configurar nada más.

| Variable | Obligatoria | Para qué |
| --- | --- | --- |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Sí (ya existen) | Cuenta SMTP desde la que se envían los correos. |
| `ACADEMY_EMAIL` | No | Correo que recibe las solicitudes de Academy. Si no se define, usa `hello@adisoftco.com`. |

Para enviar las solicitudes a otro buzón (por ejemplo `academy@adisoftco.com`), crea `ACADEMY_EMAIL` en Vercel y haz un redeploy. No hace falta tocar código.

En local, agrega las mismas variables a `.env.local` (ver `.env.example`).

## Qué falta antes de promocionar la página

1. Reemplazar los eventos de ejemplo en `data.js → events` (hay un `TODO` arriba). Hoy todos dicen "Próximamente" y no tienen fecha.
2. Confirmar duraciones de los formatos (`data.js → formats[].duration`, son rangos aproximados).
3. Confirmar las respuestas de la FAQ con las políticas reales (modalidad, certificados, etc.).
4. Opcional: agregar WhatsApp o un link de agenda al CTA final (hay un `TODO` en `page.js`).
5. Cuando haya cursos reales con fecha, considerar agregar datos estructurados `Event`/`Course` (no se agregaron para no marcar eventos que aún no existen).
