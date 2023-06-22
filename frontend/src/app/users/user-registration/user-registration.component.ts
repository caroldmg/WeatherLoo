import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
// aqui solicitamos mas información: nombre,email,genero,edad,y preguntas opcionales
export class UserRegistrationComponent {
  userRegistre = new FormGroup({
    fullName: new FormControl('', [Validators.required, this.notWhiteSpacesValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),

    gender: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),

    password: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9$%&/()]{8,20}$')]),

  }, { validators: this.passwordConfirmValidator })

//------- usar formulario steps---
// agregar preguntas opcionales: tienes mascotas 
//lugares favorito
//medios de transporte : coche,bici,metro,transporte publico
//







  // Validator personalizado a nivel de FormGroup: dos campos distintos
  passwordConfirmValidator(control: AbstractControl) {
    if (control.get('password')?.value === control.get('passwordConfirm')?.value)
      return null; // si son iguales no hay error
    else
      return { 'confirmError': true }; // si son distintas sí hay error
  }
  // Validador personalizado a nivel de FormControl: si hay espacios mostrará error
  notWhiteSpacesValidator(control: AbstractControl) {
    let containSpaces = (control.value || '').includes(' ');
    if (containSpaces)
      return { 'whitespaceError': true }; // Si contiene espacios sí hay un error
    else
      return null; // si no contiene espacios está bien
  }


  save(): void {
    if (this.userRegistre.valid) {
      // Crear objeto con los datos del formulario y enviar al backend

      console.log("Formulario correcto");
    } else {
      console.log("Formulario incorrecto, tiene errores de validación");
    }

  }





}
