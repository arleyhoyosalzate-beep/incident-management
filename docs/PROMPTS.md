# AI Prompt Log

## Purpose

Record relevant AI-assisted work that affects project decisions, code, documentation, or learning.

Do not store secrets, access tokens, personal data, or entire chat transcripts.

## Entry Template

### Date / Challenge Day

- Objective:
- Context provided to the AI:
- Prompt:
- Result applied:
- Files affected:
- Verification performed:
- Decision or learning:
- Related commit:

## 2026-07-27 / Day 1

- Objective: Initialize the Angular application and establish the project documentation workflow.
- Context provided to the AI: Angular 20 training challenge and the goal of learning a professional AI-assisted development workflow.
- Prompt: Guide me step by step to start the new project.
- Result applied: Created the repository structure, initialized Angular 20 in `frontend`, enabled routing, SCSS, strict mode, standalone components, and Git.
- Files affected: Initial Angular frontend files and project documentation structure.
- Verification performed: Confirmed the application runs at `http://localhost:4200`, completed `npm run build` successfully, and passed 2 unit tests with 0 failures.
- Decision or learning: Use short, versioned documentation as persistent context instead of relying on chat memory.
- Related commit: `bde27fa` - chore(project): initialize Angular incident management application.

## 2026-07-27 / Day 2

- Objective: Define the typed domain models for the incident management system.
- Context provided to the AI: The Angular 20 challenge requires strict TypeScript, and this project will integrate with a real Spring Boot API instead of application mock data.
- Prompt: Guide me step by step to define the domain models and explain the TypeScript decisions.
- Result applied: Created typed incident, user, role, priority, status, and search criteria models.
- Files affected: `frontend/src/app/core/models/incident.model.ts`, `frontend/src/app/core/models/user.model.ts`, `frontend/src/app/core/models/incident-search-criteria.ts`, `docs/decisions/ADR-002-real-api-instead-of-application-mocks.md`.
- Verification performed: `npm run build` completed successfully.
- Decision or learning: Use union types for closed value sets, interfaces for domain data, and a class when search criteria needs behavior.
- Related commit: `dcfe71f` - feat(models): define typed incident domain models.