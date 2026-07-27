# ADR-001: Full-Stack Project Architecture

- Status: Accepted
- Date: 2026-07-27

## Context

The Angular training challenge focuses on frontend development. However, the project goal is also to build a portfolio-quality application and learn a professional AI-assisted workflow.

The system requires persistent incident management, user roles, comments, assignments, and authentication.

## Decision

Use a full-stack architecture in a single repository:

- Angular 20 for the frontend.
- Spring Boot 3 for the REST API.
- MySQL for persistent data storage.

The repository will keep frontend and backend code in separate directories.

## Alternatives Considered

### Mock data or JSON Server

Useful for early Angular exercises, but insufficient for learning a complete application architecture.

### Angular-only application

Simpler initially, but would not provide backend, database, API design, or security experience.

## Consequences

### Positive

- Enables a realistic portfolio project.
- Provides experience with frontend-backend integration.
- Allows implementation of authentication, authorization, and persistence.
- Encourages clear API and database documentation.

### Trade-offs

- Requires learning backend and database concepts in addition to Angular.
- Increases setup and integration complexity.
- Requires disciplined incremental development to avoid overwhelming scope.

## Decision Review

Review this decision if the project scope becomes too large for the available learning time.