# ADR-004: Frontend First with Temporary Typed Local Data

## Estado

Aceptada.

## Fecha

2026-08-04

## Contexto

El reto de Angular 20 utiliza datos simulados en las primeras jornadas para practicar templates, comunicación entre componentes, servicios, signals, formularios y rutas.

La decisión anterior ADR-002 adelantaba la integración con una API real. El mentor indicó que el aprendizaje debe enfocarse ahora en frontend y comprensión conceptual antes de continuar backend.

## Decisión

Durante los días frontend iniciales se usarán datos locales temporales, tipados e inmutables de incidencias.

Estos datos:

- Residirán en la estructura frontend.
- Usarán los models existentes.
- No se consultarán directamente desde templates.
- Se moverán a IncidentService cuando corresponda.
- Se sustituirán por una capa HTTP cuando se llegue a integración de API.

## Consecuencias

### Positivas

- Permite cumplir los objetivos formativos del reto en el orden correcto.
- Reduce la complejidad mientras se aprenden fundamentos de Angular.
- Permite practicar UI, estado, formularios y pruebas sin bloquearse por backend.

### Restricciones

- Los datos locales no son la fuente definitiva de producción.
- No se implementarán endpoints ni persistencia durante esta fase.
- La sustitución por HTTP deberá preservar los contratos tipados.

## Relación con otras decisiones

Esta decisión reemplaza temporalmente la restricción de ADR-002 sobre no usar datos simulados de aplicación. La meta final de integrar una API real permanece vigente.
