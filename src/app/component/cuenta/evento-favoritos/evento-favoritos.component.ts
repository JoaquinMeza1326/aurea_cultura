import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';

@Component({
  selector: 'app-evento-favoritos',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule, MenuAdminComponent],
  templateUrl: './evento-favoritos.component.html',
  styleUrl: './evento-favoritos.component.scss',
})
export class EventoFavoritosComponent {
  entradas = [
    {
      Codigo: 'AECLT20432',
      NombreEvento: 'Nomnbre',
      FechaInicio: '12/06/2025',
      FechaFin: '12/06/2025',
    },
  ];

  displayedColumns = [
    'Codigo',
    'NombreEvento',
    'FechaInicio',
    'FechaFin',
  ];
}
