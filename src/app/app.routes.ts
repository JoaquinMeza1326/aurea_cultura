import { Routes } from '@angular/router';

import { eventRoutes } from './routes/event.route';
import { userRoutes } from './routes/user.route';

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
      import('./component/cuenta/inicio/inicio.component').then(
        (m) => m.InicioComponent
      ),
  },
  {
    path: 'transactions',
    loadComponent: () =>
      import('./component/cuenta/transacciones/transacciones.component').then(
        (m) => m.TransaccionesComponent
      ),
  },
  {
    path: 'interests',
    loadComponent: () =>
      import('./component/cuenta/intereses/intereses.component').then(
        (m) => m.InteresesComponent
      ),
  },
  {
    path: 'tickets',
    loadComponent: () =>
      import('./component/cuenta/entradas/entradas.component').then(
        (m) => m.EntradasComponent
      ),
  },
  {
    path: 'report',
    loadComponent: () =>
      import('./component/cuenta/reporte/reporte.component').then(
        (m) => m.ReporteComponent
      ),
  },
  {
    path: 'user',
    children: userRoutes,
  },
  {
    path: 'events',
    children: eventRoutes,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
