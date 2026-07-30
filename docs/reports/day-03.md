# Reporte Diario - Día 3

## Objetivo

Construir la estructura visual inicial de la aplicación Angular mediante componentes standalone reutilizables.

## Actividades completadas

- Se creó el componente `Header` con marca de aplicación, nombre temporal de usuario y menú desplegable.
- Se creó el componente `PageTitle` con inputs modernos para título obligatorio y descripción opcional.
- Se creó el componente `Footer` con el año actual calculado dinámicamente.
- Se integraron Header, PageTitle y Footer en el componente raíz `App`.
- Se añadieron estilos SCSS globales y estilos encapsulados por componente.
- Se configuró el layout con Flexbox para mantener el footer al final de la ventana.
- Se crearon y actualizaron pruebas unitarias para los componentes y la composición de la aplicación.
- Se configuraron los tests con `provideZonelessChangeDetection()`.

## Conceptos aplicados

- Componentes standalone.
- Composición de componentes.
- Inputs basados en signals.
- Signals para estado de interfaz.
- Renderizado condicional con `@if`.
- HTML semántico y accesibilidad.
- SCSS global y encapsulado.
- Flexbox.
- Pruebas unitarias con TestBed.
- Patrón Arrange–Act–Assert.
- Angular zoneless.

## Evidencia funcional

- El menú temporal del usuario se muestra y se oculta al hacer clic.
- Header, título de página y footer se renderizan una sola vez dentro de la aplicación.
- El footer se mantiene al final de la ventana cuando el contenido principal es corto.

## Verificaciones ejecutadas

- `npm test`: 6 specs, 0 failures.
- `npm run build`: compilación de producción exitosa.

## Dificultades y resolución

Las pruebas fallaron inicialmente con `NG0908`, porque el proyecto usa detección de cambios zoneless y los TestBed no tenían esa configuración. Se resolvió agregando `provideZonelessChangeDetection()` a los providers de cada prueba.

## Trabajo pendiente

- Registrar el commit final del Día 3.
- Preparar Spring Boot y MySQL antes de renderizar una lista real de incidencias.

## Tiempo invertido

Agrega aquí tu estimación de tiempo.

## Commit relacionado

- `d9bf078` - feat(layout): create initial application shell.