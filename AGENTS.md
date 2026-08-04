# Instrucciones del proyecto

## Leer antes de cambiar código

Revisar:

- docs/AI_CONTEXT.md
- docs/ROADMAP.md
- docs/PROMPTS.md
- Las decisiones relevantes en docs/decisions/

## Directrices prioritarias del mentor

1. El trabajo activo se concentra exclusivamente en el frontend Angular.
2. No se deben agregar entidades, endpoints, migraciones, cambios de MySQL ni código de negocio backend hasta retomar explícitamente la integración HTTP.
3. El aprendizaje conceptual es un criterio de avance: antes de implementar una funcionalidad, explicar qué problema resuelve y cómo se verifica.
4. Durante las etapas frontend se usarán datos locales temporales, tipados e inmutables para cumplir los objetivos formativos.
5. Antes de cualquier nuevo trabajo backend, la base actual debe migrarse obligatoriamente de Maven a Gradle Wrapper.

## Estructura

- frontend/: aplicación Angular 20 y foco actual.
- backend/: base técnica pausada; actualmente usa Maven solo de forma histórica y debe migrar a Gradle antes de reanudarse.
- docs/: contexto, decisiones, aprendizaje e informes.

## Comandos frontend

Ejecutar desde frontend/:

~~~powershell
npm start
npm run build
npm test
~~~

Si Karma no encuentra un navegador compatible, configurar CHROME_BIN en la sesión de terminal antes de ejecutar las pruebas.

## Regla futura para backend

Cuando el plan llegue a integración HTTP:

- Migrar y verificar Gradle Wrapper antes de agregar código backend.
- Los comandos esperados serán .\gradlew.bat test y .\gradlew.bat bootRun.
- No instalar Gradle globalmente como requisito.

## Estándares

- Usar TypeScript estricto y no usar any sin justificación documentada.
- Usar componentes Angular standalone.
- Mantener código, identificadores y commits en inglés.
- Mantener la documentación en español.
- Evitar lógica de negocio compleja en templates.
- No hacer solicitudes HTTP directamente desde componentes.
- Mantener componentes pequeños, cohesionados y con responsabilidades claras.
- No versionar secretos, contraseñas, tokens ni el archivo .env.

## Flujo de cada sesión

1. Leer objetivo y criterios de aceptación.
2. Estudiar y explicar los conceptos asociados.
3. Diseñar el cambio mínimo.
4. Implementar una tarea enfocada.
5. Ejecutar build, pruebas y verificación visual pertinentes.
6. Registrar aprendizaje, decisión o prompt cuando aplique.
7. Revisar cambios antes de crear un commit descriptivo.
