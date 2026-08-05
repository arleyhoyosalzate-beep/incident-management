import { Component } from '@angular/core';
import { IncidentList } from './features/incidents/pages/incident-list/incident-list';
import { Header } from './layout/header/header';
import { PageTitle } from './layout/page-title/page-title';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, PageTitle, IncidentList, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}