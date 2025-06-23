import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-actualizar',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MenuAdminComponent,
    ReactiveFormsModule,
    MatError,
  ],
  templateUrl: './usuario-actualizar.component.html',
  styleUrl: './usuario-actualizar.component.scss',
})
export class UsuarioActualizarComponent {
  userForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.userForm = this.fb.group({});
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
