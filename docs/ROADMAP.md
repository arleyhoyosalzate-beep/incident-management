# Project Roadmap

## Reference

The main learning requirements are defined in the Angular 20 training challenge document.

This roadmap adapts that challenge to a portfolio-quality full-stack incident management system.

## Day 1 - Environment and Project Setup

Status: Completed

- [x] Verify Node.js, npm, and Git.
- [x] Create the Angular 20 frontend.
- [x] Enable routing, SCSS, strict mode, and standalone components.
- [x] Run the application locally.
- [x] Run a production build.
- [x] Initialize the Git repository.
- [x] Create the initial documentation structure.
- [x] Complete the README.
- [x] Create the first commit.

## Day 2 - Typed Domain Models

Status: Completed

- [x] Define `IncidentStatus`.
- [x] Define `IncidentPriority`.
- [x] Define the `Incident` interface.
- [x] Define the `User` interface and valid roles.
- [x] Create `IncidentSearchCriteria`.
- [x] Verify the frontend build.
- [x] Document the decision to use a real API instead of application mock data.
- [x] Record Day 2 learning notes.
- [ ] Create the Day 2 commit.
## Next Technical Step

Before displaying an incident list, set up the Spring Boot backend and MySQL environment according to ADR-002.

This ensures the frontend integrates with a real API instead of application mock data.
## Phase 1 - Angular Foundations

Days 2 to 7:

- Define typed incident domain models.
- Create the initial layout and reusable components.
- Render mock incident data with modern control flow.
- Implement parent-child communication.
- Build responsive and accessible styles.
- Add reusable pipes and directives.

## Phase 2 - State and Forms

Days 8 to 14:

- Create services and Signals-based state.
- Build typed reactive forms and custom validators.
- Configure routes, child routes, and lazy loading.
- Define the frontend architecture for incidents.

## Phase 3 - Backend and API Integration

Days 15 to 18:

- Create the Spring Boot backend.
- Configure MySQL.
- Define and implement the REST API.
- Integrate Angular with HttpClient.
- Implement RxJS search and HTTP error handling.

## Phase 4 - Authentication and Application State

Days 19 to 23:

- Implement authentication flow.
- Add authorization by role.
- Centralize incident state.
- Add filters, sorting, and pagination.
- Create reusable shared components.

## Phase 5 - Quality, Performance, and Delivery

Days 24 to 30:

- Add unit, HTTP, routing, guard, and interceptor tests.
- Improve performance and lazy loading.
- Review security and configuration.
- Document, deploy, and present the project.

## Rule for Progress

Do not mark a day as complete until:

- The feature works.
- Relevant checks pass.
- Documentation is updated when needed.
- A descriptive commit exists.
- The implemented concepts can be explained.