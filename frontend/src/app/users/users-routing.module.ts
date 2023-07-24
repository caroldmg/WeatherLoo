import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AvatarComponent } from './avatar/avatar.component';



const routes: Routes = [
  {
    path:'register',
    component:UserFormComponent
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
    path:'', redirectTo: '/auth/login' ,pathMatch: 'full'
  },
  {
    path:'**', redirectTo: '/auth/login', pathMatch:'full'
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
