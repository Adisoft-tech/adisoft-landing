import ServicePageTemplate from '../../components/ServicePageTemplate';

const title = 'Desarrollo de aplicaciones móviles iOS y Android';
const description = 'Desarrollamos apps móviles nativas y multiplataforma para iOS y Android. Desde el análisis del caso de uso hasta el soporte post-lanzamiento, con metodología ADIS.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/servicios/aplicaciones-moviles' },
  openGraph: { title, description, url: '/servicios/aplicaciones-moviles' },
};

const faq = [
  {
    q: '¿Cuánto cuesta desarrollar una app en Colombia?',
    a: 'Depende del número de pantallas, si necesita backend propio, integraciones (pagos, mapas, notificaciones) y si se publica en una o dos tiendas (iOS y Android). Dimensionamos esto en la fase de Análisis antes de dar una propuesta concreta, en vez de estimar en el aire.',
  },
  {
    q: '¿Hacen apps nativas o multiplataforma?',
    a: 'Evaluamos caso por caso. Si tu app depende mucho de funciones específicas del dispositivo o necesita el mejor rendimiento posible, recomendamos nativo. Si priorizas velocidad de desarrollo y mantener una sola base de código para iOS y Android, multiplataforma suele ser la mejor opción. Te ayudamos a decidir según tu caso, no aplicamos una regla única.',
  },
  {
    q: '¿Se encargan de publicar la app en App Store y Google Play?',
    a: 'Sí, acompañamos el proceso de publicación en ambas tiendas como parte de la implementación.',
  },
];

export default function Page() {
  return (
    <ServicePageTemplate
      path="/servicios/aplicaciones-moviles"
      breadcrumbLabel="Aplicaciones móviles"
      eyebrow="Servicios"
      h1="Aplicaciones móviles para iOS y Android"
      intro="Desarrollamos apps nativas y multiplataforma pensadas para el caso de uso real de tu negocio, no para una plantilla genérica de app store."
      painPoints={[
        'Tu producto o servicio necesita estar en el celular de tus usuarios, no solo en un sitio web.',
        'Tienes una idea de app validada pero no un equipo técnico interno para construirla.',
        'Tu app actual tiene mala calificación, es lenta o quedó desactualizada frente a versiones nuevas de iOS/Android.',
        'Necesitas una app interna para tu equipo de campo, ventas o logística — no una app de consumo masivo.',
      ]}
      process={[
        { letter: 'A', title: 'Análisis', text: 'Definimos el caso de uso, el público de la app y si conviene nativo o multiplataforma según tus prioridades.' },
        { letter: 'D', title: 'Diseño', text: 'Arquitectura de la app y del backend si aplica, diseño UX/UI de cada pantalla y flujo, cronograma de entregas.' },
        { letter: 'I', title: 'Implementación', text: 'Desarrollo iterativo con builds que puedes probar en tu propio dispositivo, pruebas de calidad y publicación en tienda.' },
        { letter: 'S', title: 'Soporte', text: 'Mantenimiento frente a nuevas versiones de iOS/Android, monitoreo y mejoras continuas post-lanzamiento.' },
      ]}
      techStack={['iOS', 'Android', 'React / Next.js', 'Node.js', 'AWS / Cloud']}
      forWho={[
        'Startups y fundadores de producto digital que necesitan construir su app desde cero.',
        'Empresas que quieren una app interna para equipos de campo, ventas o logística.',
        'Negocios que ya tienen una app y necesitan modernizarla o rehacerla.',
      ]}
      relatedIndustries={[
        { href: '/industrias/turismo', label: 'Turismo' },
        { href: '/industrias/retail', label: 'Retail' },
        { href: '/industrias/logistica', label: 'Transporte y logística' },
      ]}
      faq={faq}
    />
  );
}
