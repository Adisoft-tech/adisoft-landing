import { colors } from '../lib/theme';

export default function PageFooter() {
  return (
    <div style={{ maxWidth: 1600, margin: '0 auto', padding: '32px clamp(24px,5vw,64px) 40px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid rgba(10,50,136,0.1)', paddingTop: 28 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/adisoft-isotype.png" alt="AdiSoft" style={{ height: 20, width: 'auto' }} />
          <span style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 16, color: colors.ink, letterSpacing: '-0.5px' }}>AdiSoft</span>
        </span>
        <span style={{ fontSize: 13, color: '#8a8a94' }}>© {new Date().getFullYear()} AdiSoft. Todos los derechos reservados.</span>
      </div>
    </div>
  );
}
