import { Component } from '@angular/core';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.page.html',
  styleUrls: ['./alumnos-list.page.scss'],
})
export class AlumnosListPage {
  alumnos = [
    { nombre: 'Alumno 1' },
    { nombre: 'Alumno 2' },
    { nombre: 'Alumno 3' },
    // Añade más alumnos aquí
  ];

  constructor() { }
}
