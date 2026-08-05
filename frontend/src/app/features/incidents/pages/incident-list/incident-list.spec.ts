import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INITIAL_INCIDENTS } from '../../data/incident-data';
import { IncidentList } from './incident-list';

describe('IncidentList', () => {
  let component: IncidentList;
  let fixture: ComponentFixture<IncidentList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentList],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentList);
    component = fixture.componentInstance;
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('renders one item for each incident', () => {
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const incidentItems = compiled.querySelectorAll(
      '.incident-list__item',
    );

    expect(incidentItems.length).toBe(INITIAL_INCIDENTS.length);
  });

  it('renders the empty state when there are no incidents', () => {
    component.incidents = [];
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const incidentItems = compiled.querySelectorAll(
      '.incident-list__item',
    );
    const emptyState = compiled.querySelector(
      '.incident-list__empty',
    );

    expect(incidentItems.length).toBe(0);
    expect(emptyState?.textContent).toContain(
      'No hay incidencias registradas.',
    );
  });

  it('renders status labels and optional assigned agents', () => {
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const incidentItems = Array.from(
      compiled.querySelectorAll<HTMLElement>('.incident-list__item'),
    );

    expect(incidentItems[0].textContent).toContain('Abierta');
    expect(incidentItems[0].textContent).not.toContain(
      'Agente asignado',
    );

    expect(incidentItems[1].textContent).toContain('En progreso');
    expect(incidentItems[1].textContent).toContain('agent-001');

    expect(incidentItems[2].textContent).toContain('Resuelta');
    expect(incidentItems[2].textContent).toContain('agent-002');

    expect(incidentItems[3].textContent).toContain('Cerrada');
    expect(incidentItems[3].textContent).not.toContain(
      'Agente asignado',
    );
  });
});