# Reporte Diario - Día 4

## Objetivo

Preparar una base reproducible de Spring Boot y MySQL para implementar una API real de gestión de incidencias.

## Actividades completadas

- Se verificó Java 21 y se habilitó la infraestructura requerida para Docker Desktop con WSL 2.
- Se instaló y validó Docker Desktop.
- Se registró la decisión de usar Spring Boot 4.1.0.
- Se generó el backend Spring Boot con Maven Wrapper y Java 21.
- Se configuró MySQL 8.4 mediante Docker Compose.
- Se protegieron las credenciales locales con `.env`, `.env.example` y `.gitignore`.
- Se configuró Spring Boot para conectarse a MySQL con el usuario limitado `incident_app`.
- Se validó el contexto de Spring Boot mediante Maven.
- Se verificó el endpoint técnico `GET /actuator/health`.

## Conceptos aplicados

- Spring Boot 4.1.
- Maven Wrapper.
- Docker Desktop y WSL 2.
- Docker Compose.
- Imagen, contenedor y volumen.
- Variables de entorno.
- JDBC, HikariCP y JPA.
- Spring Boot Actuator.
- Health checks.

## Evidencia

- MySQL 8.4 ejecutándose en Docker con estado `healthy`.
- `.\mvnw.cmd test`: 1 prueba, 0 fallos y 0 errores.
- Spring Boot conectado a MySQL 8.4.11.
- `GET /actuator/health`: estado `UP`.

## Dificultades y resolución

- Docker no era reconocido en una terminal de VS Code abierta antes de la instalación. Se resolvió reiniciando VS Code para actualizar la variable `PATH`.
- Un segundo intento de iniciar Spring Boot falló porque el puerto 8080 ya estaba usado por la primera instancia. Se mantuvo una única instancia activa; no fue necesario cambiar la configuración.

## Decisiones técnicas

- Usar Spring Boot 4.1.0 con Java 21 para un proyecto nuevo.
- Usar MySQL 8.4 con Docker Compose y volumen persistente.
- No versionar `.env`.
- Usar el usuario `incident_app` desde Spring Boot, no `root`.
- No crear todavía entidades ni endpoints de negocio.

## Trabajo pendiente

- Crear la estrategia de migraciones y el primer modelo persistente de incidentes.
- Definir y documentar el primer endpoint de negocio.

## Tiempo invertido

Agrega aquí tu estimación de tiempo.

## Commit relacionado

Pendiente.