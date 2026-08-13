import Script from 'next/script';
import './globals.css';

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const siteUrl = 'https://adisoftco.com';
const siteName = 'AdiSoft';
const title = 'AdiSoft — Consultora tecnológica en software e inteligencia artificial';
const description = 'Consultora tecnológica con +7 años en LatAm. Desarrollo de software a medida, plataformas web, apps móviles e inteligencia artificial aplicada. Un aliado, no solo un proveedor.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s | AdiSoft' },
  description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName,
    title,
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  alternateName: 'AdiSoft Technologies',
  url: siteUrl,
  logo: `${siteUrl}/adisoft-isotype.png`,
  description,
  email: 'hello@adisoftco.com',
  sameAs: ['https://instagram.com/adisoft.tech'],
  areaServed: ['Colombia', 'Latinoamérica'],
  slogan: 'Un aliado, no solo un proveedor',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fustat:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {gaMeasurementId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');`}
            </Script>
          </>
        )}
      </head>
      <body style={{ margin: 0, WebkitFontSmoothing: 'antialiased' }}>{children}</body>
    </html>
  );
}
