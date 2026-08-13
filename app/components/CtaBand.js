import { colors } from '../lib/theme';

export default function CtaBand({ title = 'Hablemos de tu proyecto', text }) {
  return (
    <div id="contacto-cta" style={{ maxWidth: 1600, margin: '96px auto 0', padding: '0 clamp(24px,5vw,64px)' }}>
      <div style={{ borderRadius: 24, background: 'rgba(10,50,136,0.9)', padding: 'clamp(36px,5vw,56px)', display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 520 }}>
          <h2 style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 'clamp(24px,3vw,32px)', letterSpacing: '-1px', color: '#ffffff', margin: '0 0 10px', lineHeight: 1.25 }}>{title}</h2>
          {text && <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, margin: 0 }}>{text}</p>}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
          <a href="/#contacto" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 26px', borderRadius: 14, background: '#ffffff', color: colors.primary, fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
            Hablemos de tu proyecto
          </a>
          <a href="mailto:hello@adisoftco.com" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '15px 26px', borderRadius: 14, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.3)', color: '#ffffff', fontWeight: 600, fontSize: 15, textDecoration: 'none' }}>
            hello@adisoftco.com
          </a>
        </div>
      </div>
    </div>
  );
}
