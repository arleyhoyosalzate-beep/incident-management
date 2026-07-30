# ADR-003: Use Spring Boot 4 for the New Backend

## Status

Accepted

## Date

2026-07-30

## Context

The project initially planned to use Spring Boot 3. The current Spring Initializr stable options for a new Maven project are Spring Boot 4.1.0 and 4.0.7.

The backend has not been implemented yet, so there is no existing Spring Boot 3 code or dependency compatibility risk.

## Decision

Use Spring Boot 4.1.0 with Java 21, Maven Wrapper, JAR packaging, and MySQL for the incident management backend.

Do not use snapshot versions.

## Consequences

- Update the project documentation from Spring Boot 3 to Spring Boot 4.
- Use Java 21 as the backend baseline.
- Verify compatibility before adding third-party libraries in the future.
- Use the generated Maven Wrapper instead of requiring a global Maven installation.

## Alternatives Considered

- Keep Spring Boot 3 through a manually configured version: rejected because Spring Initializr no longer offers it in the standard interface for new projects.
- Use a Spring Boot snapshot: rejected because snapshots are not appropriate for this project baseline.