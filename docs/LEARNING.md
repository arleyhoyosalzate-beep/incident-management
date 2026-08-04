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
