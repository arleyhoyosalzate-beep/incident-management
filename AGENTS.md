# Project Instructions

## Read First

Before making changes, review:

- `docs/AI_CONTEXT.md`
- `docs/PROMPTS.md`
- Relevant files in `docs/decisions/`

## Project Structure

- `frontend/`: Angular 20 application.
- `backend/`: Future Spring Boot 3 application.
- `docs/`: Project documentation and technical decisions.
- `.github/`: GitHub Copilot instructions.

## Frontend Commands

Run commands from the `frontend/` directory:

```bash
npm start
npm run build
npm test -- --run
```

## Development Standards

- Use TypeScript strict mode.
- Do not use `any` without documented justification.
- Use standalone Angular components.
- Keep code, identifiers, branches, and commits in English.
- Keep documentation in Spanish unless a technical integration requires English.
- Prefer small, cohesive components and explicit types.
- Do not place business logic in Angular templates.
- Do not make HTTP requests directly from components.

## Workflow

1. Understand the requirement and acceptance criteria.
2. Propose the smallest safe implementation.
3. Implement one focused task.
4. Run relevant checks.
5. Update documentation when a decision or AI-assisted change matters.
6. Report changed files, verification, and remaining risks.

## Safety

- Do not commit secrets, passwords, tokens, or API keys.
- Do not make destructive changes without explicit confirmation.
- Preserve existing user changes.
- Do not change the architecture without documenting the reason.