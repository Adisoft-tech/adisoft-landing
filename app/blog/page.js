import Link from 'next/link';
import PageNav from '../components/PageNav';
import PageFooter from '../components/PageFooter';
import Breadcrumbs from '../components/Breadcrumbs';
import { colors, gradientTitle } from '../lib/theme';
import { posts } from './lib/posts';

const title = 'Blog de AdiSoft — Software, IA y tecnología para empresas';
const description = 'Artículos sobre desarrollo de software a medida, inteligencia artificial aplicada y tecnología para empresas en Colombia y LatAm.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/blog' },
  openGraph: { title, description, url: '/blog' },
};

export default function BlogIndex() {
  const sorted = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <div style={{ background: '#ffffff', fontFamily: 'Inter,sans-serif', minHeight: '100vh', color: colors.ink }}>
      <PageNav />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog' }]} />
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(24px,5vw,64px) 0' }}>
        <span style={{ fontSize: 13, color: colors.primary, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Blog</span>
        <h1 style={{ ...gradientTitle, fontSize: 'clamp(32px,4.2vw,48px)', margin: '14px 0 16px' }}>Software, IA y tecnología para empresas</h1>
        <p style={{ fontSize: 17, color: colors.muted, lineHeight: 1.7, maxWidth: 680, margin: 0 }}>
          Artículos prácticos sobre desarrollo de software, inteligencia artificial aplicada y decisiones de tecnología para empresas en Colombia y LatAm.
        </p>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '56px clamp(24px,5vw,64px) 96px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            style={{ display: 'block', padding: '28px 30px', borderRadius: 18, border: `1px solid ${colors.border}`, textDecoration: 'none' }}
          >
            <span style={{ fontSize: 12, color: colors.primary, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>{post.category}</span>
            <h2 style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 22, color: colors.ink, margin: '8px 0 10px', letterSpacing: '-0.5px' }}>{post.title}</h2>
            <p style={{ fontSize: 15, color: colors.muted, lineHeight: 1.6, margin: 0 }}>{post.description}</p>
          </Link>
        ))}
      </div>
      <PageFooter />
    </div>
  );
}
