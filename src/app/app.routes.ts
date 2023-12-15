import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./modules/main/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'settings',
    loadComponent: () => import('./modules/main/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'documents',
    loadComponent: () => import('./modules/documents/document-list/document-list.page').then( m => m.DocumentListPage)
  },
  {
    path: 'document-form',
    loadComponent: () => import('./modules/documents/document-form/document-form.page').then( m => m.DocumentFormPage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

];
