import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./component/inicio-sesion/loguearse/loguearse.component').then(
        (m) => m.LoguearseComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import(
        './component/inicio-sesion/registrarse/registrarse.component'
      ).then((m) => m.RegistrarseComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import(
        './component/gestion/inicio/inicio.component'
      ).then((m) => m.InicioComponent),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
