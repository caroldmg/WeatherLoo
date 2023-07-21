import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  firstGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  secondGroup = new FormGroup({
    mascotas : new FormControl(''),
    transporte : new FormControl('false'),
    lugaresFav: new FormControl([]),
    gender: new FormControl('underterminated'),
    birthday: new FormControl(new Date()),
  })

  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

  saveRegister() {

    let register = {
      username: this.firstGroup.get('username')?.value ?? '',
      email: this.firstGroup.get('email')?.value ?? '',
      password: this.firstGroup.get('password')?.value ?? ''
    }

    this.authService.register(register).subscribe(data => {
      console.log(data.token);
      // Guardar el token para utilizarlo en las posteriores peticiones
      this.authService.handleLoginResponse(data.token);
      this.router.navigate(['/books']);

    });

  }

}
