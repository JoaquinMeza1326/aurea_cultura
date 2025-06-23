import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MenuAdminComponent } from '../../shared/menu-admin/menu-admin.component';
import { EventService } from '../../../services/event.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EventDto, EventMF } from '../../../models/event';
import { TableComponent } from '../../shared/table/table.component';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketTypeService } from '../../../services/ticket-type.service';
import { TicketType } from '../../../models/ticketType';

@Component({
  selector: 'app-evento-detalle',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule,
    CommonModule,
    MenuAdminComponent,
    TableComponent,
  ],
  templateUrl: './evento-detalle.component.html',
  styleUrl: './evento-detalle.component.scss',
})
export class EventoDetalleComponent {
  columns: { field: string; header: string }[] = [
    { field: 'name', header: 'Nombre' },
    { field: 'price', header: 'Precio' },
    { field: 'startDate', header: 'Fecha Inicio' },
    { field: 'endDate', header: 'Fecha Fin' },
  ];
  tickets: EventDto[] = [];
  ticket: EventDto = {
    descripcion: '',
    endDate: '',
    id: 0,
    image: '',
    name: '',
    price: 0,
    startDate: '',
  };
  ticketTypes: TicketType[] = [];

  constructor(
    public eventService: EventService,
    private ticketTypeService: TicketTypeService,
    private snackbar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTicketInfo();
  }

  buy() {
    this.router.navigate(['/events/buy', this.ticket.id]);
  }

  getTicketInfo() {
    this.ticketTypeService.getTicketTypes().subscribe({
      next: (data: TicketType[]) => {
        this.ticketTypes = data;
        this.getById();
      },
      error: () => {
        this.snackbar.open('Error al cargar los tipos de evento', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }

  cancel() {
    this.router.navigate(['/events/list']);
  }

  getById() {
    const id = this.route.snapshot.paramMap.get('id') || 0;
    this.eventService.getById(Number(id)).subscribe({
      next: (data: EventMF) => {
        const { price = 0 } = this.ticketTypes.find(
          (x) => x.event.id == data.id
        ) as TicketType;

        this.ticket = {
          id: data.id,
          name: data.nombre,
          endDate: data.endDate,
          startDate: data.startDate,
          price: price,
          descripcion: data.descripcion,
          image: data.image,
        };

        this.tickets = [...this.tickets, this.ticket];
      },
      error: () => {
        this.router.navigate(['events/list']);
        this.snackbar.open('Error al cargar el evento', 'Cerrar', {
          duration: 3000,
        });
      },
    });
  }
}
