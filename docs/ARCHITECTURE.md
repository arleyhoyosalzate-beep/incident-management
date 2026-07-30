# Architecture

## Purpose

Define the high-level architecture of the technical incident management system.

## System Overview

```text
User
  ↓
Angular 20 Frontend
  ↓ HTTP / JSON
Spring Boot 4.1 Backend
  ↓
MySQL Database
```

## Frontend Responsibilities

The Angular application will:

- Display incident information.
- Provide forms and validation.
- Manage local user interface state.
- Call the backend through dedicated services.
- Protect routes according to the authenticated user role.

## Backend Responsibilities

The Spring Boot application will:

- Expose a REST API.
- Apply business rules and validation.
- Manage authentication and authorization.
- Persist data in MySQL.
- Return meaningful HTTP responses and error messages.

## Database Responsibilities

MySQL will persist:

- Users.
- Roles.
- Incidents.
- Comments.
- Incident assignments.

## Communication Rules

- The frontend communicates with the backend through HTTP and JSON.
- Angular components do not call HTTP directly; services handle API communication.
- The backend is the only layer that accesses the database.
- API contracts must be documented in `docs/API.md`.

## Current State

- The Angular 20 frontend is created, tested, and runs locally.
- The Spring Boot 4.1 backend is generated in `backend/` and uses Java 21 with Maven Wrapper.
- MySQL 8.4 runs locally through Docker Compose and persists data in the `mysql_data` volume.
- Spring Boot connects to MySQL using the limited `incident_app` database user.
- The local infrastructure endpoint `GET /actuator/health` returns `UP`.
- No domain entities, repositories, or business API endpoints are implemented yet.

## Architectural Principles

- Separate responsibilities by layer.
- Keep the frontend independent from database details.
- Validate data in both frontend and backend when appropriate.
- Prefer simple, maintainable solutions over unnecessary complexity.
- Document important architectural decisions in `docs/decisions/`.