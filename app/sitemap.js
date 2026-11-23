import { posts } from './blog/lib/posts';

const baseUrl = 'https://www.adisoftco.com';

const staticRoutes = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/servicios/desarrollo-software-a-medida', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicios/plataformas-web', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicios/aplicaciones-moviles', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/servicios/inteligencia-artificial-aplicada', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/academy', priority: 0.7, changeFrequency: 'monthly' },
];

export default function sitemap() {
  const now = new Date();
  return [
    ...staticRoutes.map((r) => ({
      url: `${baseUrl}${r.path}`,
      lastModified: now,
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    })),
    ...posts.map((p) => ({
      url: `${baseUrl}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    })),
  ];
}
