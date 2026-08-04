# Arquitectura

## Enfoque actual

El proyecto tiene una arquitectura full-stack prevista, pero el trabajo activo se limita al frontend hasta completar las bases de Angular indicadas por el mentor.

~~~text
Usuario
  ↓
Angular 20 frontend
  ↓
Datos locales tipados temporales
~~~

La futura integración será:

~~~text
Angular 20 frontend
  ↓ HTTP / JSON
Spring Boot 4.1 con Gradle Wrapper
  ↓
MySQL 8.4
~~~

## Responsabilidades frontend

- Representar información de incidencias.
- Gestionar estado de interfaz mediante signals.
- Mantener modelos tipados.
- Usar componentes pequeños y reutilizables.
- Usar datos locales temporales a través de una capa de servicio cuando se llegue al Día 9.
- Implementar formularios, rutas, accesibilidad y pruebas.

## Reglas de separación

- Los templates no contienen lógica de negocio compleja.
- Los componentes no realizan HTTP directamente.
- Los datos del dominio se representan mediante models tipados.
- Los componentes contenedores administran colecciones y estado.
- Los componentes de presentación reciben datos y emiten eventos.

## Estado backend

- La base Spring Boot, MySQL y Docker está verificada pero pausada.
- No se deben añadir entidades, repositorios, endpoints ni migraciones durante el bloque frontend.
- La configuración Maven actual no es definitiva.
- Antes de retomar backend se migrará a Gradle Wrapper y se verificará con pruebas.

## Principios

- Comprensión antes de implementación.
- Separación de responsabilidades.
- Tipado explícito.
- Cambios pequeños y verificables.
- Decisiones relevantes documentadas.
