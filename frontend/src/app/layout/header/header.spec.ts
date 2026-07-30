import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
  imports: [Header],
  providers: [provideZonelessChangeDetection()],
  }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  it('shows and hides the user menu when the user button is clicked', () => {
    const userButton = fixture.nativeElement.querySelector(
      '.app-header__user-button',
    ) as HTMLButtonElement;

    expect(fixture.nativeElement.querySelector('.app-header__menu-panel')).toBeNull();
    expect(userButton.getAttribute('aria-expanded')).toBe('false');

    userButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.app-header__menu-panel')).not.toBeNull();
    expect(userButton.getAttribute('aria-expanded')).toBe('true');

    userButton.click();
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('.app-header__menu-panel')).toBeNull();
    expect(userButton.getAttribute('aria-expanded')).toBe('false');
  });
});