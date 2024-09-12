import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-dashboard',
  templateUrl: './profesor-dashboard.page.html',
  styleUrls: ['./profesor-dashboard.page.scss'],
})
export class ProfesorDashboardPage implements OnInit {
  username: string | null = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  openSection(section: string) {
    this.router.navigate(['/alumnos-list']);
  }
}
