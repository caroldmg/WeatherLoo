import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  {
    path: 'user-form',
    component: UserFormComponent
  },
  {
    path:'user-detail',
    component:UserDetailComponent
  },
  {
    path: 'user-list',
    component: UserListComponent
  } , 
  {
    path:'', redirectTo: 'userForm' ,pathMatch: 'full'
  },
  {
    path:'**', redirectTo: 'user-Form', pathMatch:'full'
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
