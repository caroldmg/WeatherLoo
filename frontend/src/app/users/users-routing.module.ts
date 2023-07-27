import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AvatarComponent } from './avatar/avatar.component';
import { userGuard } from '../shared/user.guard';



const routes: Routes = [
  {
    path:'user-form',
    component:UserFormComponent,
    canActivate: [userGuard]
  },
  {
    path: 'profile',
    component: UserProfileComponent,
    canActivate: [userGuard]
  } , 
  {
    path: 'avatar',
    component: AvatarComponent, // http://localhost:4200/users/avatar
    canActivate: [userGuard]
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
