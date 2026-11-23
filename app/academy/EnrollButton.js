'use client';
import { colors } from '../lib/theme';
import { trackEvent } from '../lib/analytics';

// Enlace-botón que lleva al formulario (#inscripcion) y le avisa qué interés preseleccionar.
// Funciona sin JS como ancla normal; con JS, además preselecciona el interés y el mensaje.
export default function EnrollButton({ label, interest, message, trackLabel, variant = 'primary', ariaLabel }) {
  const onClick = () => {
    window.dispatchEvent(new CustomEvent('academy:select', { detail: { interest, message } }));
    trackEvent('cta_click', { cta_label: trackLabel || 'academy_enroll', interest: interest || null });
  };

  const primary = variant === 'primary';
  return (
    <a
      href="#inscripcion"
      onClick={onClick}
      aria-label={ariaLabel}
      className="academy-btn"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        padding: '11px 18px',
        borderRadius: 12,
        fontWeight: 600,
        fontSize: 14,
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        background: primary ? colors.primary : 'rgba(10,50,136,0.08)',
        border: `1px solid ${primary ? colors.primary : 'rgba(10,50,136,0.22)'}`,
        color: primary ? '#ffffff' : colors.primary,
      }}
    >
      {label}
    </a>
  );
}
