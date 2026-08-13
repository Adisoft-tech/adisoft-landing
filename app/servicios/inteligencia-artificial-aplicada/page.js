import ServicePageTemplate from '../../components/ServicePageTemplate';

const title = 'Consultoría e implementación de IA aplicada para empresas';
const description = 'Integramos inteligencia artificial y LLMs a la operación real de tu empresa: automatización de tareas, agentes, análisis de datos. Diagnóstico de negocio antes de la solución técnica.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/servicios/inteligencia-artificial-aplicada' },
  openGraph: { title, description, url: '/servicios/inteligencia-artificial-aplicada' },
};

const faq = [
  {
    q: '¿Cómo implementar IA en una pyme sin un equipo de datos propio?',
    a: 'No hace falta tener un equipo de datos interno para empezar. En la fase de Análisis identificamos 1-2 procesos concretos donde la IA puede quitar trabajo manual real (por ejemplo, clasificar solicitudes, resumir información o responder preguntas frecuentes) y construimos sobre eso, en vez de partir de un proyecto de IA abstracto sin caso de uso claro.',
  },
  {
    q: '¿Qué diferencia hay entre "usar ChatGPT" e implementar IA aplicada en una empresa?',
    a: 'Usar una herramienta de IA genérica ayuda a una persona en tareas puntuales. Implementar IA aplicada significa integrar modelos de lenguaje o automatización inteligente directamente en tus sistemas y procesos — con tus datos, tus reglas de negocio y control sobre el resultado — para que el beneficio escale a todo el equipo, no a un usuario a la vez.',
  },
  {
    q: '¿Qué tipo de proyectos de IA hace AdiSoft?',
    a: 'Automatización de procesos con IA (clasificación, extracción de datos, generación de respuestas), agentes que ejecutan tareas dentro de tus sistemas, e integración de LLMs en productos o herramientas internas existentes.',
  },
];

export default function Page() {
  return (
    <ServicePageTemplate
      path="/servicios/inteligencia-artificial-aplicada"
      breadcrumbLabel="Inteligencia artificial aplicada"
      eyebrow="Servicios"
      h1="Inteligencia artificial aplicada a tu operación"
      intro="Integramos IA y LLMs a procesos reales de tu negocio — no un piloto aislado, sino automatización e inteligencia dentro de los sistemas que ya usas todos los días."
      painPoints={[
        'Tu equipo dedica horas a tareas repetitivas que podrían automatizarse con IA: clasificar, resumir, responder o extraer información.',
        'Ya probaste herramientas de IA genéricas pero no se conectan con tus sistemas ni con tus datos.',
        'Quieres explorar IA en tu empresa pero no sabes por dónde empezar ni qué proceso priorizar.',
        'Tienes mucha información dispersa (correos, tickets, documentos) y ninguna forma sistemática de extraer valor de ella.',
      ]}
      process={[
        { letter: 'A', title: 'Análisis', text: 'Identificamos junto a tu equipo qué proceso concreto se beneficia más de IA, y qué datos ya tienes disponibles para usarlo.' },
        { letter: 'D', title: 'Diseño', text: 'Definimos la arquitectura de la solución (modelo, integración, flujo de datos) y cómo se conecta con tus sistemas actuales.' },
        { letter: 'I', title: 'Implementación', text: 'Construimos e integramos la solución de forma iterativa, con validación de resultados en cada etapa.' },
        { letter: 'S', title: 'Soporte', text: 'Monitoreo del desempeño del modelo/solución en producción y ajustes continuos según el uso real.' },
      ]}
      techStack={['IA / LLMs', 'Python', 'Node.js', 'SQL / NoSQL', 'AWS / Cloud']}
      forWho={[
        'Empresas medianas-grandes con procesos manuales de alto volumen (soporte, clasificación, back office).',
        'Directores de TI evaluando cómo incorporar IA de forma responsable y medible, no como experimento aislado.',
        'Negocios con mucha información dispersa que hoy nadie está aprovechando.',
      ]}
      relatedIndustries={[
        { href: '/industrias/logistica', label: 'Transporte y logística' },
        { href: '/industrias/retail', label: 'Retail' },
      ]}
      faq={faq}
    />
  );
}
