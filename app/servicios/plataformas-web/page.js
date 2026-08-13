import ServicePageTemplate from '../../components/ServicePageTemplate';

const title = 'Desarrollo de plataformas web a medida';
const description = 'Diseñamos y construimos plataformas web robustas y escalables: portales, dashboards internos, marketplaces y sistemas de gestión. React/Next.js en frontend, arquitectura cloud en backend.';

export const metadata = {
  title,
  description,
  alternates: { canonical: '/servicios/plataformas-web' },
  openGraph: { title, description, url: '/servicios/plataformas-web' },
};

const faq = [
  {
    q: '¿Qué tipo de plataformas web desarrolla AdiSoft?',
    a: 'Portales para clientes, dashboards internos de gestión, marketplaces, sistemas de reservas o solicitudes, y en general cualquier sistema web que tu operación necesite y que hoy no exista o no encaje con lo que hay en el mercado.',
  },
  {
    q: '¿La plataforma va a soportar el crecimiento de mi empresa?',
    a: 'Ese es justamente el objetivo de diseñar la arquitectura desde la fase de Diseño (D de ADIS): pensamos la base de datos, la infraestructura cloud y la estructura del código para que la plataforma pueda crecer en usuarios y funcionalidades sin tener que reescribirse desde cero.',
  },
  {
    q: '¿Puedo pedir cambios o nuevas funciones después del lanzamiento?',
    a: 'Sí. La fase de Soporte de ADIS incluye mejoras continuas — una plataforma web rara vez queda "terminada" el día del lanzamiento, sigue evolucionando con el negocio.',
  },
];

export default function Page() {
  return (
    <ServicePageTemplate
      path="/servicios/plataformas-web"
      breadcrumbLabel="Plataformas web"
      eyebrow="Servicios"
      h1="Plataformas web robustas y escalables"
      intro="Diseñamos y construimos sistemas y aplicaciones web pensadas para crecer con tu operación: desde portales de cara al cliente hasta herramientas internas de gestión."
      painPoints={[
        'Necesitas un portal o dashboard que centralice información que hoy está dispersa en varias herramientas.',
        'Tu sitio o sistema actual no se ve bien en móvil, es lento, o no está preparado para más usuarios de los que tenía cuando se construyó.',
        'Quieres una plataforma propia (marketplace, sistema de reservas, portal de solicitudes) en lugar de depender de una herramienta de terceros.',
        'Tu equipo pierde tiempo haciendo a mano procesos que una plataforma web podría automatizar.',
      ]}
      process={[
        { letter: 'A', title: 'Análisis', text: 'Entendemos quién va a usar la plataforma, qué necesita hacer y qué datos maneja hoy tu operación.' },
        { letter: 'D', title: 'Diseño', text: 'Arquitectura de la plataforma, modelo de datos, diseño UX/UI de cada flujo clave y cronograma de entregas.' },
        { letter: 'I', title: 'Implementación', text: 'Desarrollo iterativo con entregas parciales navegables, pruebas de carga y funcionales antes de salir a producción.' },
        { letter: 'S', title: 'Soporte', text: 'Monitoreo, mantenimiento y mejoras continuas una vez la plataforma está en producción.' },
      ]}
      techStack={['React / Next.js', 'Node.js', 'Python', 'SQL / NoSQL', 'AWS / Cloud']}
      forWho={[
        'Empresas que necesitan un portal o dashboard interno que no existe hoy en su operación.',
        'Negocios que quieren digitalizar un proceso completo (reservas, solicitudes, gestión de inventario) en una plataforma propia.',
        'Equipos que están limitados por las reglas de una herramienta de terceros y necesitan algo construido a su medida.',
      ]}
      relatedIndustries={[
        { href: '/industrias/turismo', label: 'Turismo' },
        { href: '/industrias/inmobiliario', label: 'Inmobiliario' },
        { href: '/industrias/retail', label: 'Retail' },
      ]}
      faq={faq}
    />
  );
}
