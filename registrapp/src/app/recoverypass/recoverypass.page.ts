import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recoverypass',
  templateUrl: './recoverypass.page.html',
  styleUrls: ['./recoverypass.page.scss'],
})
export class RecoverypassPage {
  recoverForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.recoverForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
}
