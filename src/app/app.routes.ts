import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashborad-component/dashboard-page-component'),

    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-component/trending-page-component'),
      },

      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-component/search-page-component'),
      },
      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
