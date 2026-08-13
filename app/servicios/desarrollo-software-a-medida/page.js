import ServicePageTemplate from '../../components/ServicePageTemplate';

const title = 'Desarrollo de software a medida en Colombia';
const description = 'Diseñamos y desarrollamos software a medida para empresas colombianas: sistemas que se adaptan a tu operación, no al revés. Análisis de negocio, arquitectura, desarrollo iterativo y soporte.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/servicios/desarrollo-software-a-medida' },
  openGraph: { title, description, url: '/servicios/desarrollo-software-a-medida' },
};

const faq = [
  {
    q: '¿Cuánto cuesta desarrollar un software a medida en Colombia?',
    a: 'Depende del alcance: número de módulos, integraciones con otros sistemas, complejidad de la lógica de negocio y plazos. No damos una cifra genérica porque cada proyecto es distinto — en la fase de Análisis (A de ADIS) dimensionamos el alcance contigo y entregamos una propuesta con cronograma y costo antes de comprometer nada.',
  },
  {
    q: '¿Cuánto se demora un proyecto de software a medida?',
    a: 'Varía según el alcance. Trabajamos con entregas parciales verificables durante la fase de Implementación, así que ves avances funcionando desde las primeras semanas en vez de esperar a un único lanzamiento final.',
  },
  {
    q: '¿Qué diferencia hay entre software a medida y un SaaS genérico?',
    a: 'Un SaaS genérico está diseñado para el caso de uso promedio de muchas empresas: es rápido de adoptar pero obliga a tu operación a adaptarse a sus reglas. El software a medida se construye alrededor de tus procesos reales, tus reglas de negocio y tus sistemas existentes — tiene más sentido cuando el proceso que quieres resolver es específico de tu empresa o cuando ya evaluaste herramientas genéricas y ninguna encaja.',
  },
  {
    q: '¿AdiSoft da soporte después de lanzar el software?',
    a: 'Sí. La S de nuestra metodología ADIS es justamente eso: acompañamiento post-lanzamiento, monitoreo y mejoras continuas. No entregamos el proyecto y desaparecemos.',
  },
];

export default function Page() {
  return (
    <ServicePageTemplate
      path="/servicios/desarrollo-software-a-medida"
      breadcrumbLabel="Desarrollo de software a medida"
      eyebrow="Servicios"
      h1="Desarrollo de software a medida para empresas colombianas"
      intro="Construimos sistemas diseñados específicamente para tu operación, no plantillas genéricas que te obligan a cambiar tus procesos. Empezamos por entender tu negocio antes de escribir una sola línea de código."
      painPoints={[
        'Tu proceso actual depende de hojas de cálculo, WhatsApp o sistemas que no se hablan entre sí.',
        'Ya evaluaste software genérico (SaaS) del mercado y ninguno se ajusta a cómo realmente opera tu empresa.',
        'Tienes un sistema legacy que funciona pero no escala, no se integra con nada nuevo o nadie del equipo actual lo entiende a fondo.',
        'Necesitas una herramienta interna (backoffice, dashboard, gestor de procesos) que hoy no existe en el mercado tal como la necesitas.',
      ]}
      process={[
        { letter: 'A', title: 'Análisis', text: 'Levantamiento de requerimientos con tu equipo, diagnóstico técnico y de negocio, alcance y objetivos claros antes de cotizar.' },
        { letter: 'D', title: 'Diseño', text: 'Arquitectura del sistema, diseño de base de datos, UX/UI de las pantallas clave, cronograma de entregas.' },
        { letter: 'I', title: 'Implementación', text: 'Desarrollo iterativo con entregas parciales que puedes probar, pruebas funcionales y control de calidad en cada etapa.' },
        { letter: 'S', title: 'Soporte', text: 'Acompañamiento post-lanzamiento, monitoreo del sistema en producción y mejoras continuas según el uso real.' },
      ]}
      techStack={['React / Next.js', 'Node.js', 'Python', 'SQL / NoSQL', 'AWS / Cloud']}
      forWho={[
        'Pymes en crecimiento con procesos que ya no caben en una hoja de cálculo.',
        'Empresas con un proceso manual doloroso y repetitivo dentro de logística, salud, educación u otro sector.',
        'Equipos de TI que necesitan una herramienta interna a medida en lugar de forzar un SaaS genérico.',
      ]}
      relatedIndustries={[
        { href: '/industrias/logistica', label: 'Transporte y logística' },
        { href: '/industrias/retail', label: 'Retail' },
        { href: '/industrias/inmobiliario', label: 'Inmobiliario' },
      ]}
      faq={faq}
    />
  );
}
