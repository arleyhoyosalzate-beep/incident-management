# Learning Log

## Purpose

Record concepts learned, questions, difficulties, and technical decisions that must be understood before progressing.

## Day 1 - Environment and Project Setup

### Concepts Applied

- Angular CLI creates and configures an Angular workspace.
- `npx` allows running a specific package version without installing it globally.
- Angular standalone components do not require traditional NgModules.
- Strict TypeScript catches type-related errors earlier.
- Routing prepares the application for multiple pages.
- SCSS allows more structured styling.
- Git tracks the project history through commits.
- Documentation preserves context beyond a single AI chat.

### Evidence

- Angular application runs locally at `http://localhost:4200`.
- Production build completed successfully.
- Git repository was initialized.
- Initial project documentation was created.

### Questions to Be Able to Answer

- Why do we use `npx @angular/cli@20` instead of relying on a global Angular CLI?
- What is the difference between `npm start` and `npm run build`?
- Why is strict TypeScript useful?
- Why do we keep `frontend` and `backend` in separate directories?
- Why should AI context be documented and versioned?

### Personal Notes

Add your own notes, questions, or discoveries here during the challenge.

## Plan de estudio guiado por mentor

### Regla de aprendizaje

Antes de implementar un concepto, debo poder responder: qué es, dónde se usa en este proyecto y qué problema resuelve.

### Entorno de desarrollo

- Es el conjunto de herramientas para construir, ejecutar y probar software.
- En este proyecto incluye VS Code, Node.js, npm, Angular CLI, Git, navegador y terminal.
- Su propósito es permitir un trabajo reproducible antes de desplegar una aplicación.

### Dependencias y gestores

- Una dependencia es una librería externa que el proyecto necesita, por ejemplo Angular o RxJS.
- npm es el gestor de dependencias del frontend.
- package.json declara dependencias y scripts.
- package-lock.json fija versiones exactas para reproducir instalaciones con npm ci.

### Angular CLI

- Es la herramienta de comandos de Angular.
- Crea componentes, inicia servidor local, compila y ejecuta pruebas.
- npm start, npm run build y npm test usan la CLI local del proyecto.

### Arquitectura y responsabilidades

- MVC separa Model, View y Controller.
- Angular es principalmente una arquitectura basada en componentes, no MVC clásico.
- Models representan datos del dominio.
- Services centralizan datos, reglas reutilizables o comunicación externa.
- Auth identifica y administra sesión de usuario.
- Guards deciden si se puede navegar a una ruta.
- Interceptors procesan peticiones HTTP de forma transversal.

### Preguntas para práctica oral

- ¿Qué diferencia hay entre una dependencia y npm?
- ¿Por qué package-lock.json es útil al trabajar en otro PC?
- ¿Qué automatiza Angular CLI?
- ¿Por qué Angular standalone no requiere AppModule?
- ¿Por qué un componente no debe llamar HTTP directamente?
- ¿Por qué Models y Services tienen responsabilidades distintas?
- ¿Por qué Auth, Guards e Interceptors se implementarán después de routing y HTTP?

## Day 2 - Typed Domain Models

### Concepts Applied

- Union types restrict a value to a fixed set of valid options.
- Interfaces describe the structure of domain data.
- Classes are useful when data needs related behavior.
- `readonly` prevents accidental reassignment of important properties.
- Optional properties model data that may not exist yet.
- `import type` imports TypeScript types without generating runtime code.

### Domain Models Created

- `IncidentStatus`
- `IncidentPriority`
- `Incident`
- `UserRole`
- `User`
- `IncidentSearchCriteria`

### Technical Decision

The application will use a real Spring Boot API and MySQL when incident data is displayed. It will not use mock incidents as application data.

Test fixtures may still be used in automated tests when needed.

### Evidence

- `npm run build` completed successfully after creating the models.

### Questions to Be Able to Answer

- Why is `IncidentStatus` a union type instead of a free string?
- Why is `Incident` an interface instead of a class?
- Why is `IncidentSearchCriteria` a class?
- Why is `assignedAgentId` optional?
- Why should the frontend not contain a password field in its user model?

## Día 3 - Componentes de estructura inicial

### Conceptos aplicados

- Los componentes standalone deben importarse explícitamente en el componente padre que los utiliza.
- `input.required<T>()` define una entrada obligatoria y basada en signals.
- `input<T>()` define una entrada opcional y basada en signals.
- Una `signal` almacena estado reactivo; se lee con paréntesis, por ejemplo: `isUserMenuOpen()`.
- El patrón Arrange–Act–Assert organiza las pruebas según preparación, acción y verificación.
- Las etiquetas semánticas `header`, `main` y `footer` mejoran la estructura y accesibilidad.
- Los estilos globales pertenecen a `styles.scss`; los estilos de cada componente permanecen en su archivo SCSS.
- Flexbox con `min-height: 100vh` y `flex: 1` permite mantener el footer al final de una pantalla con poco contenido.
- Las pruebas con `TestBed` son entornos aislados y deben configurar `provideZonelessChangeDetection()` cuando la aplicación usa Angular zoneless.

