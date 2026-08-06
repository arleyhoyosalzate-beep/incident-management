# AI Prompt Log

## Purpose

Record relevant AI-assisted work that affects project decisions, code, documentation, or learning.

Do not store secrets, access tokens, personal data, or entire chat transcripts.

## Entry Template

### Date / Challenge Day

- Objective:
- Context provided to the AI:
- Prompt:
- Result applied:
- Files affected:
- Verification performed:
- Decision or learning:
- Related commit:

## 2026-07-27 / Day 1

- Objective: Initialize the Angular application and establish the project documentation workflow.
- Context provided to the AI: Angular 20 training challenge and the goal of learning a professional AI-assisted development workflow.
- Prompt: Guide me step by step to start the new project.
- Result applied: Created the repository structure, initialized Angular 20 in `frontend`, enabled routing, SCSS, strict mode, standalone components, and Git.
- Files affected: Initial Angular frontend files and project documentation structure.
- Verification performed: Confirmed the application runs at `http://localhost:4200`, completed `npm run build` successfully, and passed 2 unit tests with 0 failures.
- Decision or learning: Use short, versioned documentation as persistent context instead of relying on chat memory.
- Related commit: `bde27fa` - chore(project): initialize Angular incident management application.

## 2026-07-27 / Day 2

- Objective: Define the typed domain models for the incident management system.
- Context provided to the AI: The Angular 20 challenge requires strict TypeScript, and this project will integrate with a real Spring Boot API instead of application mock data.
- Prompt: Guide me step by step to define the domain models and explain the TypeScript decisions.
- Result applied: Created typed incident, user, role, priority, status, and search criteria models.
- Files affected: `frontend/src/app/core/models/incident.model.ts`, `frontend/src/app/core/models/user.model.ts`, `frontend/src/app/core/models/incident-search-criteria.ts`, `docs/decisions/ADR-002-real-api-instead-of-application-mocks.md`.
- Verification performed: `npm run build` completed successfully.
- Decision or learning: Use union types for closed value sets, interfaces for domain data, and a class when search criteria needs behavior.
- Related commit: `dcfe71f` - feat(models): define typed incident domain models.
## 2026-07-30 / Día 3

- Objetivo: Crear la estructura visual inicial de Angular mediante componentes standalone reutilizables.
- Contexto proporcionado a la IA: Reto formativo de Angular 20, aplicación de gestión de incidencias, TypeScript estricto, SCSS, componentes standalone y aprendizaje guiado paso a paso.
- Prompt: Guíame paso a paso y explícame cada decisión al crear el layout inicial del proyecto.
- Resultado aplicado: Se crearon los componentes `Header`, `PageTitle` y `Footer`; se compusieron en `App`; se añadió un menú de usuario temporal con mostrar/ocultar basado en signals; se aplicaron estilos globales y por componente.
- Archivos afectados: Componentes en `frontend/src/app/layout/`, `app.ts`, `app.html`, `app.scss`, `styles.scss`, pruebas unitarias y `tsconfig.app.json`.
- Verificación realizada: `npm test` pasó con 6 specs y 0 failures usando Brave como navegador compatible; `npm run build` completó correctamente.
- Decisión o aprendizaje: Los tests deben declarar `provideZonelessChangeDetection()` porque la aplicación usa Angular sin Zone.js. Los componentes standalone deben estar presentes en el arreglo `imports` del componente padre.
- Commit relacionado: `d9bf078` - feat(layout): create initial application shell.

## 2026-07-30 / Día 4

- Objetivo: Preparar una base de backend reproducible con Spring Boot, MySQL y Docker antes de implementar datos reales de incidencias.
- Contexto proporcionado a la IA: El proyecto usa Angular 20, requiere una API real y evita datos ficticios de aplicación. El equipo local tiene Java 21 y se configuró Docker Desktop con WSL 2.
- Prompt: Guíame paso a paso para preparar el backend y MySQL localmente.
- Resultado aplicado: Se registró la adopción de Spring Boot 4.1.0; se generó el backend con Maven Wrapper; se configuró MySQL 8.4 mediante Docker Compose; se protegieron credenciales con `.env`; Spring Boot se conectó a MySQL y Actuator respondió `UP`.
- Archivos afectados: `backend/`, `docker-compose.yml`, `.gitignore`, `.env.example`, `.vscode/settings.json`, `docs/decisions/ADR-003-spring-boot-4-for-new-backend.md` y documentación del proyecto.
- Verificación realizada: `docker compose ps` mostró MySQL healthy; `.\mvnw.cmd test` pasó con 1 test; `GET /actuator/health` respondió `UP`.
- Decisión o aprendizaje: Se usa Spring Boot 4.1.0 porque es la versión estable disponible en Spring Initializr para un proyecto nuevo. Las credenciales locales no se versionan y el backend usa un usuario MySQL limitado.
- Commit relacionado: 3c61d4f - chore(backend): initialize Spring Boot and MySQL foundation

