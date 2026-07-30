# API Contract

## Status

Backend foundation implemented. No business API endpoints are implemented yet.

## Purpose

Define the contract between the Angular frontend and the Spring Boot backend.

## Communication Format

- Protocol: HTTP.
- Data format: JSON.
- Backend responsibility: validation, business rules, authorization, and persistence.
- Frontend responsibility: call the API through dedicated services and display useful feedback.

## Planned Resources

- Incidents.
- Users.
- Roles.
- Comments.
- Incident assignments.

## Planned Operations

The system is expected to support:

- List incidents.
- Create an incident.
- View incident details.
- Update an incident.
- Delete an incident.
- Change incident status.
- Assign an incident to an agent.
- Add comments.
- Authenticate users.
- Filter and search incidents.

## Endpoint Design Rules

- Use resource-oriented URLs.
- Use standard HTTP methods.
- Return meaningful HTTP status codes.
- Validate input on the backend.
- Do not expose database entities directly without reviewing the API contract.
- Document every implemented endpoint here.

## Implemented Infrastructure Endpoints

### Health Check

- Method: `GET`
- Path: `/actuator/health`
- Purpose: verify that the local Spring Boot service is running and healthy.
- Verified response: `UP`.

This endpoint is provided by Spring Boot Actuator. It is an infrastructure endpoint, not an incident-management business endpoint and is not consumed by the Angular frontend yet.

## Pending Decisions

- API base path.
- Authentication strategy.
- Error response format.
- Pagination format.
- Filter and sorting query parameters.