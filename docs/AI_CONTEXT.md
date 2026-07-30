# AI Context

## Purpose

Build a portfolio-quality technical incident management system while learning a professional AI-assisted development workflow.

## Main Requirement Source

The primary functional requirements are defined in the "Reto formativo de Angular 20" document.

## Target Stack

- Frontend: Angular 20, TypeScript strict mode, standalone components, SCSS.
- Backend: Spring Boot 3.
- Database: MySQL.
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
- Angular 20 frontend uses TypeScript strict mode, standalone components, SCSS, and zoneless change detection.
- The initial application shell contains reusable `Header`, `PageTitle`, and `Footer` components.
- The temporary user menu uses a signal to show and hide its panel.
- Unit tests use `provideZonelessChangeDetection()` to match the application's Angular configuration.
- `npm test` passed with 6 specs and 0 failures.
- `npm run build` completed successfully.
- Typed incident and user domain models are implemented.
- Application mock data is intentionally avoided; a real API will be used before the incident list is implemented.
- Spring Boot, MySQL, and live API integration are not implemented yet.

## Next Step

Prepare the Spring Boot backend and MySQL environment before implementing an incident list with live data.