## 2026-08-04 / Replanificación por mentor

- Objetivo: Alinear el plan del reto con las directrices del mentor.
- Contexto proporcionado a la IA: El mentor indicó frontend primero, comprensión conceptual antes de avanzar y migración obligatoria a Gradle antes de reanudar backend.
- Prompt: Modifica todo el plan de trabajo del reto con las directivas del mentor y lo que debo aprender.
- Resultado aplicado: Se reescribió el roadmap para completar primero los días frontend del reto; se registró la pausa backend, el uso temporal de datos locales tipados y la futura migración Maven-Gradle.
- Archivos afectados: AGENTS.md, README.md, documentación de arquitectura y API, contexto de IA, aprendizaje y ADR-004/ADR-005.
- Verificación realizada: Revisión documental pendiente de commit; no se modificó código de aplicación.
- Decisión o aprendizaje: Las directrices del mentor prevalecen sobre decisiones anteriores y los cambios de dirección se documentan sin reescribir el historial.
- Commit relacionado: 4187b6e - docs(plan): prioritize frontend learning roadmap.

## 2026-08-05 / Sesión 5 - Día 4 oficial

- Objetivo: Renderizar una lista local y tipada de incidencias aplicando el flujo de control moderno de Angular.
- Contexto proporcionado a la IA: El mentor priorizó frontend y comprensión conceptual; el backend permanece pausado y se permiten datos locales temporales.
- Prompt: Continuar el reto paso a paso, explicar los conceptos del mentor y diferenciar visualmente el código que debe copiarse de las explicaciones.
- Resultado aplicado: Se creó `IncidentList`, una colección `readonly Incident[]`, una vista semántica con `@for`, `track`, `@empty`, `@if` y `@switch`, estilos por prioridad y estado, e integración con `App`.
- Archivos afectados: `frontend/src/app/features/incidents/`, `frontend/src/app/app.ts` y `frontend/src/app/app.html`.
- Verificación realizada: 10 pruebas en Karma/Jasmine con 0 fallos, build exitoso y revisión de Git sin errores de formato.
- Decisión o aprendizaje: Los datos permanecen tipados y locales hasta introducir un Service; los estilos específicos pertenecen al SCSS del componente y `styles.scss` conserva únicamente estilos globales.
- Commit relacionado: `5ee8ed6` - feat(incidents): render typed incident list.

## 2026-08-06 / Sesión 6 - Día 5 oficial

- Objetivo: Extraer una tarjeta reutilizable y practicar comunicación padre-hijo con contratos tipados.
- Contexto proporcionado a la IA: Frontend prioritario, datos locales temporales, Angular 20 standalone y necesidad de explicar cada concepto técnico solicitado por el mentor.
- Prompt: Continuar paso a paso desde la lista de incidencias, explicar inputs, outputs e inmutabilidad y mantener recordatorios de los conceptos del mentor.
- Resultado aplicado: Se creó `IncidentCard`, se recibió `Incident` con `input.required`, se emitieron IDs con dos `output<string>`, se trasladó la presentación al hijo y se mantuvo colección, selección y eliminación inmutable en `IncidentList`.
- Archivos afectados: `frontend/src/app/features/incidents/components/incident-card/` y `frontend/src/app/features/incidents/pages/incident-list/`.
- Verificación realizada: Build exitoso, interacción visual de selección y eliminación, y 15 pruebas en Karma/Jasmine con 0 fallos.
- Decisión o aprendizaje: El padre posee el estado y responde a las solicitudes; el hijo presenta un elemento y emite eventos sin mutar el input. Las pruebas del padre deben verificar composición y comunicación, mientras las del hijo verifican su contrato aislado.
- Commit relacionado: `d8bdf6a` - feat(incidents): add interactive incident cards.
