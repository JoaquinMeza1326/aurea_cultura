import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';

@Component({
  selector: 'app-entradas',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, CommonModule, MenuAdminComponent],
  templateUrl: './entradas.component.html',
  styleUrl: './entradas.component.scss',
})
export class EntradasComponent {
  entradas = [
    {
      Codigo: 'AECLT20432',
      PrecioCompra: 'Nomnbre',
      Fecha: '12/06/2025',
    },
  ];

  displayedColumns = ['Codigo', 'PrecioCompra', 'Fecha'];
}
