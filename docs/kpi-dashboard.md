# KPIs y reporte mensual — AdiSoft (Fase 14)

**Estado actual: sin línea base.** Ninguno de los dos números de esta sección existe todavía porque:
- Google Search Console: propiedad registrada (`adisoftco.com`) pero **pendiente de verificación** (ver Fase 1) — sin esto, cero datos de impresiones/clics/posición.
- GA4: conexión activa pero **sin propiedad ni data stream creados** (ver Fase 1 y Fase 7) — sin esto, cero datos de tráfico ni de conversión.

No hay forma honesta de reportar una línea base hasta que estos dos bloqueantes se resuelvan. Este documento define **qué** se va a medir y **cómo**, para que el primer reporte real (una vez haya datos) sea solo cuestión de llenar la plantilla de abajo, no de diseñarla desde cero.

## Bloqueantes a resolver antes del primer reporte

1. Verificar propiedad en Search Console (el cliente necesita completar la verificación por etiqueta HTML o DNS — instrucciones en el resumen de Fase 1).
2. Crear propiedad GA4 + data stream de `adisoftco.com` en analytics.google.com, y configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` en el entorno de producción (ver `.env.example`).
3. Confirmar que los eventos `form_submit`, `contact_click` y `cta_click` (ya instrumentados en el código, Fase 8) llegan correctamente a GA4 en modo debug.
4. Enviar `sitemap.xml` en Search Console una vez esté verificado.

## KPIs a trackear mensualmente

| KPI | Fuente | Cómo se mide |
|---|---|---|
| Impresiones y clics orgánicos por cluster de keyword | Search Console | Rendimiento > Consultas, filtrado por los clusters de `docs/seo-keywords.md` |
| Posición promedio de keywords prioritarias | Search Console | Rendimiento > Consultas, columna "Posición" por keyword del cluster transaccional |
| Tráfico orgánico total y por página de servicio | GA4 | Informes > Adquisición > Adquisición de tráfico, segmentado por canal orgánico y por página de destino |
| Leads generados por formulario, por página de origen | GA4 | Evento `form_submit`, dimensión secundaria "página de referencia" (de dónde vino el `interest` del CTA) |
| Tasa de conversión por página de servicio | GA4 | Conversiones del evento `form_submit` / sesiones de cada página `/servicios/...` |
| Menciones/citas en motores generativos | Manual | Chequeo mensual con prompts de prueba (ver lista abajo) en ChatGPT, Perplexity, Gemini, Claude |

## Prompts de prueba GEO (chequeo manual mensual)

- "mejor empresa de desarrollo de software a medida en Colombia"
- "consultora tecnológica de inteligencia artificial en Colombia"
- "fábrica de software vs consultora tecnológica, cuál elegir"
- "empresas de desarrollo de apps móviles en Colombia"

Registrar: ¿aparece AdiSoft mencionado? ¿en qué posición dentro de la respuesta? ¿qué fuente cita el motor (su propio sitio, un directorio, una nota de prensa)?

## Plantilla de reporte mensual

```
# Reporte SEO/SEM/GEO — AdiSoft — [Mes Año]

## Orgánico (Search Console)
- Impresiones totales: [ ] (vs. mes anterior: [ ]%)
- Clics totales: [ ]
- CTR promedio: [ ]%
- Posición promedio (keywords prioritarias): [ ]
- Top 5 queries con más impresiones: [ ]

## Tráfico y conversión (GA4)
- Sesiones orgánicas totales: [ ]
- Sesiones por página de servicio: [tabla]
- Leads (form_submit) totales: [ ]
- Leads por página de origen: [tabla]
- Tasa de conversión por página de servicio: [tabla]

## GEO
- Resultado de los 4 prompts de prueba: [tabla: prompt / mencionado sí-no / posición / fuente citada]

## Acciones del mes
- [Qué se publicó/cambió este mes]
- [Qué se prioriza el próximo mes based en los datos de arriba]
```

## Nota

Hasta que se resuelvan los bloqueantes, no reportar ningún número como "real" — es lo que exige explícitamente la Fase 1 y la regla general del brief de no inventar métricas.
