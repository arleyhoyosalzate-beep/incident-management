# Database Design

## Status

Draft. MySQL is not configured yet.

## Purpose

Document the future persistence model for the incident management system.

## Data Ownership

- MySQL stores persistent application data.
- Spring Boot is the only layer that accesses the database.
- Angular never connects directly to MySQL.

## Initial Domain Entities

### User

Represents a person who can report or manage incidents.

Planned information:

- Identifier.
- Name.
- Email.
- Password hash.
- Role or roles.
- Account status.

### Incident

Represents a technical issue reported by a user.

Planned information:

- Identifier.
- Title.
- Description.
- Category.
- Priority.
- Status.
- Reporter.
- Assigned support agent, when applicable.
- Creation and update timestamps.

### Comment

Represents a message added to an incident.

Planned information:

- Identifier.
- Incident.
- Author.
- Content.
- Creation timestamp.

### Role

Represents authorization levels in the system.

Initial roles:

- Administrator.
- Support agent.
- Requesting user.

## Planned Relationships

- One user can report many incidents.
- One incident has one reporting user.
- One incident may have one assigned support agent.
- One incident can contain many comments.
- One user can create many comments.
- Users can have one or more roles, depending on the final authorization design.

## Pending Decisions

- Identifier strategy.
- Exact table names and column types.
- Relationship between users and roles.
- Database migration tool.
- Audit and soft-delete requirements.