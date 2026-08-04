# ADR-002: Use a Real API Instead of Application Mock Data

- Status: Superseded in part by ADR-004
- Date: 2026-07-27

## Context

The Angular training challenge proposes typed mock data during its early stages.

This project aims to learn professional full-stack development with Angular, Spring Boot, and MySQL, while building a portfolio-quality application.

## Historical Decision

The application will use a real Spring Boot REST API and MySQL database when incident data is first displayed in the user interface.

The frontend will not maintain mock incidents as its application data source.

Small fixtures or mocked HTTP responses may still be used inside automated tests when isolation is useful.

## Historical Consequences

### Positive

- The project practices real frontend-backend integration early.
- Data persistence and API contracts are treated as first-class concerns.
- The final application does not need a major migration away from mock data.

### Trade-offs

- Backend and database setup must happen earlier.
- Initial progress may be slower because more technologies are involved.
- API design must be documented before frontend integration.

## Supersession

The mentor later established frontend-first learning as the current priority. ADR-004 supersedes this decision only for the initial Angular learning stages: typed local incident data is allowed until the project reaches HTTP integration.

The long-term objective remains a real API and MySQL database.

## Historical Follow-Up

Create the Spring Boot backend and MySQL configuration before implementing the incident list with live data.
