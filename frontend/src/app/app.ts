import { Component } from '@angular/core';
import { Header } from './layout/header/header';
import { PageTitle } from './layout/page-title/page-title';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, PageTitle, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}