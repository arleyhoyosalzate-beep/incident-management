# AI Context

## Purpose

Build a portfolio-quality technical incident management system while learning a professional AI-assisted development workflow.

## Main Requirement Source

The primary functional requirements are defined in the "Reto formativo de Angular 20" document.

## Target Stack

- Frontend: Angular 20, TypeScript strict mode, standalone components, SCSS.
- Backend: Spring Boot 4.1, Java 21, and Maven Wrapper.
- Database: MySQL 8.4 through Docker Compose.
- IDE: Visual Studio Code.
- Version control: Git and GitHub.

## Working Agreement

- Analyze the requirement before writing code.
- Design and document relevant decisions before implementing.
- Work in small, verifiable tasks.
- Run tests and builds before each commit.
- Use AI as a collaborator, not as an unquestioned source of code.
- Review generated code critically and understand it before continuing.

## Code Rules

- Use English for code, branch names, and commits.
- Do not use `any` without documented justification.
- Prefer clarity over unnecessary complexity.
- Do not change the architecture without recording the reason.
- Do not store secrets, passwords, tokens, or API keys in the repository.

## Current Status

- Challenge days 1, 2, and 3 are completed.
- Días 1 a 4 completados. La base del backend con Spring Boot, MySQL y Docker está funcional.
- Angular 20 frontend uses TypeScript strict mode, standalone components, SCSS, and zoneless change detection.
- Typed incident and user domain models are implemented.
- Spring Boot 4.1 backend is generated in `backend/` and verified with Java 21 and Maven Wrapper.
- MySQL 8.4 runs locally through Docker Compose.
- Local database credentials are stored in `.env`, which is excluded from Git; `.env.example` documents the required variables.
- Spring Boot connects to MySQL as `incident_app`, not as `root`.
- `GET /actuator/health` returns `UP`.
- Application mock data is intentionally avoided; no incident entities, repositories, or business API endpoints are implemented yet.

## Next Step

el siguiente trabajo será crear el primer bloque funcional del dominio: entidad de incidencias, migraciones y API REST