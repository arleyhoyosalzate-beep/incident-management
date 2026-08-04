# Contrato de API

## Estado

La API de negocio está pausada por directriz del mentor mientras se completan las fases frontend.

El único endpoint existente es técnico:

- GET /actuator/health

No existen endpoints de incidencias, usuarios, autenticación o comentarios. Angular no consume ningún endpoint todavía.

## Decisión temporal de frontend

Durante los días frontend iniciales, la interfaz utilizará incidencias locales tipadas. Esos datos existen para aprender presentación, interacción, estado y formularios; no representan una API ni una fuente de datos definitiva.

Antes de implementar API de negocio:

1. Finalizar las fases frontend previstas.
2. Migrar backend de Maven a Gradle Wrapper.
3. Verificar Gradle, MySQL y el endpoint de salud.
4. Definir el contrato HTTP.

## Contrato futuro

- Protocolo: HTTP.
- Formato: JSON.
- Frontend: servicios dedicados, no componentes.
- Backend: validación, reglas de negocio, persistencia y autorización.

## Recursos previstos

- Incidents.
- Users.
- Roles.
- Comments.
- Assignments.

## Decisiones pendientes

- Ruta base de API.
- Formato de errores.
- Paginación, filtros y ordenamiento.
- Autenticación y autorización.
