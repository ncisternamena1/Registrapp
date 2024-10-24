import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProfesorDashboardPage } from './profesor-dashboard/profesor-dashboard.page';
import { AlumnosListPage } from './alumnos-list/alumnos-list.page';

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'profesor-dashboard', loadChildren: () => import('./profesor-dashboard/profesor-dashboard.module').then(m => m.ProfesorDashboardPageModule) },
  { path: 'alumno-dashboard', loadChildren: () => import('./alumno-dashboard/alumno-dashboard.module').then(m => m.AlumnoDashboardPageModule) },
  {
    path: 'alumnos-list',
    loadChildren: () => import('./alumnos-list/alumnos-list.module').then( m => m.AlumnosListPageModule)
  },
  { path: 'profesor-dashboard', component: ProfesorDashboardPage },
  { path: 'alumnos-list', component: AlumnosListPage },
  {
    path: 'recoverypass',
    loadChildren: () => import('./recoverypass/recoverypass.module').then( m => m.RecoverypassPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'escanear-qr',
    loadChildren: () => import('./escanear-qr/escanear-qr.module').then( m => m.EscanearQrPageModule)
  },
  {
    path: 'generar-qr',
    loadChildren: () => import('./generar-qr/generar-qr.module').then( m => m.GenerarQrPageModule)
  },
  {
    path: 'generar-reporte',
    loadChildren: () => import('./generar-reporte/generar-reporte.module').then( m => m.GenerarReportePageModule)
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  },

  

 
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
