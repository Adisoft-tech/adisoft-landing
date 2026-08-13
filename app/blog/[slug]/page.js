import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageNav from '../../components/PageNav';
import PageFooter from '../../components/PageFooter';
import Breadcrumbs from '../../components/Breadcrumbs';
import Faq from '../../components/Faq';
import CtaBand from '../../components/CtaBand';
import { colors, gradientTitle, siteUrl } from '../../lib/theme';
import { posts, getPostBySlug } from '../lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.description, url: `/blog/${post.slug}`, type: 'article' },
  };
}

export default function BlogPost({ params }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    url: `${siteUrl}/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'AdiSoft', url: siteUrl },
    publisher: { '@type': 'Organization', name: 'AdiSoft', url: siteUrl, logo: { '@type': 'ImageObject', url: `${siteUrl}/adisoft-isotype.png` } },
  };

  return (
    <div style={{ background: '#ffffff', fontFamily: 'Inter,sans-serif', minHeight: '100vh', color: colors.ink }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <PageNav />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.title, href: `/blog/${post.slug}` }]} />

      <article style={{ maxWidth: 760, margin: '0 auto', padding: 'clamp(32px,5vw,56px) clamp(24px,5vw,64px) 0' }}>
        <span style={{ fontSize: 12, color: colors.primary, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase' }}>{post.category}</span>
        <h1 style={{ fontFamily: 'Fustat,sans-serif', fontWeight: 700, fontSize: 'clamp(28px,4vw,42px)', lineHeight: 1.15, letterSpacing: '-1.2px', margin: '14px 0 10px' }}>{post.title}</h1>
        <time dateTime={post.date} style={{ fontSize: 13, color: '#a0a0aa' }}>
          {new Date(post.date).toLocaleDateString('es-CO', { year: 'numeric', month: 'long', day: 'numeric' })}
        </time>
        <p style={{ fontSize: 18, color: colors.muted, lineHeight: 1.75, margin: '24px 0 0' }}>{post.intro}</p>

        {post.sections.map((s) => (
          <div key={s.heading} style={{ marginTop: 40 }}>
            <h2 style={{ ...gradientTitle, fontSize: 'clamp(20px,2.4vw,26px)', margin: '0 0 14px' }}>{s.heading}</h2>
            {s.paragraphs?.map((p, i) => (
              <p key={i} style={{ fontSize: 16, color: colors.muted, lineHeight: 1.8, margin: '0 0 14px' }}>{p}</p>
            ))}
            {s.list && (
              <ul style={{ margin: '0 0 14px', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.list.map((item, i) => (
                  <li key={i} style={{ fontSize: 16, color: colors.muted, lineHeight: 1.7 }}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {post.relatedLinks?.length > 0 && (
          <div style={{ marginTop: 48, padding: '20px 24px', borderRadius: 16, background: colors.bgSoft, display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
            <span style={{ fontSize: 14, color: colors.muted }}>Relacionado:</span>
            {post.relatedLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{ fontSize: 14, color: colors.primary, fontWeight: 600, textDecoration: 'none' }}>
                {l.label} →
              </Link>
            ))}
          </div>
        )}
      </article>

      {post.faq?.length > 0 && <Faq items={post.faq} title="Preguntas frecuentes" />}
      <CtaBand text="¿Quieres conversar sobre cómo aplicar esto en tu empresa? Escríbenos y lo revisamos juntos." />
      <PageFooter />
    </div>
  );
}
