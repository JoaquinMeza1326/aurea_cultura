import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-menu-admin',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatMenuModule],
  templateUrl: './menu-admin.component.html',
  styleUrl: './menu-admin.component.scss'
})
export class MenuAdminComponent {

}
