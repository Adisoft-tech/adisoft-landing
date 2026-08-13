import IndustryPageTemplate from '../../components/IndustryPageTemplate';

const title = 'Software y apps para empresas de turismo';
const description = 'Plataformas de reservas, apps móviles y automatización para empresas de turismo: agencias, hoteles y operadores que necesitan digitalizar su operación.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/industrias/turismo' },
  openGraph: { title, description, url: '/industrias/turismo' },
};

const faq = [
  {
    q: '¿Desarrollan sistemas de reservas para turismo?',
    a: 'Sí, plataformas de reservas y disponibilidad son uno de los sistemas más comunes que construimos para el sector — a medida de tu operación, no una plantilla genérica.',
  },
  {
    q: '¿Tiene sentido una app móvil para un negocio de turismo pequeño?',
    a: 'Depende del volumen y del tipo de cliente. Antes de recomendar una app, evaluamos en la fase de Análisis si una plataforma web responsive resuelve el mismo problema con menos costo de mantenimiento — no vendemos una app porque sí.',
  },
];

export default function Page() {
  return (
    <IndustryPageTemplate
      breadcrumbLabel="Turismo"
      eyebrow="Industrias"
      h1="Tecnología para empresas de turismo"
      intro="Apoyamos a agencias, hoteles y operadores turísticos a digitalizar reservas, disponibilidad y la experiencia del viajero antes, durante y después del viaje."
      challenges={[
        { title: 'Reservas manuales', text: 'La disponibilidad y las reservas se gestionan por WhatsApp, correo o llamadas, con riesgo alto de errores y sobreventa.' },
        { title: 'Falta de visibilidad en tiempo real', text: 'Clientes y equipo comercial no tienen forma de ver disponibilidad actualizada al momento.' },
        { title: 'Procesos de pago y confirmación fragmentados', text: 'El pago, la confirmación y el itinerario del cliente viven en herramientas distintas sin conexión entre sí.' },
        { title: 'Estacionalidad difícil de planear', text: 'Sin datos centralizados, es difícil anticipar temporadas altas y ajustar oferta o personal a tiempo.' },
      ]}
      solutions={[
        'Plataformas de reservas y disponibilidad en tiempo real, propias del negocio.',
        'Apps móviles para el viajero cuando el caso de uso lo justifica (itinerarios, check-in, soporte en destino).',
        'Automatización de confirmaciones, recordatorios y seguimiento post-reserva.',
        'Integraciones con pasarelas de pago y otros sistemas que ya use el negocio.',
      ]}
      relatedServices={[
        { href: '/servicios/plataformas-web', label: 'Plataformas web' },
        { href: '/servicios/aplicaciones-moviles', label: 'Aplicaciones móviles' },
      ]}
      faq={faq}
    />
  );
}
