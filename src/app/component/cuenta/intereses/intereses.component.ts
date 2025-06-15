import { Component } from '@angular/core';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-intereses',
  standalone: true,
  imports: [MenuAdminComponent, MatButtonModule],
  templateUrl: './intereses.component.html',
  styleUrl: './intereses.component.scss',
})
export class InteresesComponent {}