### Componentes creados

- `Header`
- `PageTitle`
- `Footer`

### Evidencia

- `npm test`: 6 specs, 0 failures.
- `npm run build`: compilación de producción exitosa.
- Se verificó manualmente que el menú de usuario se muestra y se oculta.

### Preguntas que debo poder responder

- ¿Por qué un componente standalone debe declararse en `imports`?
- ¿Cuál es la diferencia entre una signal interna y un input basado en signal?
- ¿Por qué un input puede ser obligatorio?
- ¿Qué representan Arrange, Act y Assert en una prueba?
- ¿Por qué las pruebas fallaron al requerir Zone.js?
- ¿Por qué no usamos `position: fixed` para mantener el footer abajo?

## Día 4 - Base de Backend y MySQL

### Conceptos aplicados

- Spring Initializr genera una estructura inicial de Spring Boot y el Maven Wrapper.
- `mvnw.cmd` permite usar Maven sin instalarlo globalmente.
- Docker Desktop usa WSL 2 para ejecutar contenedores Linux en Windows.
- Una imagen es una plantilla; un contenedor es una instancia en ejecución de esa imagen.
- Docker Compose describe infraestructura local de forma versionada.
- Un volumen Docker conserva los datos de MySQL aunque el contenedor se detenga.
- `.env` guarda credenciales locales y `.env.example` documenta las variables necesarias sin exponer secretos.
- Spring Boot se conecta a MySQL mediante JDBC y HikariCP administra el pool de conexiones.
- La aplicación utiliza el usuario limitado `incident_app`, no el usuario `root`.
- Actuator proporciona endpoints técnicos como `/actuator/health`.
- Un puerto solo puede ser usado por un proceso a la vez; por eso dos instancias no pueden iniciar simultáneamente en el puerto 8080.

### Evidencia

- Docker Desktop inició correctamente con el contexto `desktop-linux`.
- MySQL 8.4 quedó en estado `healthy`.
- `.\mvnw.cmd test` pasó con 1 prueba, 0 fallos y 0 errores.
- Spring Boot conectó correctamente con MySQL 8.4.11.
- `GET /actuator/health` respondió con estado `UP`.

### Preguntas que debo poder responder

- ¿Por qué usamos Maven Wrapper en lugar de requerir Maven global?
- ¿Cuál es la diferencia entre una imagen, un contenedor y un volumen Docker?
- ¿Por qué `.env` no debe subirse a Git?
- ¿Por qué Spring Boot no debe conectarse a MySQL como `root`?
- ¿Qué comprueba `/actuator/health` y qué no comprueba?
- ¿Por qué ocurrió el error de puerto 8080 ocupado?

## Sesión 5 - Día 4 oficial: plantillas y flujo de control moderno

### Conceptos aplicados

- `@for` repite una porción del template para cada elemento de una colección.
- `track incident.id` permite que Angular identifique cada incidencia de forma estable y reutilice correctamente los elementos del DOM.
- `@empty` define la interfaz que se muestra cuando la colección no contiene elementos.
- `@if` muestra información opcional, como el agente asignado, solo cuando el dato existe.
- `@switch` selecciona una representación legible para cada estado de incidencia.
- La interpolación `{{ ... }}` presenta valores de TypeScript dentro del HTML.
- Los atributos enlazados con `[attr.data-priority]` y `[attr.data-status]` permiten aplicar estilos según valores tipados.
- Los datos temporales implementan `readonly Incident[]`, por lo que cada objeto debe cumplir el contrato del modelo `Incident`.
- Un componente standalone declara sus dependencias en `imports` y puede incorporarse directamente en otro componente standalone.
- Los estilos específicos permanecen en `incident-list.scss`; `styles.scss` se reserva para reglas globales.

### Arquitectura aplicada

- `Incident` es el modelo que define la estructura de los datos del dominio.
- `IncidentList` actúa como componente contenedor de esta etapa: conserva la colección y coordina su representación.
- `incident-list.html` es la vista del componente, no un controlador MVC clásico.
- Angular usa una arquitectura basada en componentes; la clase y el template colaboran mediante bindings y flujo de control.
- Los datos locales son temporales. En una etapa posterior, un `IncidentService` asumirá el acceso y las operaciones sobre los datos.

### Pruebas y evidencia

