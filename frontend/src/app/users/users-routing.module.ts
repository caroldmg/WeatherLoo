import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path:'user-registration',
    component:UserRegistrationComponent
  },
  {
    path: 'user-profile',
    component: UserProfileComponent
  } , 
  {
    path:'', redirectTo: 'user-login' ,pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'user-login', pathMatch:'full'
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
