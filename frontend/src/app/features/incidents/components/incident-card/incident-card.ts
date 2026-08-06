import { Component, input, output } from '@angular/core';
import type { Incident } from '../../../../core/models/incident.model';

@Component({
  selector: 'app-incident-card',
  imports: [],
  templateUrl: './incident-card.html',
  styleUrl: './incident-card.scss',
})
export class IncidentCard {
  readonly incident = input.required<Incident>();

  readonly incidentSelected = output<string>();
  readonly deleteRequested = output<string>();

  selectIncident(): void {
    this.incidentSelected.emit(this.incident().id);
  }

  requestDelete(): void {
    this.deleteRequested.emit(this.incident().id);
  }
}