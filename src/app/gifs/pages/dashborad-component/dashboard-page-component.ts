import { Component, signal } from '@angular/core';

@Component({
  selector: 'dashboard-page-component',
  imports: [],
  templateUrl: './dashboard-page-component.html',
})
export default class DashboardPageComponent {
  protected readonly title = signal('first-app');
}
