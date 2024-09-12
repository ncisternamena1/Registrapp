import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno-dashboard',
  templateUrl: './alumno-dashboard.page.html',
  styleUrls: ['./alumno-dashboard.page.scss'],
})
export class AlumnoDashboardPage implements OnInit {
  username: string | null = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  verCursos() {
    // Aquí rediriges a la página de cursos
    this.router.navigate(['/cursos']);
  }

  escanearQR() {
    // Aquí rediriges a la funcionalidad de escaneo de QR
    this.router.navigate(['/escanear-qr']);
  }
}