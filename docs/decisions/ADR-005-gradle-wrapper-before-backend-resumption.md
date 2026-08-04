# ADR-005: Gradle Wrapper Before Backend Resumption

## Estado

Aceptada.

## Fecha

2026-08-04

## Contexto

La base backend inicial se generó con Maven Wrapper. El mentor indicó que Gradle es la herramienta de build requerida para el backend.

El backend está pausado mientras se completan objetivos frontend, por lo que este es el momento adecuado para definir la migración sin mezclarla con cambios de dominio.

## Decisión

Gradle Wrapper será la herramienta obligatoria para compilar, probar y ejecutar el backend antes de agregar cualquier nuevo trabajo backend.

La migración debe:

- Reemplazar pom.xml por la configuración Gradle correspondiente.
- Incluir gradlew, gradlew.bat y gradle/wrapper.
- Mantener Spring Boot 4.1, Java 21 y MySQL.
- Verificarse con .\gradlew.bat test y .\gradlew.bat bootRun.
- Actualizar documentación y comandos.

## Consecuencias

- No se añadirá código backend mientras Maven siga siendo el build tool activo.
- No se requerirá una instalación global de Gradle.
- La migración será un commit independiente, revisable y verificable.

## Alternativa descartada

Mantener Maven: descartada porque no cumple la directriz del mentor.
