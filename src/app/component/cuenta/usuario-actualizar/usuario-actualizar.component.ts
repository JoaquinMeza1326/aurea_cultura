import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';

@Component({
  selector: 'app-usuario-actualizar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MenuAdminComponent,
  ],
  templateUrl: './usuario-actualizar.component.html',
  styleUrl: './usuario-actualizar.component.scss',
})
export class UsuarioActualizarComponent {}
