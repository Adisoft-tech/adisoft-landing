import IndustryPageTemplate from '../../components/IndustryPageTemplate';

const title = 'Software y automatización para transporte y logística';
const description = 'Desarrollamos software a medida e IA aplicada para empresas de transporte y logística: seguimiento de flotas, automatización de procesos operativos e integraciones.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/industrias/logistica' },
  openGraph: { title, description, url: '/industrias/logistica' },
};

const faq = [
  {
    q: '¿Cómo automatizar procesos de logística con IA?',
    a: 'Los casos más comunes son clasificación automática de solicitudes o incidencias, optimización de asignación de rutas o recursos, y extracción de datos desde documentos (guías, facturas, órdenes). Priorizamos según qué proceso manual le quita más tiempo a tu equipo.',
  },
  {
    q: '¿Pueden integrar el sistema con las plataformas de mis transportadoras o clientes?',
    a: 'Sí, las integraciones entre sistemas de distintos actores de la cadena (transportadoras, clientes, ERP interno) son parte central de lo que hacemos en logística.',
  },
];

export default function Page() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Transporte y logística"
      eyebrow="Industrias"
      h1="Tecnología para transporte y logística"
      intro="Ayudamos a empresas de transporte y logística a digitalizar operación, seguimiento y coordinación entre los distintos actores de la cadena."
      challenges={[
        { title: 'Procesos operativos manuales', text: 'Asignación de rutas, seguimiento de envíos o gestión de incidencias se maneja a mano o en herramientas dispersas.' },
        { title: 'Falta de visibilidad en tiempo real', text: 'Clientes internos o externos no tienen forma clara de saber en qué estado está un envío o una operación.' },
        { title: 'Sistemas que no se integran', text: 'Transportadoras, clientes y el ERP interno operan en plataformas separadas sin comunicación automática.' },
        { title: 'Volumen de documentación', text: 'Guías, facturas y órdenes se procesan manualmente, consumiendo tiempo del equipo que podría automatizarse.' },
      ]}
      solutions={[
        'Software a medida para seguimiento operativo y visibilidad en tiempo real.',
        'Automatización de procesos repetitivos con IA (clasificación, extracción de datos de documentos).',
        'Integraciones entre tu ERP, transportadoras y sistemas de clientes.',
        'Dashboards de operación para tomar decisiones con datos centralizados, no dispersos.',
      ]}
      relatedServices={[
        { href: '/servicios/desarrollo-software-a-medida', label: 'Desarrollo de software a medida' },
        { href: '/servicios/inteligencia-artificial-aplicada', label: 'Inteligencia artificial aplicada' },
      ]}
      faq={faq}
    />
  );
}
