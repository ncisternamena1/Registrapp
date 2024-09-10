import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    
    if (username === 'Lucas' && password === 'profesor123') {
      this.navCtrl.navigateForward('/profesor-dashboard');
    } else if (username === 'Benjamin' && password === 'alumno123') {
      this.navCtrl.navigateForward('/alumno-dashboard');
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
}
