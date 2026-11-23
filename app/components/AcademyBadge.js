import { colors } from '../lib/theme';

// Pill "ACADEMY": marca madre intacta + etiqueta de línea.
// Borde y punto en teal de marca (#1FA397); texto en teal oscuro para contraste AA.
export default function AcademyBadge({ size = 'md', style }) {
  const small = size === 'sm';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: small ? 6 : 8,
        padding: small ? '3px 9px' : '5px 13px',
        borderRadius: 999,
        background: colors.academyTint,
        border: `1px solid ${colors.academy}`,
        color: colors.academyInk,
        fontFamily: 'Inter,sans-serif',
        fontWeight: 700,
        fontSize: small ? 10 : 12,
        letterSpacing: small ? 1.2 : 1.6,
        lineHeight: 1.2,
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
        ...style,
      }}
    >
      <span aria-hidden="true" style={{ width: small ? 5 : 6, height: small ? 5 : 6, borderRadius: '50%', background: colors.academy }} />
      Academy
    </span>
  );
}
