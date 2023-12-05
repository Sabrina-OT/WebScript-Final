import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  errorMessage: string = '';
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  
  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.router.navigate(['/home']);
      },
      error => {
        this.errorMessage = "Invalid username and/or password. Please try again. ";

      }
    );
  }
}
