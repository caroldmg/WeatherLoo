import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  save() {

    let login = {
      email: this.userForm.get('email')?.value ?? '',
      password: this.userForm.get('password')?.value ?? ''
    }

    this.authService.login(login).subscribe(data => {
      console.log(data.token);
      // Guardar el token para utilizarlo en las posteriores peticiones
      this.authService.handleLoginResponse(data.token);

      // cuando haces el login, te redirige a la lista de provincias
      this.router.navigate(['/location/provinces']);

    });
    
    this.userForm.reset()

  }

}
