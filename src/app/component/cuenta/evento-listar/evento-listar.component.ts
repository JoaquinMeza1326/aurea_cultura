import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';
import { MatIcon } from '@angular/material/icon';
import { EventService } from '../../../services/event.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventMF } from '../../../models/event';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { EventType } from '../../../models/eventType';
import { Promoter } from '../../../models/promoter';
import { City } from '../../../models/city';
import { Sponsor } from '../../../models/Sponsor';
import { FormsModule } from '@angular/forms';
type FilterKey = keyof EventMF;

@Component({
  selector: 'app-evento-listar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MenuAdminComponent,
    MatIcon,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
  ],
  templateUrl: './evento-listar.component.html',
  styleUrl: './evento-listar.component.scss',
})
export class EventoListarComponent {
  eventos: Array<EventMF> = [];
  eventsFiltereds: EventMF[] = [];
  visibleCount: number = 6;
  selectedFilters: { [key: string]: number } = {
    eventType: 0,
    promoter: 0,
    city: 0,
    sponsor: 0,
  };

  eventTypes: EventType[] = [];
  promotors: Promoter[] = [];
  cities: City[] = [];
  sponsors: Sponsor[] = [];

  constructor(
    public eventService: EventService,
    private snackbar: MatSnackBar,
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
        this.eventsFiltereds = data;
        this.setFilters(data);
      },
      error: () => {
        this.snackbar.open('Error al cargar los eventos', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }

  selectFilter(id: number, key: FilterKey) {
    if (key in this.selectedFilters) {
      this.selectedFilters[key] = id;
    }
  }

  filterEvents() {
    this.eventsFiltereds = this.eventos.filter((evento) =>
      Object.entries(this.selectedFilters).every(([key, value]) => {
        if (value === 0) return true;
        const prop = evento[key as keyof typeof evento];
        return (
          prop && typeof prop === 'object' && 'id' in prop && prop.id === value
        );
      })
    );
    console.log(this.eventsFiltereds);
  }

  setFilters(events: EventMF[]) {
    this.eventTypes = events.map((x) => x.eventType!);
    this.promotors = events.map((x) => x.promoter!);
    this.cities = events.map((x) => x.city!);
    this.sponsors = events.map((x) => x.sponsor!);
  }
}