- Se verificó la creación de `IncidentList`.
- Se comprobó que se renderiza una tarjeta por cada incidencia.
- Se comprobó el estado vacío sin incidencias.
- Se verificaron las etiquetas de estado y la aparición condicional del agente asignado.
- `npm test`: 10 specs, 0 failures.
- `npm run build`: compilación exitosa.
- Commit funcional: `5ee8ed6` - feat(incidents): render typed incident list.

### Dificultades y resolución

- El build se ejecutó inicialmente desde la raíz, donde no existe `package.json`; se corrigió ejecutándolo desde `frontend`.
- Los estilos del componente se copiaron accidentalmente también en `styles.scss`; la revisión con `git diff` detectó la duplicación y se restauró el archivo global.
- `npm test` quedó abierto porque usa modo observación; se aprendió a detenerlo con `Ctrl + C` y a usar `npm test -- --watch=false` para una sola ejecución.

### Preguntas que debo poder responder

- ¿Qué diferencia existe entre una dependencia, npm y un script de `package.json`?
- ¿Por qué `npm run build` debe ejecutarse donde está el `package.json` del frontend?
- ¿Qué problema resuelve `track incident.id`?
- ¿Cuál es la diferencia entre `@empty` y `@if`?
- ¿Por qué el modelo `Incident` no es lo mismo que el componente `IncidentList`?
- ¿Por qué los estilos de una funcionalidad deben permanecer en su componente?
- ¿Qué responsabilidades tendrá posteriormente un `Service` que todavía no debe asumir el componente?

## Sesión 6 - Día 5 oficial: comunicación padre-hijo

### Conceptos aplicados

- Un componente contenedor posee y actualiza el estado de una funcionalidad; un componente de presentación recibe datos y emite eventos.
- `input.required<Incident>()` define un contrato obligatorio y tipado desde el padre hacia el hijo.
- Los inputs basados en signals se leen con paréntesis, por ejemplo `incident().title`.
- `output<string>()` define un evento que solo puede emitir identificadores de tipo `string`.
- `$event` contiene el valor emitido por el hijo y lo entrega al manejador del padre.
- Property binding con `[incident]` transporta datos hacia el hijo; event binding con `(incidentSelected)` escucha eventos provenientes del hijo.
- El flujo de datos es unidireccional: estado del padre, input del hijo, output del hijo y actualización del padre.
- `string | null` es un union type que representa una selección existente o la ausencia de selección.
- `readonly Incident[]` impide mutar el arreglo; `filter` crea una colección nueva para eliminar una incidencia inmutablemente.
- Los estilos se separaron entre la estructura de `IncidentList` y la presentación de `IncidentCard`.
- `role="group"`, `aria-label`, `role="status"` y `:focus-visible` mejoran la accesibilidad de las acciones.

### Arquitectura aplicada

- `IncidentList` conserva la colección, el ID seleccionado y los métodos que responden a eventos.
- `IncidentCard` recibe un solo `Incident`, lo representa y no modifica el estado del padre.
- El hijo emite `incidentSelected` y `deleteRequested`; el padre decide cómo responder.
- Esta comunicación ocurre entre componentes y no sustituye un `Service` ni una operación HTTP.
- Angular utiliza composición de componentes y bindings, no un controlador MVC clásico.

### Pruebas y evidencia

- `IncidentCard` se probó aisladamente proporcionando el input mediante `fixture.componentRef.setInput`.
- Se verificó la representación de una incidencia y la emisión de ambos outputs.
- Se probó la composición de una tarjeta por incidencia desde `IncidentList`.
- Se verificaron selección, eliminación inmutable y estado vacío desde el componente padre.
- El primer intento detectó dos pruebas antiguas que todavía buscaban `.incident-list__item`; se actualizaron para la nueva composición.
- `npm run build`: compilación exitosa.
- `npm test -- --watch=false`: 15 specs, 0 failures.
- Commit funcional: `d8bdf6a` - feat(incidents): add interactive incident cards.

### Preguntas que debo poder responder

- ¿Qué es un input y por qué `IncidentCard` lo declara obligatorio?
- ¿Qué es un output y qué contiene `$event`?
- ¿Cuál es la diferencia entre property binding y event binding?
- ¿Por qué el hijo solicita la eliminación, pero el padre modifica la colección?
- ¿Qué significa flujo de datos unidireccional?
- ¿Cuál es la diferencia entre `readonly incidents` e `incidents: readonly Incident[]`?
- ¿Por qué `filter` es una operación apropiada para una actualización inmutable?
- ¿Por qué un componente no reemplaza la responsabilidad futura de un Service?
- ¿Qué funciones cumplen Jasmine, Karma y Angular TestBed?
