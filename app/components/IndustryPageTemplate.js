import Link from 'next/link';
import PageNav from './PageNav';
import PageFooter from './PageFooter';
import Breadcrumbs from './Breadcrumbs';
import Faq from './Faq';
import CtaBand from './CtaBand';
import { colors, gradientTitle } from '../lib/theme';

export default function IndustryPageTemplate({
  path,
  breadcrumbLabel,
  eyebrow,
  h1,
  intro,
  challenges,
  solutions,
  relatedServices,
  faq,
}) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#ffffff', fontFamily: 'Inter,sans-serif', minHeight: '100vh', color: colors.ink }}>
      <PageNav />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Industrias', href: '/#industrias' }, { label: breadcrumbLabel, href: path }]} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(24px,5vw,64px) 0' }}>
        <span style={{ fontSize: 13, color: colors.primary, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>{eyebrow}</span>
        <h1 style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 'clamp(32px,4.6vw,52px)', lineHeight: 1.12, letterSpacing: '-1.5px', color: colors.ink, margin: '14px 0 20px' }}>{h1}</h1>
        <p style={{ fontSize: 18, color: colors.muted, lineHeight: 1.7, maxWidth: 720, margin: 0 }}>{intro}</p>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '72px clamp(24px,5vw,64px) 0' }}>
        <h2 style={{ ...gradientTitle, fontSize: 'clamp(24px,2.8vw,32px)', margin: '0 0 24px' }}>Dolores típicos del sector</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 18 }}>
          {challenges.map((c) => (
            <div key={c.title} style={{ padding: 22, borderRadius: 16, border: `1px solid ${colors.border}` }}>
              <h3 style={{ fontWeight: 600, fontSize: 16, margin: '0 0 8px', color: colors.ink }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: colors.muted, lineHeight: 1.6, margin: 0 }}>{c.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px clamp(24px,5vw,64px) 0' }}>
        <h2 style={{ ...gradientTitle, fontSize: 'clamp(24px,2.8vw,32px)', margin: '0 0 24px' }}>Cómo lo resolvemos</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {solutions.map((s) => (
            <div key={s} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <span style={{ marginTop: 7, width: 7, height: 7, borderRadius: '50%', background: colors.primary, flexShrink: 0 }} />
              <p style={{ fontSize: 16, color: colors.muted, lineHeight: 1.7, margin: 0 }}>{s}</p>
            </div>
          ))}
        </div>
      </div>

      {relatedServices?.length > 0 && (
        <div style={{ maxWidth: 1000, margin: '0 auto', padding: '80px clamp(24px,5vw,64px) 0' }}>
          <h2 style={{ ...gradientTitle, fontSize: 'clamp(22px,2.6vw,28px)', margin: '0 0 16px' }}>Servicios relacionados</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {relatedServices.map((s) => (
              <Link key={s.href} href={s.href} style={{ padding: '10px 18px', borderRadius: 999, background: colors.bgSoft, border: `1px solid ${colors.border}`, fontSize: 14, color: colors.primary, fontWeight: 600, textDecoration: 'none' }}>
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      )}

      <Faq items={faq} />
      <CtaBand text={`¿Tu empresa de ${breadcrumbLabel.toLowerCase()} necesita resolver algo parecido? Cuéntanos tu caso y conversemos sin compromiso.`} />
      <PageFooter />
    </div>
  );
}
