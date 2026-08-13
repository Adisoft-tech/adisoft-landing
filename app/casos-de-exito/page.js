import PageNav from '../components/PageNav';
import PageFooter from '../components/PageFooter';
import Breadcrumbs from '../components/Breadcrumbs';
import CtaBand from '../components/CtaBand';
import { colors, gradientTitle } from '../lib/theme';

const title = 'Casos de éxito';
const description = 'Empresas que confían en AdiSoft para su desarrollo de software, plataformas web e inteligencia artificial aplicada.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/casos-de-exito' },
  openGraph: { title, description, url: '/casos-de-exito' },
};

const logoFiles = ['comfandi', 'kfc', 'gps-trackit', 'ansira', 'hylink', 'atmos', 'eduku', 'sociedad-cardiologia', 'miruta'];
const clientNames = {
  comfandi: 'Comfandi',
  kfc: 'KFC',
  'gps-trackit': 'GPS Trackit',
  ansira: 'Ansira',
  hylink: 'Hylink',
  atmos: 'Atmos',
  eduku: 'Eduku',
  'sociedad-cardiologia': 'Sociedad de Cardiología',
  miruta: 'Miruta',
};

export default function Page() {
  return (
    <div style={{ background: '#ffffff', fontFamily: 'Inter,sans-serif', minHeight: '100vh', color: colors.ink }}>
      <PageNav />
      <Breadcrumbs items={[{ label: 'Inicio', href: '/' }, { label: 'Casos de éxito', href: '/casos-de-exito' }]} />

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(24px,5vw,64px) 0' }}>
        <span style={{ fontSize: 13, color: colors.primary, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase' }}>Casos de éxito</span>
        <h1 style={{ ...gradientTitle, fontSize: 'clamp(32px,4.2vw,48px)', margin: '14px 0 16px' }}>Empresas que confían en AdiSoft</h1>
        <p style={{ fontSize: 17, color: colors.muted, lineHeight: 1.7, maxWidth: 680, margin: 0 }}>
          Hemos trabajado con empresas de distintos sectores e industrias en Colombia y LatAm en proyectos de desarrollo de software, plataformas web e inteligencia artificial aplicada.
        </p>
      </div>

      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '56px clamp(24px,5vw,64px) 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 24, alignItems: 'center', padding: '32px', borderRadius: 20, background: colors.bgSoft, border: `1px solid ${colors.border}` }}>
          {logoFiles.map((name) => (
            <img key={name} src={`/logos/${name}.png`} alt={`Logo de ${clientNames[name]}`} loading="lazy" style={{ height: 48, width: 'auto', objectFit: 'contain', margin: '0 auto' }} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '72px clamp(24px,5vw,64px) 0' }}>
        <div style={{ padding: '28px 30px', borderRadius: 18, border: `1px dashed ${colors.border}`, background: '#fffef7' }}>
          <h2 style={{ fontWeight: 600, fontSize: 18, margin: '0 0 10px', color: colors.ink }}>Estamos documentando resultados medibles de estos proyectos</h2>
          <p style={{ fontSize: 15, color: colors.muted, lineHeight: 1.7, margin: 0 }}>
            Preferimos publicar cifras reales y verificadas antes que estimaciones genéricas. Estamos trabajando con cada cliente para documentar el impacto concreto de estos proyectos (tiempo ahorrado, adopción, reducción de errores) y los iremos publicando aquí a medida que estén listos.
          </p>
        </div>
      </div>

      <CtaBand text="¿Quieres ser el próximo caso de éxito? Cuéntanos tu proyecto y conversemos sin compromiso." />
      <PageFooter />
    </div>
  );
}
