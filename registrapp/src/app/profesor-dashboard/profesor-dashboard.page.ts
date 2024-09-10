import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-dashboard',
  templateUrl: './profesor-dashboard.page.html',
  styleUrls: ['./profesor-dashboard.page.scss'],
})
export class ProfesorDashboardPage {

  constructor(private router: Router) { }

  // Método que se ejecuta al hacer clic en una sección
  openSection(section: string) {
    this.router.navigate(['/alumnos-list']);
  }
}
