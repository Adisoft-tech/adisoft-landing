import Link from 'next/link';
import { colors } from '../lib/theme';

const navLinks = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Industrias', href: '/#industrias' },
  { label: 'Blog', href: '/blog' },
  { label: 'Casos de éxito', href: '/casos-de-exito' },
  { label: 'Contacto', href: '/#contacto' },
];

export default function PageNav() {
  return (
    <div style={{ position: 'sticky', top: 30, zIndex: 50, display: 'flex', justifyContent: 'center', width: '100%', padding: '0 16px' }}>
      <nav style={{ display: 'flex', alignItems: 'center', gap: 'clamp(12px,2.4vw,32px)', padding: '10px 10px 10px 22px', borderRadius: 16, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(50px)', WebkitBackdropFilter: 'blur(50px)', border: '1px solid rgba(0,0,0,0.1)', boxShadow: 'inset 0px 4px 4px 0px rgba(255,255,255,0.25)', width: 'fit-content', maxWidth: '94vw' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap', textDecoration: 'none' }}>
          <img src="/adisoft-isotype.png" alt="AdiSoft" style={{ height: 22, width: 'auto' }} />
          <span style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 19, color: colors.ink, letterSpacing: '-0.5px' }}>AdiSoft</span>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(10px,2vw,22px)', flexWrap: 'wrap' }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} style={{ color: colors.ink, fontSize: 14, fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', padding: '6px 4px' }}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="/#contacto" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 18px', borderRadius: 12, background: 'rgba(10,50,136,0.14)', border: '1px solid rgba(10,50,136,0.25)', color: colors.primary, fontWeight: 600, fontSize: 13, textDecoration: 'none', whiteSpace: 'nowrap' }}>
          Contáctanos
          <span style={{ display: 'inline-block', width: 6, height: 6, borderTop: `2px solid ${colors.primary}`, borderRight: `2px solid ${colors.primary}`, transform: 'rotate(45deg)' }} />
        </a>
      </nav>
    </div>
  );
}
