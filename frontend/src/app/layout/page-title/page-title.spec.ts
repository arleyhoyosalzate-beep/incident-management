import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTitle } from './page-title';
import { provideZonelessChangeDetection } from '@angular/core';
describe('PageTitle', () => {
  let component: PageTitle;
  let fixture: ComponentFixture<PageTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTitle],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(PageTitle);
    component = fixture.componentInstance;
  });

  it('renders the provided title and description', () => {
    fixture.componentRef.setInput('title', 'Gestión de incidencias');
    fixture.componentRef.setInput(
      'description',
      'Consulta y administra los incidentes registrados.',
    );

    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;

    expect(component).toBeTruthy();
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Gestión de incidencias',
    );
    expect(compiled.querySelector('p')?.textContent).toContain(
      'Consulta y administra los incidentes registrados.',
    );
  });
});