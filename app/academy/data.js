// Contenido de AdiSoft Academy.
//
// TODO: todo lo que está en este archivo es contenido de EJEMPLO / placeholder.
// Reemplazar por cursos, fechas, precios y duraciones reales antes de promocionar la página.
// No se inventan fechas ni precios: lo que no está definido se muestra como
// "Próximamente", "Gratis" o "Cotización".

// Opciones del selector "¿Qué te interesa?" del formulario.
// El `value` viaja al endpoint /api/academy (que valida contra esta misma lista).
export const interestOptions = [
  { value: 'curso', label: 'Un curso o webinar específico' },
  { value: 'diagnostico-ia', label: 'Diagnóstico de IA para mi empresa' },
  { value: 'in-company', label: 'Capacitación para mi equipo' },
  { value: 'otro', label: 'Otro' },
];

export const benefits = [
  {
    title: 'Aprende con quien ya construye software en producción',
    text: 'Quienes enseñan son el equipo que diseña, desarrolla y mantiene plataformas, apps e IA para empresas de Colombia y LatAm.',
  },
  {
    title: 'Formación práctica, no solo teoría',
    text: 'Casos reales, ejercicios y herramientas que puedes aplicar en tu operación desde la semana siguiente.',
  },
  {
    title: 'De un webinar gratis a un proyecto completo',
    text: 'Empiezas por lo gratuito, sigues con un curso o un diagnóstico, y si lo necesitas, construimos contigo. Sin cambiar de interlocutor.',
  },
  {
    title: 'Un aliado, no solo un proveedor',
    text: 'Es la misma forma de trabajar de AdiSoft: escuchamos primero y te acompañamos también después de la sesión.',
  },
];

// `icon` es el nombre de un ícono definido en AcademyIcon (ver page.js).
// TODO: confirmar duración real de cada formato.
export const formats = [
  {
    icon: 'webinar',
    name: 'Webinars gratuitos',
    duration: '45–60 min (aprox.)',
    audience: 'Líderes y equipos que quieren entender qué es posible con software e IA.',
    price: 'Gratis',
    cta: 'Quiero enterarme',
    interest: 'curso',
    message: 'Quiero enterarme de los próximos webinars gratuitos.',
  },
  {
    icon: 'course',
    name: 'Cursos cortos',
    duration: '2–4 sesiones (aprox.)',
    audience: 'Profesionales técnicos y de negocio que prefieren aprender haciendo.',
    price: 'Próximamente',
    cta: 'Avísenme cuando abran',
    interest: 'curso',
    message: 'Quiero que me avisen cuando abran los próximos cursos cortos.',
  },
  {
    icon: 'team',
    name: 'Capacitación in-company',
    duration: 'A convenir según el alcance',
    audience: 'Empresas que quieren formar a su equipo con su propio contexto y sus propios datos.',
    price: 'Cotización',
    cta: 'Pedir cotización',
    interest: 'in-company',
    message: 'Quiero cotizar una capacitación para mi equipo.',
  },
  {
    icon: 'diagnostic',
    name: 'Consultoría de diagnóstico',
    duration: 'A convenir según el alcance',
    audience: 'Empresas que quieren saber dónde aplicar IA o software antes de invertir.',
    price: 'Cotización',
    cta: 'Pedir diagnóstico',
    interest: 'diagnostico-ia',
    message: 'Quiero un diagnóstico de IA para mi empresa.',
  },
];

// TODO: reemplazar con cursos reales. Los títulos son ilustrativos.
// Cuando haya fecha real, usar `date: '12 de marzo, 7:00 p. m. (COT)'`.
export const events = [
  {
    title: 'Introducción a la IA aplicada al negocio',
    format: 'Webinar gratuito',
    date: 'Próximamente',
    text: 'Qué puede hacer hoy la IA por una empresa mediana, y por dónde empezar sin gastar de más.',
  },
  {
    title: 'Automatiza procesos con IA: primeros pasos',
    format: 'Curso corto',
    date: 'Próximamente',
    text: 'Identifica tareas repetitivas en tu equipo y aprende a automatizarlas con herramientas actuales.',
  },
  {
    title: 'Software a medida o SaaS: cómo decidir',
    format: 'Webinar gratuito',
    date: 'Próximamente',
    text: 'Un marco simple para elegir entre construir, comprar o combinar, según tu operación.',
  },
  {
    title: 'Next.js para equipos de producto',
    format: 'Curso corto',
    date: 'Próximamente',
    text: 'Del concepto a una plataforma web real: estructura, rendimiento y buenas prácticas para trabajar en equipo.',
  },
  {
    title: 'Meetup AdiSoft: tecnología para el turismo',
    format: 'Meetup',
    date: 'Próximamente',
    text: 'Una conversación abierta sobre reservas, personalización e IA en el sector turístico.',
  },
  {
    title: 'Diagnóstico exprés de IA para tu empresa',
    format: 'Consultoría de diagnóstico',
    date: 'Próximamente',
    text: 'Una sesión para mapear oportunidades de IA en tu operación y priorizar por impacto.',
  },
];

// Pasos de la "ruta Academy" que se muestra en el hero.
export const journey = [
  { title: 'Webinar gratuito', text: 'Entiendes qué es posible.' },
  { title: 'Curso o taller', text: 'Aprendes haciendo, con tu equipo.' },
  { title: 'Diagnóstico', text: 'Priorizas dónde aplicarlo en tu empresa.' },
  { title: 'Proyecto a la medida', text: 'Lo construimos contigo, con la metodología ADIS.' },
];

// TODO: confirmar con el equipo las políticas reales (modalidad, certificados, etc.) antes de publicar.
export const faq = [
  {
    q: '¿Necesito saber programar?',
    a: 'No para los webinars ni para los cursos de IA aplicada al negocio: están pensados para líderes, equipos de operaciones y perfiles no técnicos. Los cursos técnicos indican en su descripción el nivel previo que se recomienda.',
  },
  {
    q: '¿Los cursos son presenciales o en línea?',
    a: 'Los webinars y los cursos abiertos son en línea y en vivo, para que puedas conectarte desde cualquier ciudad de LatAm. Las capacitaciones in-company las acordamos contigo: en línea o en tu oficina.',
  },
  {
    q: '¿Puedo pedir una capacitación solo para mi equipo?',
    a: 'Sí. Es el formato in-company: definimos contigo los temas, el nivel y el calendario, y podemos trabajar con ejemplos y datos de tu propia operación. Cuéntanos tu caso en el formulario y te enviamos una cotización.',
  },
  {
    q: '¿Los webinars realmente son gratuitos?',
    a: 'Sí. Los webinars son abiertos y sin costo: es nuestra forma de compartir lo que sabemos y de que nos conozcas antes de decidir si quieres dar un paso más.',
  },
  {
    q: '¿Cómo me entero de las próximas fechas?',
    a: 'Déjanos tus datos en el formulario de esta página indicando qué te interesa, y te escribiremos cuando abramos inscripciones. También puedes escribirnos a hello@adisoftco.com.',
  },
];
