import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user: IUser | undefined;
  isLoggedIn = false;
  username = '';

  constructor(
    private userService: UserService, 
    private authService: AuthService,
    private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.findCurrentUser()
      .subscribe(data => 
        this.user = data
      );
        this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
        this.authService.currentUserName.subscribe(currentUserName => this.username = currentUserName);
  }

  deleteUser(){
    if (this.user){
      this.userService.deleteCurrentUser(this.user.id).subscribe({
        next: response => {
          if (response.status === 200 || response.status === 204) {
            this.snackbar.open('El usuario se ha eliminado correctamente ', 'Cerrar', {duration: 3000});
            this.authService.logout();
            this.router.navigate(['/auth/login']);
          } else {
            console.log('Se ha producido un error');
            this.snackbar.open('Se ha producido un error, inténtalo más tarde.', 'Cerrar', {duration: 3000});
          }
        },
        error: error => {
          console.log(error);
          this.snackbar.open('Se ha producido un error, inténtalo más tarde.', 'Cerrar', {duration: 3000});
        },

      })
    }
  }

}
