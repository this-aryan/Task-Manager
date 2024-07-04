import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password)
    .then((result) => {
      this.router.navigate(['/home']);
    })
    .catch((error) => {
      console.error('Login Error', error);
      alert('Login failed. Please check your credentials and try again.')
    });
  }
}
