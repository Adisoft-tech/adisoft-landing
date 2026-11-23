import PageNav from '../components/PageNav';
import PageFooter from '../components/PageFooter';
import Breadcrumbs from '../components/Breadcrumbs';
import Faq from '../components/Faq';
import CtaBand from '../components/CtaBand';
import AcademyBadge from '../components/AcademyBadge';
import EnrollButton from './EnrollButton';
import AcademyForm from './AcademyForm';
import { colors, gradientTitle } from '../lib/theme';
import { benefits, formats, events, journey, faq } from './data';

const title = 'AdiSoft Academy: cursos, webinars y consultoría en desarrollo e IA';
const description = 'Webinars gratuitos, cursos cortos, capacitación in-company y consultoría de diagnóstico en desarrollo de software e inteligencia artificial, con el equipo de AdiSoft.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/academy' },
  openGraph: { title, description, url: '/academy' },
};

const sectionWrap = { maxWidth: 1600, margin: '0 auto', padding: '0 clamp(24px,5vw,64px)' };
const eyebrow = { fontSize: 13, color: colors.primary, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' };
const h2Style = { ...gradientTitle, fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 12px' };

// Íconos simples (trazo, mismo estilo que los de contacto del sitio). Decorativos: aria-hidden.
function AcademyIcon({ name }) {
  const paths = {
    webinar: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
        <path d="M10.5 8.5l4 2-4 2z" />
      </>
    ),
    course: (
      <>
        <path d="M3 8l9-4 9 4-9 4z" />
        <path d="M7 10.2V15c0 1.2 2.2 2.5 5 2.5s5-1.3 5-2.5v-4.8" />
        <path d="M21 8v5" />
      </>
    ),
    team: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" />
        <circle cx="17" cy="9" r="2.4" />
        <path d="M16 14.2c3 .1 5 1.8 5 4.3" />
      </>
    ),
    diagnostic: (
      <>
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="M15 15l5 5" />
        <path d="M8 11.5l1.8 1.8L13.2 9" />
      </>
    ),
  };
  return (
    <span aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 48, height: 48, borderRadius: 13, background: 'linear-gradient(135deg,#0a3288,#3a63c8)' }}>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </svg>
    </span>
  );
}

