import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AvatarComponent } from './avatar/avatar.component';



const routes: Routes = [
  {
    path:'register',
    component:UserRegistrationComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  } , 
  {
    path: 'avatar',
    component: AvatarComponent // http://localhost:4200/users/avatar
  },
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
