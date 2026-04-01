import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuHeader } from '../../components/side-menu-header/side-menu-header.component';
import { SideMenuOptions } from '../../components/side-menu-options/side-menu-options.component';

@Component({
  selector: 'dashboard-page-component',
  imports: [RouterOutlet, SideMenuHeader, SideMenuOptions],
  templateUrl: './dashboard-page-component.html',
})
export default class DashboardPageComponent {
  protected readonly title = signal('first-app');
}
