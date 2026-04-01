import { Component, signal } from '@angular/core';

@Component({
  selector: 'search-page-component',
  imports: [],
  templateUrl: './search-page-component.html',
})
export default class SearchPageComponent {
  protected readonly title = signal('first-app');
}
