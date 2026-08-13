# Estructura de campañas SEM — lista para activar, sin gasto (Fase 7)

**Presupuesto actual: $0.** Nada de esto se activa hasta que AdiSoft confirme presupuesto explícitamente. Este documento deja la estructura lista para que activar sea cuestión de subir campañas a Google Ads, no de diseñarlas desde cero.

**Bloqueante antes de activar pauta real:** no se debe mandar tráfico pago sin conversión medible. Hoy GA4 está conectado pero **sin ninguna propiedad creada** (ver auditoría Fase 1) — hay que crear la propiedad, el data stream de `adisoftco.com` y los eventos de conversión (envío de formulario, clic a WhatsApp/Instagram, clic a `hello@adisoftco.com`) antes de gastar un solo peso en Google Ads.

## Estructura: 4 campañas, una por servicio prioritario

Cada campaña manda tráfico a su página de servicio dedicada — nunca a la landing genérica.

### Campaña 1 — Desarrollo de software a medida
- **Landing:** `/servicios/desarrollo-software-a-medida`
- **Grupo de anuncios "Software a medida - genérico":** desarrollo de software a medida Colombia, empresa de software a medida, software a medida para empresas
- **Grupo de anuncios "Software a medida - ciudad":** software a medida Bogotá, software a medida Medellín, software a medida Cali
- **RSA (borrador):**
  - Títulos: "Software a Medida para tu Empresa" / "Un Aliado, No Solo un Proveedor" / "Análisis de Negocio Antes de Cotizar" / "+7 Años en LatAm" / "Habla con AdiSoft Hoy"
  - Descripciones: "Diseñamos software alrededor de tu operación real, no al revés. Análisis de negocio antes de proponer una solución técnica." / "Acompañamiento activo en cada etapa: diseño, avances y decisiones se construyen contigo."

### Campaña 2 — Plataformas web
- **Landing:** `/servicios/plataformas-web`
- **Grupo de anuncios:** desarrollo de plataformas web Colombia, dashboard interno a medida, sistema de gestión web a medida
- **RSA (borrador):**
  - Títulos: "Plataformas Web Escalables" / "Portales y Dashboards a Medida" / "Arquitectura Pensada para Crecer"
  - Descripciones: "Construimos la plataforma web que tu operación necesita, con arquitectura pensada para escalar." / "Desde portales de cliente hasta herramientas internas de gestión."

### Campaña 3 — Aplicaciones móviles
- **Landing:** `/servicios/aplicaciones-moviles`
- **Grupo de anuncios:** desarrollo de apps móviles Colombia, empresa desarrollo apps iOS Android, desarrollo app a medida
- **RSA (borrador):**
  - Títulos: "Apps iOS y Android a Medida" / "De la Idea a la Tienda de Apps" / "Nativo o Multiplataforma: Te Ayudamos a Elegir"
  - Descripciones: "Desarrollamos tu app para el caso de uso real de tu negocio, no una plantilla genérica." / "Acompañamiento hasta la publicación en App Store y Google Play."

### Campaña 4 — Inteligencia artificial aplicada
- **Landing:** `/servicios/inteligencia-artificial-aplicada`
- **Grupo de anuncios:** consultoría inteligencia artificial empresas Colombia, implementación de IA empresas, automatización con IA
- **RSA (borrador):**
  - Títulos: "IA Aplicada a tu Operación" / "Automatiza Procesos con IA" / "No un Piloto Aislado: IA Integrada"
  - Descripciones: "Integramos IA y LLMs a procesos reales de tu negocio, conectados a tus sistemas y datos." / "Empezamos por el proceso que más tiempo le quita a tu equipo."

## Palabras clave negativas (aplicar a las 4 campañas)

gratis, curso, cursos, empleo, trabajo, vacante, plantilla, tutorial, PDF, descargar, freelance, "cómo hacer", código abierto, open source, estudiante, tesis

## Presupuesto mínimo recomendado (orientativo)

No hay dato histórico de CPC/CPA propio todavía (cuenta sin gasto previo), así que esto es una referencia de arranque conservadora, no una proyección de resultados:

- Empezar con 1 campaña piloto (recomendado: **Desarrollo de software a medida**, es el servicio con mayor prioridad e intención comercial más directa).
- Presupuesto diario inicial sugerido: bajo, orientado a aprendizaje (recolectar 30-50 clics antes de sacar conclusiones), y escalar según CPA real observado — no fijar un número sin ver el primer ciclo de datos.
- Duración mínima de la fase piloto antes de decidir: suficiente para juntar señal de conversión real en GA4, no solo tráfico.

## Checklist antes de activar cualquier campaña

- [ ] Propiedad GA4 creada y data stream de `adisoftco.com` configurado
- [ ] Eventos de conversión disparando correctamente (probar en modo debug de GA4)
- [ ] Cada landing de servicio tiene CTA claro y medible (ya cumplido — ver Fase 8)
- [ ] Presupuesto confirmado explícitamente por AdiSoft (por escrito, no verbal)
- [ ] Negativas cargadas antes del primer día de campaña activa
