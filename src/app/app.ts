import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import DashboardPageComponent from './gifs/pages/dashborad-component/dashboard-page-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardPageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('first-app');
}
