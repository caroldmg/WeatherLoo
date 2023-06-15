import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import {ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component'

@NgModule({
  declarations: [
  
    UserLoginComponent,
    UserRegistrationComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,FormsModule  
  ]
})
export class UsersModule { }
