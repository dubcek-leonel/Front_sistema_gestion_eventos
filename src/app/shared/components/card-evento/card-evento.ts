// Ruta: src/app/shared/components/card-evento/card-evento.component.ts

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

// (Recuerda que esta interfaz está en home.component.ts por ahora)
import { EventCard } from '../../../pages/home/home';

@Component({
  selector: 'app-card-evento',
  standalone: true,
  imports: [CommonModule], // <-- Importante para *ngIf, [ngClass], etc.
  templateUrl: './card-evento.html',
  styleUrls: ['./card-evento.scss']
})
export class CardEventoComponent {

  // 1. Define la "propiedad" de entrada que recibirá los datos
  @Input() event!: EventCard;

  // 2. (Opcional) Lógica para la barra de progreso
  getCapacityPercentage(): string {
    if (this.event && this.event.capacity) {
      const parts = this.event.capacity.split('/');
      if (parts.length === 2) {
        const current = parseInt(parts[0].trim(), 10);
        const max = parseInt(parts[1].trim(), 10);
        if (!isNaN(current) && !isNaN(max) && max > 0) {
          const percentage = (current / max) * 100;
          return percentage + '%';
        }
      }
    }
    return '0%';
  }
}
