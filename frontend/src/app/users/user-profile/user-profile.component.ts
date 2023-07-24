import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../models/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { BASE_URL } from 'src/app/shared/constants';
import { HttpClient } from '@angular/common/http';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {

  user: IUser | undefined;
  isLoggedIn = false;
  username = '';

  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.userService.findCurrentUser()
      .subscribe(data => 
        this.user = data
      );
        this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
        this.authService.currentUserName.subscribe(currentUserName => this.username = currentUserName);
  }

}
