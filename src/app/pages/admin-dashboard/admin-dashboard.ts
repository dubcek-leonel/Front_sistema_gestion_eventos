import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Servicios y modelos (debes crearlos)
//import { AuthService } from '../../services/auth.service';
//import { EventService } from '../../services/event.service';
// { Event, EventRegistration, User } from '../../models/types';

// Componentes (debes crearlos)
//import { EventCardComponent } from '../event-card/event-card.component';
//import { CreateEventDialogComponent } from '../create-event-dialog/create-event-dialog.component';
//import { AttendanceScannerComponent } from '../attendance-scanner/attendance-scanner.component';
//import { ReportsModuleComponent } from '../reports-module/reports-module.component';
// { BulkRegistrationDialogComponent } from '../bulk-registration-dialog/bulk-registration-dialog.component';
//import { UserManagementDialogComponent } from '../user-management-dialog/user-management-dialog.component';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    //EventCardComponent,
    //  CreateEventDialogComponent,
    // AttendanceScannerComponent,
    // ReportsModuleComponent,
    // BulkRegistrationDialogComponent,
    // UserManagementDialogComponent
  ],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.scss',
})
export class AdminDashboard {
  // user: User | null = null;
  events: Event[] = [];
  // registrations: EventRegistration[] = [];
  searchQuery: string = '';
  createDialogOpen: boolean = false;
  editingEvent: Event | undefined;
  selectedEventForAttendance: Event | null = null;
  selectedEventForReport: Event | null = null;
  selectedEventForBulk: Event | null = null;
  userManagementOpen: boolean = false;
  activeTab: string = 'all-events';

  // Stats
  totalEvents: number = 0;
  totalRegistrations: number = 0;
  totalAttendance: number = 0;
  publishedEvents: number = 0;

  //constructor(
  //   private authService: AuthService,
  //   private eventService: EventService,
  //   private router: Router
  // ) {}

  // ngOnInit() {
  //   this.user = this.authService.getCurrentUser();
  //   this.loadData();
  // }

  // loadData() {
  //   this.events = this.eventService.getEvents();
  //   this.registrations = this.eventService.getRegistrations();
  //   this.calculateStats();
  // }

  // calculateStats() {
  //   this.totalEvents = this.events.length;
  //   this.totalRegistrations = this.registrations.length;
  //   this.totalAttendance = this.registrations.filter(r => r.attended).length;
  //   this.publishedEvents = this.events.filter(e => e.status === 'published').length;
  // }

  // get filteredEvents(): Event[] {
  //   if (!this.searchQuery) {
  //     return this.events;
  //   }

  //   const query = this.searchQuery.toLowerCase();
  //   return this.events.filter(event =>
  //     event.title.toLowerCase().includes(query) ||
  //     event.description.toLowerCase().includes(query) ||
  //     event.type.toLowerCase().includes(query) ||
  //     event.faculty.toLowerCase().includes(query)
  //   );
  // }

  // getTabEvents(): Event[] {
  //   const filtered = this.filteredEvents;

  //   switch (this.activeTab) {
  //     case 'published':
  //       return filtered.filter(e => e.status === 'published');
  //     case 'draft':
  //       return filtered.filter(e => e.status === 'draft');
  //     default:
  //       return filtered;
  //   }
  // }

  // onCreateEvent(eventData: any) {
  //   const newEvent: Event = {
  //     ...eventData,
  //     id: `evt-${Date.now()}`,
  //     createdAt: new Date().toISOString(),
  //     createdBy: this.user?.id || '1',
  //     registeredCount: 0
  //   };

  //   this.events = [newEvent, ...this.events];
  //   this.calculateStats();
  //   // this.toastService.success('Evento creado exitosamente');
  // }

  // onUpdateEvent(eventData: any) {
  //   if (!this.editingEvent) return;

  //   this.events = this.events.map(e =>
  //     e.id === this.editingEvent!.id
  //       ? { ...e, ...eventData }
  //       : e
  //   );

  //   this.calculateStats();
  //   // this.toastService.success('Evento actualizado exitosamente');
  //   this.editingEvent = undefined;
  // }

  // onMarkAttendance(registrationId: string) {
  //   this.registrations = this.registrations.map(r =>
  //     r.id === registrationId
  //       ? { ...r, attended: true, attendedAt: new Date().toISOString() }
  //       : r
  //   );
  //   this.calculateStats();
  // }

  // onBulkRegister(eventId: string, studentCodes: string[]) {
  //   const newRegistrations: EventRegistration[] = studentCodes.map(code => ({
  //     id: `reg-${Date.now()}-${code}`,
  //     eventId,
  //     studentCode: code,
  //     registeredAt: new Date().toISOString(),
  //     qrCode: `QR-${eventId}-${code}`,
  //     attended: false
  //   }));

  //   this.registrations = [...this.registrations, ...newRegistrations];

  //   // Update event registered count
  //   this.events = this.events.map(e =>
  //     e.id === eventId
  //       ? { ...e, registeredCount: e.registeredCount + studentCodes.length }
  //       : e
  //   );

  //   this.calculateStats();
  // }

  // onEditEvent(event: Event) {
  //   this.editingEvent = event;
  //   this.createDialogOpen = true;
  // }

  // logout() {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }

  // setActiveTab(tab: string) {
  //   this.activeTab = tab;
  // }
}
