# Sistema de gestión de incidencias

Proyecto formativo de Angular 20 orientado a construir un sistema de gestión de incidencias técnicas de manera incremental, verificable y documentada.

## Estado actual

- Los días formativos 1, 2 y 3 de Angular están completados.
- La siguiente meta activa es el Día 4 oficial: listado local de incidencias con flujo de control moderno.
- La sesión técnica adicional de backend, MySQL y Docker está preparada, pero permanece pausada por directriz del mentor.
- No existen todavía CRUD de incidencias, autenticación ni integración Angular-API.
- Antes de retomar backend, Maven debe migrarse obligatoriamente a Gradle Wrapper.

## Tecnologías activas

- Angular 20.
- TypeScript en modo estricto.
- Componentes standalone.
- SCSS.
- Node.js y npm.
- Git y GitHub.

## Tecnologías preparadas para una fase posterior

- Spring Boot 4.1 con Java 21.
- Gradle Wrapper como herramienta de compilación objetivo.
- MySQL 8.4 con Docker Compose.

## Estructura

~~~text
incident-management/
├── frontend/    # Aplicación Angular y foco actual
├── backend/     # Base backend pausada; migración futura a Gradle
├── docs/        # Plan, decisiones, aprendizaje e informes
└── .github/     # Instrucciones para asistentes de código
~~~

## Requisitos para el frontend

- Node.js 20.19.0 o superior.
- npm.
- Git.

## Ejecutar el frontend

~~~powershell
cd frontend
npm ci
npm start
~~~

Abrir http://localhost:4200 en el navegador.

## Compilar y probar

~~~powershell
cd frontend
npm run build
npm test
~~~

## Documentación

- docs/ROADMAP.md: plan formativo vigente.
- docs/AI_CONTEXT.md: contexto persistente para trabajo asistido por IA.
- docs/LEARNING.md: conceptos que deben comprenderse.
- docs/PROMPTS.md: registro de intervenciones relevantes de IA.
- docs/decisions/: decisiones técnicas y cambios de dirección.

## Forma de trabajo

1. Comprender el objetivo antes de escribir código.
2. Implementar cambios pequeños y verificables.
3. Ejecutar validaciones relevantes.
4. Documentar decisiones y aprendizaje.
5. Crear commits descriptivos.
