import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';

@Component({
  selector: 'app-evento-detalle',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule, MenuAdminComponent],
  templateUrl: './evento-detalle.component.html',
  styleUrl: './evento-detalle.component.scss',
})
export class EventoDetalleComponent {
  entradas = [
    {
      nombre: 'General',
      precio: 100,
      inicio: '28/03/2025',
      fin: '02/04/2025',
    },
  ];

  displayedColumns = ['nombre', 'precio', 'inicio', 'fin'];
}
