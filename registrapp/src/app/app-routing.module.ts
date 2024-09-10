import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfesorDashboardPage } from './profesor-dashboard/profesor-dashboard.page';
import { AlumnosListPage } from './alumnos-list/alumnos-list.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'profesor-dashboard', loadChildren: () => import('./profesor-dashboard/profesor-dashboard.module').then(m => m.ProfesorDashboardPageModule) },
  { path: 'alumno-dashboard', loadChildren: () => import('./alumno-dashboard/alumno-dashboard.module').then(m => m.AlumnoDashboardPageModule) },
  {
    path: 'alumnos-list',
    loadChildren: () => import('./alumnos-list/alumnos-list.module').then( m => m.AlumnosListPageModule)
  },
  { path: 'profesor-dashboard', component: ProfesorDashboardPage },
  { path: 'alumnos-list', component: AlumnosListPage },
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
