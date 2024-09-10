import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosListPage } from './alumnos-list.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosListPageRoutingModule {}
