import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RecoverypassPageRoutingModule } from './recoverypass-routing.module';
import { RecoverypassPage } from './recoverypass.page';  // Asegúrate de que esto esté bien

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RecoverypassPageRoutingModule
  ],
  declarations: [RecoverypassPage]  // Asegúrate de que el componente esté declarado correctamente
})
export class RecoverypassPageModule {}
