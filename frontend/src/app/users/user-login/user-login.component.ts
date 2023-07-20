import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
//
export class UserLoginComponent {
  
  userLogin= new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    // fullName: new FormControl('', [Validators.required]),
    // el servicio y controlador de backend solo toma el mail asi que eso vamos a usar en el login
    password: new FormControl('', [Validators.required,Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),
    
  });

  save(): void {
    console.log(this.userLogin.get('email')?.value);
    console.log(this.userLogin.get('fullName')?.value);
 
    console.log(this.userLogin.get('password')?.value);

    this.userLogin.reset();
  }

}
