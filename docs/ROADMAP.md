# Plan de trabajo del reto

## Fuente y prioridad

La fuente funcional principal es el reto formativo de Angular 20.

Las directrices del mentor tienen prioridad sobre decisiones anteriores:

- El foco actual es exclusivamente frontend.
- Se requiere comprensión conceptual antes de avanzar.
- Se usarán datos locales tipados y temporales en las etapas iniciales.
- El backend queda pausado.
- Gradle Wrapper será obligatorio antes de retomar backend.

## Estado y sesiones realizadas

| Sesión real | Objetivo | Estado |
|---|---|---|
| 1 | Día 1 oficial: entorno y proyecto Angular | Completado |
| 2 | Día 2 oficial: modelos TypeScript | Completado |
| 3 | Día 3 oficial: componentes iniciales | Completado |
| 4 | Hito adicional: base backend, Docker y MySQL | Completado y pausado |
| 5 | Día 4 oficial: flujo de control moderno | Siguiente |

El hito adicional no sustituye ningún día oficial. Por eso el reto requerirá una sesión adicional respecto al calendario original.

## Regla de aprendizaje

Antes de marcar cualquier objetivo como completado se debe poder explicar:

1. Qué es el concepto.
2. Dónde se usa en este proyecto.
3. Qué problema resuelve.
4. Cómo se verificó la funcionalidad.

Preguntas de estudio prioritarias:

- Entorno de desarrollo.
- Dependencia y gestor de dependencias.
- Node.js, npm y Angular CLI.
- package.json y package-lock.json.
- Arquitectura MVC y arquitectura basada en componentes.
- Models, Services, Auth, Guards e Interceptors.
- Componentes standalone, inputs, outputs, signals y flujo de control.

## Días completados

### Día 1 - Entorno y proyecto Angular

Estado: Completado.

- [x] Crear Angular 20 con routing, SCSS, strict mode y componentes standalone.
- [x] Ejecutar aplicación y build.
- [x] Inicializar Git y documentación.

### Día 2 - Modelos tipados

Estado: Completado.

- [x] Definir IncidentStatus e IncidentPriority.
- [x] Definir Incident, User e IncidentSearchCriteria.
- [x] Evitar any y verificar build.

### Día 3 - Componentes iniciales

Estado: Completado.

- [x] Crear Header, PageTitle y Footer standalone.
- [x] Componerlos en App.
- [x] Usar una signal para mostrar u ocultar menú de usuario.
- [x] Verificar build y seis pruebas unitarias.

## Hito adicional - Base técnica backend

Estado: Completado y congelado.

- [x] Crear base Spring Boot 4.1, Java 21, MySQL 8.4 y Docker Compose.
- [x] Verificar conexión y endpoint técnico de salud.
- [ ] Migrar obligatoriamente Maven a Gradle Wrapper antes de reanudar backend.

No se agregarán endpoints, entidades, migraciones ni cambios de backend durante las fases frontend.

## Plan frontend activo

### Día 4 - Plantillas y flujo de control moderno

Estado: Siguiente.

Objetivo: renderizar incidencias locales tipadas.

- [ ] Crear datos locales temporales de Incident.
- [ ] Crear un contenedor de listado de incidencias.
- [ ] Renderizar con @for y track incident.id.
- [ ] Mostrar @empty cuando no existan incidencias.
- [ ] Usar @if para información opcional.
- [ ] Usar @switch para los estados.
- [ ] Diferenciar visualmente prioridades.
- [ ] Crear pruebas, ejecutar build y documentar.

Conceptos: @for, track, @empty, @if, @switch, interpolación y clases CSS.

### Día 5 - Comunicación padre e hijo

Objetivo: crear IncidentCard como componente de presentación reutilizable.

- [ ] Recibir Incident mediante input.required.
- [ ] Emitir eventos tipados de selección y solicitud de eliminación.
- [ ] Mantener la colección en el componente contenedor.
- [ ] No modificar inputs desde el hijo.

Conceptos: inputs, outputs, inmutabilidad, componentes contenedores y de presentación.

### Día 6 - Diseño adaptable y accesibilidad

- [ ] Crear variables globales de diseño.
- [ ] Crear cuadrícula responsive.
- [ ] Aplicar estados hover, focus y disabled.
- [ ] Verificar teclado, contraste y nombres accesibles.

### Día 7 - Pipes

- [ ] Aplicar DatePipe y formato de texto.
- [ ] Crear RelativeTimePipe.
- [ ] Crear pipe de prioridad legible.
- [ ] Probar un pipe personalizado.

### Día 8 - Directivas

- [ ] Crear directiva para incidencias críticas.
- [ ] Crear comportamiento de foco reutilizable.
- [ ] Probar una directiva.

### Día 9 - Servicios e inyección de dependencias

- [ ] Crear IncidentService local.
- [ ] Mover datos temporales fuera de componentes.
- [ ] Encapsular operaciones de consulta, creación y eliminación.

### Día 10 - Signals y estado

- [ ] Convertir colección y filtros en signals.
- [ ] Crear computed para indicadores.
- [ ] Mantener actualizaciones inmutables.

### Días 11 y 12 - Formularios reactivos

- [ ] Crear formulario tipado de incidencias.
- [ ] Añadir validaciones y mensajes accesibles.
- [ ] Crear validadores personalizados y etiquetas dinámicas.

### Días 13 y 14 - Routing y carga diferida

- [ ] Crear rutas de incidencias, detalle, creación, dashboard y 404.
- [ ] Crear rutas hijas y lazy loading.
- [ ] Verificar fragmentos de compilación.

## Puerta obligatoria antes de backend

Antes del Día 15:

- [ ] Finalizar objetivos frontend de los días 4 a 14.
- [ ] Migrar backend de Maven a Gradle Wrapper en una tarea aislada.
- [ ] Ejecutar .\gradlew.bat test.
- [ ] Ejecutar .\gradlew.bat bootRun.
- [ ] Verificar que MySQL y health check siguen funcionando.
- [ ] Actualizar README, AGENTS y decisiones.

## Integración y fases posteriores

### Día 15 - HttpClient y CRUD

Solo después de la puerta de Gradle:

- Reemplazar datos locales por una capa HTTP tipada.
- Implementar consulta, creación, actualización y eliminación.
- Mostrar estados de carga, vacío y error.

### Días 16 a 18 - RxJS, ciclo de vida e HTTP

- Búsqueda reactiva con debounce y cancelación.
- Gestión de suscripciones.
- Interceptors funcionales y manejo global de errores.

### Días 19 y 20 - Auth y Guards

- Autenticación simulada.
- Servicio de autenticación.
- Guards de autenticación y autorización por roles.

### Días 21 a 23 - Estado y componentes compartidos

- Store con signals.
- Filtros, ordenamiento y paginación.
- Modal, confirmación, estado vacío y carga.

### Días 24 a 30 - Calidad y entrega

- Pruebas unitarias, HTTP, routing, guards e interceptors.
- Rendimiento y carga diferida.
- Seguridad y configuración.
- Documentación, despliegue, estabilización y presentación final.

## Definición de terminado diaria

Un día se completa solamente si:

- La funcionalidad cumple el objetivo.
- Se entiende y puede explicarse.
- Build y pruebas relevantes pasan.
- No se dañan funcionalidades previas.
- Se actualiza documentación pertinente.
- Existe un commit descriptivo.
- Existe un informe diario con evidencia, dificultades y trabajo pendiente.
