import { Component } from '@angular/core';
import type { Incident } from '../../../../core/models/incident.model';
import { IncidentCard } from '../../components/incident-card/incident-card';
import { INITIAL_INCIDENTS } from '../../data/incident-data';

@Component({
  selector: 'app-incident-list',
  imports: [IncidentCard],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.scss',
})
export class IncidentList {
  incidents: readonly Incident[] = INITIAL_INCIDENTS;
  selectedIncidentId: string | null = null;

  onIncidentSelected(incidentId: string): void {
    this.selectedIncidentId = incidentId;
  }

  onDeleteRequested(incidentId: string): void {
    this.incidents = this.incidents.filter(
      (incident) => incident.id !== incidentId,
    );

    if (this.selectedIncidentId === incidentId) {
      this.selectedIncidentId = null;
    }
  }
}