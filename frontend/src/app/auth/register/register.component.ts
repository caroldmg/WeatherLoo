import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  userForm = new FormGroup({
    fullName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required])
    //Validators.pattern('^[A-Za-z0-9$%&/()]$')
  }, {validators: this.passwordConfirmValidator}  );

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar
    ) {}

    passwordConfirmValidator(control: AbstractControl) {
      if (control.get('password')?.value === control.get('passwordConfirm')?.value)
        return null; // si son iguales no hay error
      else
        return {'confirmError': true}; // si son distintas sí hay error
    }

  save() {

    let register = {
      fullName: this.userForm.get('fullName')?.value ?? '',
      email: this.userForm.get('email')?.value ?? '',
      password: this.userForm.get('password')?.value ?? ''
    }

    this.authService.register(register).subscribe({
      next: data => {
      console.log(data.token);
      // Guardar el token para utilizarlo en las posteriores peticiones
      this.authService.handleLoginResponse(data.token);
      this.snackbar.open('el usuario se ha guardado correctamente', 'Cerrar', {duration: 3000})
      this.router.navigate(['/users/profile']);
    },
      error: error =>{
      console.log(error);
      this.snackbar.open('Se ha producido un error, inténtalo más tarde.', 'Cerrar', {duration: 3000});
    }

    });

  }

}
