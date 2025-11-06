import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login implements OnInit {
  email: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  router = inject(Router);
  http = inject(HttpClient);

  usuariosSpring: any[] = [];

  // 🔹 Usuarios por defecto
  usuariosPrecargados = [
    { email: 'admin@upeu.edu.pe', password: 'admin123', rol: 'ADMIN' },
    { email: 'admin', password: '123', rol: 'ADMIN' },
    { email: 'coordinador@upeu.edu.pe', password: 'coord123', rol: 'COORDINADOR' },
    { email: '2020001@upeu.edu.pe', password: 'student123', rol: 'ESTUDIANTE' },
  ];

  ngOnInit() {
    console.log('Usuarios precargados:', this.usuariosPrecargados);
    this.getUsuarios(); // Cargar usuarios del backend al iniciar
  }

  getUsuarios() {
    this.http.get('http://localhost:8080/usuarios').subscribe({
      next: (data: any) => {
        this.usuariosSpring = data;
        console.log('Usuarios del servidor:', data);
      },
      error: (error) => {
        console.error('Error al obtener usuarios del servidor:', error);
      },
    });
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    this.error = '';
    this.loading = true;

    const success = await this.login(this.email, this.password);

    if (!success) {
      this.error = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
    }

    this.loading = false;
  }

  private async login(email: string, password: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 🔹 Primero buscar en usuarios precargados
    let user = this.usuariosPrecargados.find((u) => u.email === email && u.password === password);

    // 🔹 Si no se encuentra en precargados, buscar en usuarios del backend
    if (!user && this.usuariosSpring.length > 0) {
      user = this.usuariosSpring.find(
        (u) => u.email === email && u.codigoEstudiante.toString() === password
      );
    }

    if (user) {
      // 🔹 Guardar en localStorage
      localStorage.setItem('usuario', JSON.stringify(user));

      // 🔹 Redirigir al dashboard
      this.router.navigate(['/home']);
      return true;
    }

    return false;
  }

  fillCredentials(role: 'admin' | 'coordinator' | 'student') {
    const credentials = {
      admin: { email: 'admin@upeu.edu.pe', password: 'admin123' },
      coordinator: { email: 'coordinador@upeu.edu.pe', password: 'coord123' },
      student: { email: '2020001@upeu.edu.pe', password: 'student123' },
    };

    this.email = credentials[role].email;
    this.password = credentials[role].password;
    this.error = '';
  }
}
