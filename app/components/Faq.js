import { colors, gradientTitle } from '../lib/theme';

export default function Faq({ items, title = 'Preguntas frecuentes' }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <div style={{ maxWidth: 1600, margin: '0 auto', padding: '96px clamp(24px,5vw,64px) 0' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <span style={{ fontSize: 13, color: colors.primary, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>FAQ</span>
      <h2 style={{ ...gradientTitle, fontSize: 'clamp(26px,3vw,36px)', margin: '12px 0 32px' }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22, maxWidth: 840 }}>
        {items.map((item) => (
          <div key={item.q} style={{ padding: '22px 26px', borderRadius: 16, border: `1px solid ${colors.border}`, background: '#ffffff' }}>
            <h3 style={{ fontWeight: 600, fontSize: 16, margin: '0 0 8px', color: colors.ink }}>{item.q}</h3>
            <p style={{ fontSize: 15, color: colors.muted, lineHeight: 1.7, margin: 0 }}>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
