import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';
import { MatIcon } from '@angular/material/icon';
import { EventService } from '../../../services/event.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventMF } from '../../../models/event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evento-listar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MenuAdminComponent, MatIcon],
  templateUrl: './evento-listar.component.html',
  styleUrl: './evento-listar.component.scss',
})
export class EventoListarComponent {
  eventos: Array<EventMF> = [];
  visibleCount: number = 6;

  constructor(
    public eventService: EventService,
    private snackbar: MatSnackBar,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEvents();
  }

  viewMore() {
    this.visibleCount += 3;
  }

  back() {
    this.router.navigate(['/home']);
  }

  buy(id: number) {
    this.router.navigate(['events/detail', id]);
  }

  getEvents() {
    this.eventService.getEventos().subscribe({
      next: (data: EventMF[]) => {
        this.eventos = data;
      },
      error: () => {
        this.snackbar.open('Error al cargar los eventos', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }
}
