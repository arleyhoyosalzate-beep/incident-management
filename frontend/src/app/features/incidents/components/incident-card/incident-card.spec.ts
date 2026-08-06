import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INITIAL_INCIDENTS } from '../../data/incident-data';
import { IncidentCard } from './incident-card';

describe('IncidentCard', () => {
  let component: IncidentCard;
  let fixture: ComponentFixture<IncidentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentCard],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentCard);
    component = fixture.componentInstance;

    fixture.componentRef.setInput(
      'incident',
      INITIAL_INCIDENTS[0],
    );

    fixture.detectChanges();
  });

  it('creates the component with its required input', () => {
    expect(component).toBeTruthy();
  });

  it('renders the incident information', () => {
    const compiled: HTMLElement = fixture.nativeElement;

    expect(compiled.textContent).toContain(
      INITIAL_INCIDENTS[0].title,
    );
    expect(compiled.textContent).toContain(
      INITIAL_INCIDENTS[0].description,
    );
    expect(compiled.textContent).toContain('Abierta');
  });

  it('emits the incident id when select is clicked', () => {
    const selectedSpy = spyOn(
      component.incidentSelected,
      'emit',
    );
    const compiled: HTMLElement = fixture.nativeElement;
    const selectButton =
      compiled.querySelector<HTMLButtonElement>(
        '.incident-card__button--select',
      );

    selectButton?.click();

    expect(selectedSpy).toHaveBeenCalledOnceWith(
      INITIAL_INCIDENTS[0].id,
    );
  });

  it('emits the incident id when delete is clicked', () => {
    const deleteSpy = spyOn(
      component.deleteRequested,
      'emit',
    );
    const compiled: HTMLElement = fixture.nativeElement;
    const deleteButton =
      compiled.querySelector<HTMLButtonElement>(
        '.incident-card__button--delete',
      );

    deleteButton?.click();

    expect(deleteSpy).toHaveBeenCalledOnceWith(
      INITIAL_INCIDENTS[0].id,
    );
  });
});