import { Component } from '@angular/core';
import type { Incident } from '../../../../core/models/incident.model';
import { INITIAL_INCIDENTS } from '../../data/incident-data';

@Component({
  selector: 'app-incident-list',
  imports: [],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.scss',
})
export class IncidentList {
  incidents: readonly Incident[] = INITIAL_INCIDENTS;
}