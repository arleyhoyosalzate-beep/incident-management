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

  it('renders one card for each incident', () => {
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const incidentCards = compiled.querySelectorAll(
      'app-incident-card',
    );

    expect(incidentCards.length).toBe(
      INITIAL_INCIDENTS.length,
    );
  });

  it('renders the empty state when there are no incidents', () => {
    component.incidents = [];
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const incidentCards = compiled.querySelectorAll(
      'app-incident-card',
    );
    const emptyState = compiled.querySelector(
      '.incident-list__empty',
    );

    expect(incidentCards.length).toBe(0);
    expect(emptyState?.textContent).toContain(
      'No hay incidencias registradas.',
    );
  });

  it('updates the selection when a child emits an event', () => {
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;
    const selectButton =
      compiled.querySelector<HTMLButtonElement>(
        '.incident-card__button--select',
      );

    expect(selectButton).not.toBeNull();

    selectButton?.click();
    fixture.detectChanges();

    expect(component.selectedIncidentId).toBe(
      INITIAL_INCIDENTS[0].id,
    );

    const selectionMessage = compiled.querySelector(
      '.incident-list__selection',
    );

    expect(selectionMessage?.textContent).toContain(
      INITIAL_INCIDENTS[0].id,
    );
  });

  it('removes an incident when a child requests deletion', () => {
    fixture.detectChanges();

    const incidentIdToDelete = INITIAL_INCIDENTS[0].id;
    const compiled: HTMLElement = fixture.nativeElement;
    const deleteButton =
      compiled.querySelector<HTMLButtonElement>(
        '.incident-card__button--delete',
      );

    expect(deleteButton).not.toBeNull();

    deleteButton?.click();
    fixture.detectChanges();

    expect(component.incidents.length).toBe(
      INITIAL_INCIDENTS.length - 1,
    );
    expect(
      component.incidents.some(
        (incident) => incident.id === incidentIdToDelete,
      ),
    ).toBeFalse();

    const remainingCards = compiled.querySelectorAll(
      'app-incident-card',
    );

    expect(remainingCards.length).toBe(
      INITIAL_INCIDENTS.length - 1,
    );
  });
});