// Ruta: src/app/pages/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para *ngFor y *ngIf
import { CardEventoComponent } from '../../shared/components/card-evento/card-evento'; // Importa tu card

// --- Interfaz (Idealmente, mover a 'src/app/shared/interfaces/event-card.interface.ts') ---
export interface EventCard {
  id: number;
  imageUrl: string;
  category: string;
  price: string | number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  capacity: string;
  paymentMethods: string[];
}

// --- Datos de Ejemplo ---
const MOCK_EVENTS: EventCard[] = [
  {
    id: 1,
    imageUrl: 'assets/images/evento-ia.jpg', // (Asegúrate de tener esta imagen)
    category: 'Académico',
    price: 'S/ 0.00',
    title: 'Seminario de Inteligencia Artificial y Machine Learning',
    description: 'Conferencia magistral sobre las últimas tendencias en IA y ML aplicadas a la industria tecnológica.',
    date: '9 de noviembre, 2025',
    time: '14:00 - 18:00',
    location: 'Auditorio Principal - Campus UPeU',
    organizer: 'Ingeniería y Arquitectura',
    capacity: '154 / 200 inscritos',
    paymentMethods: ['Tipe', 'Pin', 'Transferencia', 'Efectivo']
  },
  {
    id: 2,
    imageUrl: 'assets/images/evento-cultural.jpg', // (Asegúrate de tener esta imagen)
    category: 'Cultural',
    price: 'Gratis',
    title: 'Festival Cultural Andino 2025',
    description: 'Celebración de la riqueza cultural de los Andes. Incluye danzas folklóricas, música tradicional...',
    date: '15 de noviembre, 2025',
    time: '14:00 - 20:00',
    location: 'Plaza Central',
    organizer: 'Todos',
    capacity: '433 / 500 inscritos',
    paymentMethods: []
  }
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,         // <-- Necesario
    CardEventoComponent   // <-- Tu card importada
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {

  // Esta es la lista que tu HTML va a mostrar
  public events: EventCard[] = [];

  constructor() { }

  ngOnInit(): void {
    // Por defecto está vacío, como pediste.
    // ¡¡Descomenta la línea de abajo para ver tus cards!!

    // this.events = MOCK_EVENTS;
  }
}
