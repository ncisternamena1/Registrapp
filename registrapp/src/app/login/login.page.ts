import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importar el Router
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {  // Inyectar el Router en el constructor
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  onLogin() {
    const { username, password } = this.loginForm.value;
    
    if (username === 'Lucas' && password === 'profesor123') {
      this.router.navigate(['/profesor-dashboard'], { queryParams: { name: 'Lucas' } });
    } else if (username === 'Benjamin' && password === 'alumno123') {
      this.router.navigate(['/alumno-dashboard'],{ queryParams: { name: 'Benjamin' } });
    } else {
      alert('Usuario o contraseña incorrecta');
    }
  }
  
  recoverPassword() {
    this.router.navigate(['/recoverypass']);
  }
}