import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
    },
    {
        path: 'skills',
        loadComponent: () => import('./features/skills/skills').then((m) => m.Skills),
    },
    {
        path: 'works',
        loadComponent: () => import('./features/works/works').then((m) => m.Works),
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((m) => m.About),
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];

