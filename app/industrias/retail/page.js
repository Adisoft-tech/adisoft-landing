import IndustryPageTemplate from '../../components/IndustryPageTemplate';

const title = 'Software y automatización para empresas de retail';
const description = 'Plataformas de gestión, integraciones y automatización de procesos para empresas de retail: inventario, punto de venta, e-commerce y experiencia de cliente.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/industrias/retail' },
  openGraph: { title, description, url: '/industrias/retail' },
};

const faq = [
  {
    q: '¿Pueden integrar mi tienda online con mi sistema de inventario y punto de venta?',
    a: 'Sí, conectar sistemas que hoy funcionan por separado (e-commerce, inventario, punto de venta, contabilidad) es una de las integraciones más comunes que hacemos para retail.',
  },
  {
    q: '¿Vale la pena un sistema a medida si ya uso Shopify u otra plataforma de e-commerce?',
    a: 'No siempre. Si tu operación encaja bien en las reglas de una plataforma como Shopify, lo honesto es que la sigas usando. Un desarrollo a medida tiene sentido cuando necesitas lógica de negocio, integraciones o procesos internos que esas plataformas no permiten personalizar.',
  },
];

export default function Page() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Retail"
      eyebrow="Industrias"
      h1="Tecnología para empresas de retail"
      intro="Ayudamos a empresas de retail a conectar inventario, ventas y experiencia de cliente en sistemas que realmente se hablan entre sí."
      challenges={[
        { title: 'Inventario y ventas desconectados', text: 'El inventario, el punto de venta y la tienda online funcionan como sistemas separados que hay que actualizar a mano.' },
        { title: 'Falta de visibilidad multi-canal', text: 'No hay una vista única de qué se vendió, dónde y con qué margen entre canales físicos y digitales.' },
        { title: 'Procesos manuales que no escalan', text: 'Tareas como actualizar precios, stock o promociones se hacen a mano en cada canal.' },
        { title: 'Herramientas genéricas que no encajan', text: 'Las plataformas de e-commerce estándar no soportan reglas de negocio específicas de tu operación (precios por volumen, canales exclusivos, lógicas de descuento particulares).' },
      ]}
      solutions={[
        'Integraciones entre e-commerce, inventario, punto de venta y contabilidad.',
        'Plataformas y dashboards a medida para visibilidad de ventas multi-canal.',
        'Automatización de procesos repetitivos: actualización de stock, precios y promociones.',
        'Desarrollo a medida cuando las reglas de tu negocio no caben en una plataforma genérica.',
      ]}
      relatedServices={[
        { href: '/servicios/plataformas-web', label: 'Plataformas web' },
        { href: '/servicios/inteligencia-artificial-aplicada', label: 'Inteligencia artificial aplicada' },
      ]}
      faq={faq}
    />
  );
}
