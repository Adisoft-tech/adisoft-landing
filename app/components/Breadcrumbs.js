import Link from 'next/link';
import { colors, siteUrl } from '../lib/theme';

export default function Breadcrumbs({ items }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
      .filter((item) => item.href)
      .map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        item: `${siteUrl}${item.href}`,
      })),
  };

  return (
    <nav aria-label="breadcrumb" style={{ maxWidth: 1600, margin: '28px auto 0', padding: '0 clamp(24px,5vw,64px)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ol style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center', listStyle: 'none', margin: 0, padding: 0, fontSize: 13, color: colors.muted }}>
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.href || item.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              {i > 0 && <span style={{ opacity: 0.5 }}>/</span>}
              {item.href && !isLast ? (
                <Link href={item.href} style={{ color: colors.muted, textDecoration: 'none' }}>
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: colors.ink, fontWeight: 500 }}>{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
