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
      import('./component/cuenta/inicio/inicio.component').then(
        (m) => m.InicioComponent
      ),
  },
  {
    path: 'events',
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadComponent: () =>
          import(
            './component/cuenta/evento-listar/evento-listar.component'
          ).then((m) => m.EventoListarComponent),
      },
      {
        path: 'detail',
        loadComponent: () =>
          import(
            './component/cuenta/evento-detalle/evento-detalle.component'
          ).then((m) => m.EventoDetalleComponent),
      },
      {
        path: 'buy',
        loadComponent: () =>
          import(
            './component/cuenta/evento-comprar/evento-comprar.component'
          ).then((m) => m.EventoComprarComponent),
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
