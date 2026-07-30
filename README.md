# Incident Management System

A portfolio-oriented technical incident management system built while completing an Angular 20 training challenge.

## Current Status

The Angular 20 frontend is implemented and verified locally.

The Spring Boot 4.1 backend, MySQL 8.4 Docker environment, and health endpoint are also working locally.

Incident entities and business API endpoints are the next implementation stage.

## Technology Stack

- Angular 20
- TypeScript with strict mode
- SCSS
- Spring Boot 4.1 with Java 21 and Maven Wrapper
- MySQL 8.4 with Docker Compose
- Git and GitHub

## Project Structure

```text
incident-management/
├── frontend/    # Angular application
├── backend/     # Spring Boot REST API
├── docs/        # Project documentation
└── .github/     # GitHub Copilot instructions
```

## Prerequisites

- Node.js 20.19.0 or newer.
- npm.
- Git.
- Java 21.
- Docker Desktop with WSL 2.
## Run the Frontend

```bash
cd frontend
npm install
npm start
```

Open `http://localhost:4200` in a browser.

## Run a Production Build

```bash
cd frontend
npm run build
```
## Run the Database

From the repository root:

```powershell
docker compose up -d
docker compose ps
```
## Documentation

- `docs/AI_CONTEXT.md`: Persistent project context for AI-assisted work.
- `docs/ARCHITECTURE.md`: High-level system architecture.
- `docs/ROADMAP.md`: Training challenge progress.
- `docs/PROMPTS.md`: Relevant AI prompt log.
- `docs/decisions/`: Architecture Decision Records.

## Development Workflow

1. Read the requirement and acceptance criteria.
2. Analyze and document relevant decisions.
3. Implement a focused task.
4. Run the appropriate checks.
5. Update documentation if needed.
6. Create a descriptive Git commit.

## License

This project is for learning and portfolio purposes.