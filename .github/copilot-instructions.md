# GitHub Copilot Instructions

## Project Context

This repository contains a technical incident management system.

- Frontend: Angular 20 with standalone components, strict TypeScript, and SCSS.
- Backend: Spring Boot 3, planned for a later stage.
- Database: MySQL, planned for a later stage.

## Rules

- Write code, identifiers, branch names, and commits in English.
- Do not use `any` without documented justification.
- Prefer clear, small, cohesive components and services.
- Do not put business logic in Angular templates.
- Do not perform HTTP requests directly from components.
- Do not introduce secrets or credentials into the repository.
- Do not change the architecture without explaining the reason.

## Working Process

Before implementing a relevant change, consult:

- `docs/AI_CONTEXT.md`
- `docs/PROMPTS.md`
- Applicable decision records in `docs/decisions/`

For each change, suggest or report:

1. Files affected.
2. Verification to run.
3. Relevant risks or pending work.