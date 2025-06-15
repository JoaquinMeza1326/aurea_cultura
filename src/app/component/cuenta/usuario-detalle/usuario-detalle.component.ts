import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';

@Component({
  selector: 'app-usuario-detalle',
  standalone: true,
  imports: [MatIconModule, MenuAdminComponent],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.scss',
})
export class UsuarioDetalleComponent {}
