import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  email: string = '';
  password: string = '';
  error: string = '';
  loading: boolean = false;

  //constructor(private router: Router) {}
  router = inject(Router);
  async onSubmit(event: Event) {
    event.preventDefault();
    this.error = '';
    this.loading = true;

    // Simular autenticación - reemplaza con tu servicio real
    const success = await this.login(this.email, this.password);

    if (!success) {
      this.error = 'Credenciales incorrectas. Por favor, intenta de nuevo.';
    }

    this.loading = false;
  }

  private async login(email: string, password: string): Promise<boolean> {
    // Simular llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Lógica de autenticación - reemplaza con tu implementación real
    const validCredentials = [
      { email: 'admin@upeu.edu.pe', password: 'admin123' },
      { email: 'coordinador@upeu.edu.pe', password: 'coord123' },
      { email: '2020001@upeu.edu.pe', password: 'student123' },
    ];

    return validCredentials.some((cred) => cred.email === email && cred.password === password);
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