export default function Page() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#ffffff', fontFamily: 'Inter,sans-serif', minHeight: '100vh', color: colors.ink }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: -180, left: -180, width: 460, height: 460, borderRadius: '50%', background: colors.primary, filter: 'blur(110px)', opacity: 0.14, pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', top: -40, right: -120, width: 340, height: 340, borderRadius: '50%', background: colors.academy, filter: 'blur(120px)', opacity: 0.12, pointerEvents: 'none' }} />

      <PageNav />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Academy', href: '/academy' }]} />

      <main style={{ position: 'relative', zIndex: 1 }}>
        {/* 1. Hero */}
        <section aria-labelledby="academy-hero" style={{ ...sectionWrap, paddingTop: 'clamp(36px,6vw,72px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 56 }}>
          <div style={{ flex: '1 1 440px', minWidth: 280, display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
              <img src="/adisoft-isotype.png" alt="AdiSoft" style={{ height: 30, width: 'auto' }} />
              <span style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 22, color: colors.ink, letterSpacing: '-0.5px' }}>AdiSoft</span>
              <AcademyBadge />
            </div>
            <h1 id="academy-hero" style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 'clamp(34px,4.8vw,56px)', lineHeight: 1.1, letterSpacing: '-1.5px', color: colors.ink, margin: 0 }}>
              Lo que AdiSoft sabe de desarrollo e IA, ahora en cursos, talleres y consultoría para tu equipo
            </h1>
            <p style={{ fontSize: 18, color: colors.muted, lineHeight: 1.7, maxWidth: 560, margin: 0 }}>
              Además de construir software a la medida, compartimos lo que aprendemos en cada proyecto: webinars gratuitos, cursos cortos, capacitación in-company y diagnósticos para que tu empresa decida bien dónde invertir.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <a href="#proximos" className="academy-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 26px', borderRadius: 14, background: 'rgba(10,50,136,0.88)', color: '#ffffff', fontWeight: 600, fontSize: 15, textDecoration: 'none', boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.3)' }}>
                Ver cursos
              </a>
              <a href="/#contacto" className="academy-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 26px', borderRadius: 14, background: 'rgba(10,50,136,0.08)', border: '1px solid rgba(10,50,136,0.22)', color: colors.primary, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
                Hablemos de tu proyecto
              </a>
            </div>
          </div>

          <aside aria-label="Ruta de AdiSoft Academy" style={{ flex: '1 1 320px', minWidth: 260, maxWidth: 460 }}>
            <div style={{ padding: 'clamp(22px,3vw,32px)', borderRadius: 22, background: colors.bgSoft, border: `1px solid ${colors.border}` }}>
              <p style={{ margin: '0 0 18px', fontSize: 13, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: colors.academyInk }}>Tu ruta en Academy</p>
              <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
                {journey.map((step, i) => (
                  <li key={step.title} style={{ display: 'flex', gap: 16, position: 'relative', paddingBottom: i === journey.length - 1 ? 0 : 22 }}>
                    {i < journey.length - 1 && <span aria-hidden="true" style={{ position: 'absolute', left: 15, top: 34, bottom: 2, width: 2, background: 'rgba(10,50,136,0.14)' }} />}
                    <span aria-hidden="true" style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 10, background: i === journey.length - 1 ? colors.primary : '#ffffff', border: `1px solid ${i === journey.length - 1 ? colors.primary : 'rgba(10,50,136,0.25)'}`, color: i === journey.length - 1 ? '#ffffff' : colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 14 }}>{i + 1}</span>
                    <div>
                      <p style={{ margin: 0, fontWeight: 600, fontSize: 16, color: colors.ink }}>{step.title}</p>
                      <p style={{ margin: '2px 0 0', fontSize: 14, color: colors.muted, lineHeight: 1.5 }}>{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>

        {/* 2. Por qué Academy */}
        <section aria-labelledby="academy-why" style={{ ...sectionWrap, paddingTop: 'clamp(72px,9vw,120px)' }}>
          <span style={eyebrow}>Por qué Academy</span>
          <h2 id="academy-why" style={h2Style}>Formación de quienes lo hacen todos los días</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 20, marginTop: 28 }}>
            {benefits.map((b) => (
              <div key={b.title} className="academy-card" style={{ padding: '26px 24px', borderRadius: 18, border: `1px solid ${colors.border}`, background: '#ffffff' }}>
                <span aria-hidden="true" style={{ display: 'block', width: 28, height: 3, borderRadius: 2, background: colors.academy, marginBottom: 16 }} />
                <h3 style={{ fontWeight: 600, fontSize: 17, lineHeight: 1.35, margin: '0 0 10px', color: colors.ink }}>{b.title}</h3>
                <p style={{ fontSize: 14.5, color: colors.muted, lineHeight: 1.65, margin: 0 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Catálogo de formatos */}
        <section aria-labelledby="academy-formats" style={{ ...sectionWrap, paddingTop: 'clamp(72px,9vw,120px)' }}>
          <span style={eyebrow}>Formatos</span>
          <h2 id="academy-formats" style={h2Style}>Elige cómo quieres aprender (o capacitar a tu equipo)</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))', gap: 20, marginTop: 28 }}>
            {formats.map((f) => (
              <article key={f.name} className="academy-card" style={{ display: 'flex', flexDirection: 'column', gap: 14, padding: '28px 24px', borderRadius: 18, border: `1px solid ${colors.border}`, background: '#ffffff' }}>
                <AcademyIcon name={f.icon} />
                <h3 style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 20, letterSpacing: '-0.5px', margin: 0, color: colors.ink }}>{f.name}</h3>
                <dl style={{ margin: 0, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                  <div>
                    <dt style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', color: colors.muted }}>Duración</dt>
                    {/* TODO: confirmar duración real de cada formato */}
                    <dd style={{ margin: '2px 0 0', fontSize: 14.5, color: colors.ink }}>{f.duration}</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', color: colors.muted }}>Dirigido a</dt>
                    <dd style={{ margin: '2px 0 0', fontSize: 14.5, color: colors.muted, lineHeight: 1.55 }}>{f.audience}</dd>
                  </div>
                  <div>
                    <dt style={{ fontSize: 12, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', color: colors.muted }}>Precio</dt>
                    <dd style={{ margin: '2px 0 0', fontSize: 16, fontWeight: 700, color: colors.primary }}>{f.price}</dd>
                  </div>
                </dl>
                <EnrollButton label={f.cta} interest={f.interest} message={f.message} trackLabel={`academy_format_${f.icon}`} variant="ghost" ariaLabel={`${f.cta}: ${f.name}`} />
              </article>
            ))}
          </div>
        </section>

        {/* 4. Próximos eventos / cursos */}
        <section id="proximos" aria-labelledby="academy-events" style={{ ...sectionWrap, paddingTop: 'clamp(72px,9vw,120px)', scrollMarginTop: 90 }}>
          <span style={eyebrow}>Próximos cursos y eventos</span>
          <h2 id="academy-events" style={h2Style}>Lo que viene en Academy</h2>
          <p style={{ fontSize: 16, color: colors.muted, lineHeight: 1.7, maxWidth: 640, margin: '0 0 28px' }}>
            Estamos preparando el calendario. Inscríbete en lo que te interese y te avisaremos en cuanto abramos fechas.
          </p>
          {/* TODO: reemplazar con cursos reales (editar app/academy/data.js → events). Los títulos son de ejemplo. */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {events.map((ev) => (
              <article key={ev.title} className="academy-card" style={{ display: 'flex', flexDirection: 'column', gap: 12, padding: '26px 24px', borderRadius: 18, border: `1px solid ${colors.border}`, background: colors.bgSoft }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ padding: '4px 11px', borderRadius: 999, background: '#ffffff', border: `1px solid ${colors.border}`, fontSize: 12, fontWeight: 600, color: colors.primary }}>{ev.format}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: colors.academyInk }}>{ev.date}</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.35, margin: 0, color: colors.ink }}>{ev.title}</h3>
                <p style={{ fontSize: 14.5, color: colors.muted, lineHeight: 1.65, margin: 0, flex: 1 }}>{ev.text}</p>
                <div>
                  <EnrollButton
                    label="Inscribirme"
                    interest="curso"
                    message={`Quiero inscribirme a: ${ev.title}.`}
                    trackLabel="academy_event_enroll"
                    ariaLabel={`Inscribirme a ${ev.title}`}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 5. Formulario de inscripción / contacto */}
        <section id="inscripcion" aria-labelledby="academy-form" style={{ ...sectionWrap, paddingTop: 'clamp(72px,9vw,120px)', scrollMarginTop: 90 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 56, alignItems: 'flex-start' }}>
            <div style={{ flex: '1 1 340px', minWidth: 280 }}>
              <span style={eyebrow}>Inscripción y contacto</span>
              <h2 id="academy-form" style={h2Style}>Cuéntanos qué quieres aprender</h2>
              <p style={{ fontSize: 16, color: colors.muted, lineHeight: 1.7, maxWidth: 480, margin: '0 0 22px' }}>
                Deja tus datos y te escribimos: para avisarte de las próximas fechas, cotizar una capacitación para tu equipo o agendar un diagnóstico.
              </p>
              <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Respondemos personalmente, sin automatismos.', 'Sin costo ni compromiso para pedir información.', 'Tus datos se usan solo para responderte.'].map((t) => (
                  <li key={t} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: 15, color: colors.muted, lineHeight: 1.55 }}>
                    <span aria-hidden="true" style={{ marginTop: 7, width: 7, height: 7, borderRadius: '50%', background: colors.academy, flexShrink: 0 }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: '1 1 380px', minWidth: 280, maxWidth: 520 }}>
              <AcademyForm />
            </div>
          </div>
        </section>

        {/* 6. FAQ (componente compartido; genera el JSON-LD de FAQPage) */}
        <Faq items={faq} title="Preguntas frecuentes sobre Academy" />

        {/* 7. CTA final (patrón compartido: formulario general de contacto + correo) */}
        {/* TODO: si se define un número de WhatsApp o un link de agenda, agregarlos aquí como botones adicionales. */}
        <CtaBand
          interest="AdiSoft Academy"
          title="¿Prefieres hablarlo directamente?"
          text="Escríbenos y cuéntanos qué necesita tu equipo. Si lo que buscas es un proyecto de software o IA, también podemos ayudarte con eso."
        />
      </main>

      <PageFooter />
    </div>
  );
}
