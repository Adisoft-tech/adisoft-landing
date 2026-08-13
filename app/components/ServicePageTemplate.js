import Link from 'next/link';
import PageNav from './PageNav';
import PageFooter from './PageFooter';
import Breadcrumbs from './Breadcrumbs';
import Faq from './Faq';
import CtaBand from './CtaBand';
import { colors, gradientTitle, siteUrl } from '../lib/theme';

export default function ServicePageTemplate({
  path,
  breadcrumbLabel,
  eyebrow,
  h1,
  intro,
  painPoints,
  process,
  techStack,
  forWho,
  relatedIndustries,
  faq,
}) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: h1,
    description: intro,
    url: `${siteUrl}${path}`,
    provider: { '@type': 'Organization', name: 'AdiSoft', url: siteUrl },
    areaServed: ['Colombia', 'Latinoamérica'],
    serviceType: breadcrumbLabel,
  };

  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#ffffff', fontFamily: 'Inter,sans-serif', minHeight: '100vh', color: colors.ink }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <PageNav />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Servicios', href: '/#servicios' }, { label: breadcrumbLabel, href: path }]} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(24px,5vw,64px) 0' }}>
        <span style={{ fontSize: 13, color: colors.primary, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{eyebrow}</span>
        <h1 style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 'clamp(32px,4.6vw,52px)', lineHeight: 1.12, letterSpacing: '-1.5px', color: colors.ink, margin: '14px 0 20px' }}>{h1}</h1>
        <p style={{ fontSize: 18, color: colors.muted, lineHeight: 1.7, maxWidth: 720, margin: 0 }}>{intro}</p>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '72px clamp(24px,5vw,64px) 0' }}>
        <h2 style={{ ...gradientTitle, fontSize: 'clamp(24px,2.8vw,32px)', margin: '0 0 24px' }}>Qué problema resolvemos</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {painPoints.map((p) => (
            <div key={p} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ marginTop: 7, width: 7, height: 7, borderRadius: '50%', background: colors.primary, flexShrink: 0 }} />
              <p style={{ fontSize: 16, color: colors.muted, lineHeight: 1.7, margin: 0 }}>{p}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px clamp(24px,5vw,64px) 0' }}>
        <h2 style={{ ...gradientTitle, fontSize: 'clamp(24px,2.8vw,32px)', margin: '0 0 8px' }}>Cómo lo hacemos: metodología ADIS</h2>
        <p style={{ fontSize: 15, color: colors.muted, maxWidth: 640, margin: '0 0 32px', lineHeight: 1.6 }}>
          Aplicamos nuestro proceso propio — Análisis, Diseño, Implementación, Soporte — a cada proyecto de {breadcrumbLabel.toLowerCase()}.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
          {process.map((step) => (
            <div key={step.letter} style={{ padding: 24, borderRadius: 16, border: `1px solid ${colors.border}` }}>
              <span style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 20, color: colors.primary }}>{step.letter} · {step.title}</span>
              <p style={{ fontSize: 14, color: colors.muted, lineHeight: 1.6, margin: '10px 0 0' }}>{step.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px clamp(24px,5vw,64px) 0', display: 'flex', flexWrap: 'wrap', gap: 48 }}>
        <div style={{ flex: '1 1 280px' }}>
          <h2 style={{ ...gradientTitle, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 16px' }}>Stack técnico</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {techStack.map((t) => (
              <span key={t} style={{ padding: '9px 16px', borderRadius: 999, background: colors.bgSoft, border: `1px solid ${colors.border}`, fontSize: 14, color: colors.ink, fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>
        <div style={{ flex: '1 1 280px' }}>
          <h2 style={{ ...gradientTitle, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 16px' }}>Para quién es</h2>
          <ul style={{ margin: 0, paddingLeft: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {forWho.map((w) => (
              <li key={w} style={{ fontSize: 15, color: colors.muted, lineHeight: 1.6 }}>{w}</li>
            ))}
          </ul>
        </div>
      </div>

      {relatedIndustries?.length > 0 && (
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px clamp(24px,5vw,64px) 0' }}>
          <h2 style={{ ...gradientTitle, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 16px' }}>Industrias donde más lo aplicamos</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {relatedIndustries.map((ind) => (
              <Link key={ind.href} href={ind.href} style={{ padding: '10px 18px', borderRadius: 999, background: colors.bgSoft, border: `1px solid ${colors.border}`, fontSize: 14, color: colors.primary, fontWeight: 600, textDecoration: 'none' }}>
                {ind.label} →
              </Link>
            ))}
          </div>
        </div>
      )}

      <Faq items={faq} />
      <CtaBand text={`¿Quieres explorar cómo aplicar ${breadcrumbLabel.toLowerCase()} en tu empresa? Cuéntanos tu caso y conversemos sin compromiso.`} />
      <PageFooter />
    </div>
  );
}
