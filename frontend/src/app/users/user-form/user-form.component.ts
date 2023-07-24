import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent {

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

  constructor(
    private userService: UserService, 
    private router: Router,
    private authService: AuthService
    ) { }

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

    this.userService.update(user).subscribe(data1 => { 
        console.log('usuario actualizado');

        this.authService.refreshToken().subscribe(data2 => {
          console.log(data2.token);
          this.authService.handleLoginResponse(data2.token);
          this.router.navigate(['/users/profile']);
        });
        
      });

    

   }
  




}
