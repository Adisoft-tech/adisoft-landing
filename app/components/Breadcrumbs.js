import Link from 'next/link';
import { colors } from '../lib/theme';

export default function Breadcrumbs({ items }) {
  return (
    <nav aria-label="breadcrumb" style={{ maxWidth: 1600, margin: '28px auto 0', padding: '0 clamp(24px,5vw,64px)' }}>
      <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', listStyle: 'none', margin: 0, padding: 0, fontSize: 13, color: colors.muted }}>
        {items.map((item, i) => (
          <li key={item.href || item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {i > 0 && <span style={{ opacity: 0.5 }}>/</span>}
            {item.href ? (
              <Link href={item.href} style={{ color: colors.muted, textDecoration: 'none' }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: colors.ink, fontWeight: 500 }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
