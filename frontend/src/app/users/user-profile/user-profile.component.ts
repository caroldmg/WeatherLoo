import { Component } from '@angular/core';
import { IUser } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
//AQUI TENDRIA QUE IR : NOMBRE USUARIO, IMAGEN DEL AVATAR,,IMAGEN DEL TIEMPO REAL,MOSTRAR CLIMA POR HORAS,POR DIAS--------
//MIS LUGARES FAVORITOS(LISTA DE LUGARES QUE GUARDO CON SUS CLIMAS SEGÚN FECHA)
//------
export class UserProfileComponent {

  user: IUser = {
    id: 1,
    fullName: 'Usuario técnico',
    age: 0,
    email: '',
    gender: '',
    location: '',
    password: '',
    avatar: null
  }

}
