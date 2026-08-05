import './globals.css';

export const metadata = {
  title: 'AdiSoft — Consultora tecnológica en software e inteligencia artificial',
  description: 'Acompañamos a empresas de Latinoamérica a resolver problemas de negocio a través de la tecnología.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fustat:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, WebkitFontSmoothing: 'antialiased' }}>{children}</body>
    </html>
  );
}
