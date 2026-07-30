import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideZonelessChangeDetection } from '@angular/core';
describe('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
        await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
  });

  it('creates the application', () => {
    expect(component).toBeTruthy();
  });

  it('renders the application shell', () => {
    fixture.detectChanges();

    const compiled: HTMLElement = fixture.nativeElement;

    expect(compiled.querySelector('app-header')).not.toBeNull();
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Gestión de incidencias',
    );
    expect(compiled.querySelector('app-footer')).not.toBeNull();
  });
});