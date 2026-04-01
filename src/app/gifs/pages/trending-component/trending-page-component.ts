import { Component, signal } from '@angular/core';

@Component({
  selector: 'trending-page-component',
  imports: [],
  templateUrl: './trending-page-component.html',
})
export default class TrendingPageComponent {
  protected readonly title = signal('first-app');
}
