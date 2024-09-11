import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-dashboard',
  templateUrl: './alumno-dashboard.page.html',
  styleUrls: ['./alumno-dashboard.page.scss'],
})
export class AlumnoDashboardPage {
  constructor(private router: Router) {}

  verCursos() {
    // Aquí rediriges a la página de cursos
    this.router.navigate(['/cursos']);
  }

  escanearQR() {
    // Aquí rediriges a la funcionalidad de escaneo de QR
    this.router.navigate(['/escanear-qr']);
  }
}