import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';

@Component({
  selector: 'app-transacciones',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule, MenuAdminComponent],
  templateUrl: './transacciones.component.html',
  styleUrl: './transacciones.component.scss',
})
export class TransaccionesComponent {
  entradas = [
    {
      Codigo: 'AECLT20432',
      Fecha: '12/06/2025',
      Monto: 100,
      Cantidad: 25,
    },
  ];

  displayedColumns = ['Codigo', 'Fecha', 'Monto', 'Cantidad'];
}
