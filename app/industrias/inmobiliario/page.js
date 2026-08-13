import IndustryPageTemplate from '../../components/IndustryPageTemplate';

const title = 'Software y tecnología para empresas inmobiliarias';
const description = 'Desarrollamos software a medida, plataformas web y automatización para inmobiliarias: gestión de inventario de propiedades, portales de clientes y procesos comerciales.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/industrias/inmobiliario' },
  openGraph: { title, description, url: '/industrias/inmobiliario' },
};

const faq = [
  {
    q: '¿Qué tipo de software necesita una inmobiliaria?',
    a: 'Depende de dónde esté el cuello de botella: puede ser un sistema para gestionar el inventario de propiedades, un portal para que clientes vean disponibilidad en tiempo real, o automatización del seguimiento comercial. Lo definimos en la fase de Análisis según tu operación específica.',
  },
  {
    q: '¿Pueden integrar el sistema con portales inmobiliarios donde ya publico?',
    a: 'Sí, las integraciones entre sistemas son parte de lo que hacemos — conectamos tu plataforma con portales externos, CRM u otras herramientas que ya uses.',
  },
];

export default function Page() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Inmobiliario"
      eyebrow="Industrias"
      h1="Tecnología para empresas inmobiliarias"
      intro="Ayudamos a empresas del sector inmobiliario a digitalizar la gestión de propiedades, el seguimiento comercial y la relación con clientes, con software construido para su forma real de operar."
      challenges={[
        { title: 'Inventario disperso', text: 'La disponibilidad de propiedades vive en hojas de cálculo, WhatsApp o el conocimiento de una sola persona del equipo.' },
        { title: 'Seguimiento comercial manual', text: 'Los leads y visitas se siguen a mano, sin visibilidad clara de en qué etapa está cada negociación.' },
        { title: 'Portales que no se hablan entre sí', text: 'La información de propiedades se actualiza por separado en varios portales y en el sitio propio.' },
        { title: 'Procesos de firma y documentación lentos', text: 'Contratos, promesas y documentación legal se mueven por correo sin un flujo claro de aprobación.' },
      ]}
      solutions={[
        'Plataformas web para centralizar el inventario de propiedades y su disponibilidad en tiempo real.',
        'Portales de cliente donde pueden ver propiedades, agendar visitas o dar seguimiento a su proceso.',
        'Integraciones entre tu sistema interno y los portales inmobiliarios donde publicas.',
        'Automatización del seguimiento comercial para no perder oportunidades por falta de continuidad.',
      ]}
      relatedServices={[
        { href: '/servicios/plataformas-web', label: 'Plataformas web' },
        { href: '/servicios/desarrollo-software-a-medida', label: 'Desarrollo de software a medida' },
      ]}
      faq={faq}
    />
  );
}
