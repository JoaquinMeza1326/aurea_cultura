import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-evento-listar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MenuAdminComponent, MatIcon],
  templateUrl: './evento-listar.component.html',
  styleUrl: './evento-listar.component.scss',
})
export class EventoListarComponent {
  eventos: Array<{ imagen: string; fecha: string; titulo: string }> = [
    {
      imagen: 'assets/images/eventos.png',
      fecha: 'Marzo 28',
      titulo: 'Sara Flores. Non Nete. Un sueño para una nación indígena',
    },
    {
      imagen: 'assets/images/eventos.png',
      fecha: 'Dic. 13',
      titulo: 'Bruno Zeppilli. Transformaciones visuales',
    },
    {
      imagen: 'assets/images/eventos.png',
      fecha: 'Nov. 29',
      titulo: 'Takahashi. Construir en madera en el Perú',
    },
    {
      imagen: 'assets/images/eventos.png',
      fecha: 'Marzo 28',
      titulo: 'Sara Flores. Non Nete. Un sueño para una nación indígena',
    },
    {
      imagen: 'assets/images/eventos.png',
      fecha: 'Dic. 13',
      titulo: 'Bruno Zeppilli. Transformaciones visuales',
    },
    {
      imagen: 'assets/images/eventos.png',
      fecha: 'Nov. 29',
      titulo: 'Takahashi. Construir en madera en el Perú',
    },
  ];
}
