import type {
  IncidentPriority,
  IncidentStatus,
} from './incident.model';

export class IncidentSearchCriteria {
  constructor(
    public readonly term: string = '',
    public readonly status?: IncidentStatus,
    public readonly priority?: IncidentPriority,
    public readonly category?: string,
  ) {}

  hasActiveFilters(): boolean {
    return (
      this.term.trim().length > 0 ||
      this.status !== undefined ||
      this.priority !== undefined ||
      (this.category?.trim().length ?? 0) > 0
    );
  }
}