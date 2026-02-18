import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashborad-component/dashboard-page-component'),
  },
  { path: '**', redirectTo: 'dashboard' },
];
