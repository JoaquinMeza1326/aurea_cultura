import { Routes } from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: 'city-list',
    loadComponent: () =>
      import('../component/gestion/city-list/city-list.component').then(
        (m) => m.CityListComponent
      ),
  },
  {
    path: 'city-create',
    loadComponent: () =>
      import('../component/gestion/city-create/city-create.component').then(
        (m) => m.CityCreateComponent
      ),
  },
  {
    path: 'city-edit/:id',
    loadComponent: () =>
      import('../component/gestion/city-edit/city-edit.component').then(
        (m) => m.CityEditComponent
      ),
  },
  {
    path: 'event-list',
    loadComponent: () =>
      import('../component/gestion/event-list/event-list.component').then(
        (m) => m.EventListComponent
      ),
  },
  {
    path: 'event-create',
    loadComponent: () =>
      import('../component/gestion/event-create/event-create.component').then(
        (m) => m.EventCreateComponent
      ),
  },
  {
    path: 'event-edit/:id',
    loadComponent: () =>
      import('../component/gestion/event-edit/event-edit.component').then(
        (m) => m.EventEditComponent
      ),
  },
];
