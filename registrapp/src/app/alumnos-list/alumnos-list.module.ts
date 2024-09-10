import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosListPageRoutingModule } from './alumnos-list-routing.module';

import { AlumnosListPage } from './alumnos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosListPageRoutingModule
  ],
  declarations: [AlumnosListPage]
})
export class AlumnosListPageModule {}
