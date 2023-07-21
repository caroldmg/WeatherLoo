import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { BASE_URL } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
//AQUI TENDRIA QUE IR : NOMBRE USUARIO, IMAGEN DEL AVATAR,,IMAGEN DEL TIEMPO REAL,MOSTRAR CLIMA POR HORAS,POR DIAS--------
//MIS LUGARES FAVORITOS(LISTA DE LUGARES QUE GUARDO CON SUS CLIMAS SEGÚN FECHA)
//------
export class UserProfileComponent implements OnInit {

  //User avatar
  @ViewChild('fileInput') fileInput: HTMLInputElement | undefined;
  imagePreview: string | undefined; // para mostrar
  imageFile: File | undefined; // para subir

  user: IUser | undefined;

  userForm = new FormGroup({
    id: new FormControl<number>(0),
    fullName: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    email: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    birthday: new FormControl<Date>(new Date()),
    gender: new FormControl('undeterminated'),
    pets: new FormControl(false),
    privateTransport: new FormControl(false),
    publicTransport: new FormControl(false)
  });

  constructor(private userService: UserService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.userService.findCurrentUser()
      .subscribe(data => {
        this.user = data;
        this.userForm.reset({
          id: this.user.id,
          fullName: this.user.fullName,
          email: this.user.email,
          birthday: this.user.birthday,
          gender: this.user.gender,
          pets: this.user.pets,
          privateTransport: this.user.privateTransport,
          publicTransport: this.user.publicTransport
        });
      });
  }

  loadUserform(){
    this.userForm.reset({
      id: this.user?.id,
      fullName: this.user?.fullName,
      email: this.user?.email,
      birthday: this.user?.birthday,
      gender: this.user?.gender,
      pets: this.user?.pets,
      privateTransport: this.user?.privateTransport,
      publicTransport: this.user?.publicTransport
    });
  }

  save(): void {
    let id = this.userForm.get('id')?.value ?? 0;
    let fullName = this.userForm.get('fullName')?.value ?? '';
    let email = this.userForm.get('email')?.value ?? '';
    let birthday = this.userForm.get('birthday')?.value ?? new Date();
    let gender =  this.userForm.get('gender')?.value ?? 'undeterminated';
    let pets =  this.userForm.get('pets')?.value ?? false;
    let privateTransport = this.userForm.get('privateTransport')?.value ?? false;
    let publicTransport = this.userForm.get('publicTransport')?.value ?? false;

    let user: IUser = {
      id: id,
      fullName: fullName,
      email: email,
      birthday: birthday,
      gender: gender,
      pets: pets,
      privateTransport: privateTransport,
      publicTransport: publicTransport
    }

    this.userService.update(user)
      .subscribe(data => console.log('usuario actualizado'));

        if(!this.imageFile) return;
    
        // La imagen no es un archivo texto, es binario por lo que necesitamos enviarla en un FormData
        // para que se gestione correctamente
        let formData = new FormData();
        formData.append('file', this.imageFile);
    
        this.httpClient
                    .post(`${BASE_URL}/users/avatar`, formData)
                    .subscribe(data => {
                      // Recargar el usuario con la nueva foto y recargar el formulario de avatar
                      console.log(data);
                      this.imageFile = undefined;
                      this.imagePreview = undefined;
                    });
      }
      
      onFileSelected(event: Event) {
        
        let target = event.target as HTMLInputElement;
        
        if (target.files !== null && target.files.length > 0) {
          this.imageFile = target.files[0];
      console.log(this.imageFile);

      // Mostrar la imagen al usuario
      let reader = new FileReader();
      reader.onload = ev => this.imagePreview = reader.result as string;// qué hacer cuando se lea la imagen
      reader.readAsDataURL(this.imageFile); // leer la imagen
    }
  }
  

}
