const baseUrl = 'https://adisoftco.com';

export default function sitemap() {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
