# Contexto persistente de IA

## Propósito

Construir un sistema de gestión de incidencias mientras se aprende Angular 20 y un flujo profesional de desarrollo asistido por IA.

## Fuente de requisitos

El reto formativo de Angular 20 define los objetivos funcionales. Las directrices recientes del mentor tienen prioridad sobre decisiones anteriores.

## Directrices activas del mentor

- Enfocar el trabajo actual en frontend Angular.
- Entender y poder explicar conceptos técnicos antes de avanzar.
- Usar datos locales tipados y temporales durante las etapas frontend iniciales.
- No continuar trabajo backend, base de datos ni API por ahora.
- Migrar obligatoriamente de Maven a Gradle Wrapper antes de reanudar backend.

## Stack activo

- Angular 20.
- TypeScript estricto.
- Componentes standalone.
- SCSS.
- Node.js y npm.
- Git y GitHub.

## Stack preparado y pausado

- Spring Boot 4.1.
- Java 21.
- MySQL 8.4 con Docker Compose.
- La base existente usa Maven de forma histórica; Gradle Wrapper será el build tool definitivo.

## Estado actual

- Días oficiales 1, 2 y 3 completados.
- La sesión adicional de backend quedó validada y congelada.
- Frontend: layout standalone, modelos tipados, signal de menú y seis pruebas aprobadas.
- No hay lista de incidencias, formularios, rutas de negocio, HTTP, auth, guards ni interceptors implementados.
- Los datos simulados temporales son una decisión vigente para cumplir las fases frontend.

## Próximo objetivo

Implementar el Día 4 oficial: lista local de incidencias tipadas usando @for, track, @empty, @if y @switch.

## Acuerdos de trabajo

- Leer ROADMAP, PROMPTS y ADRs antes de cambios relevantes.
- Explicar propósito, concepto y verificación antes de implementar.
- Trabajar en cambios pequeños y verificables.
- Mantener código e identificadores en inglés y documentación en español.
- No usar any sin justificación.
- No guardar secretos en el repositorio.
- No hacer HTTP directamente desde componentes.

## Decisiones relevantes

- ADR-001: arquitectura full-stack de largo plazo.
- ADR-002: reemplazada para el periodo frontend por ADR-004.
- ADR-003: Spring Boot 4.1 y Java 21 como base.
- ADR-004: frontend primero con datos locales temporales.
- ADR-005: migración obligatoria a Gradle Wrapper.
