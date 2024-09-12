import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.page.html',
  styleUrls: ['./alumnos-list.page.scss'],
})
export class AlumnosListPage {
  alumnos = [
    { nombre: ' PEPE TAPIA.' },
    { nombre: ' RODRIGO SEPULVEDA ' },
    { nombre: 'FELIPE CAMIROAGA.' },
    { nombre: 'JUANITO MUSO' },
    
  ];

  constructor(private router: Router) {}

  goToGenerateQR() {
    this.router.navigate(['/generar-qr']);
  }

  goToGenerateReport() {
    this.router.navigate(['/generar-reporte']);
  }
}