import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthActivate } from '../core/guards/auth.activate';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent,
    canActivate:[AuthActivate],
    data:{
      authenticationRequired: false,
      authenticationFailureRedirecturl:'/'
    }
  },
  {
    path:'register',
    component: RegisterComponent,
    data:{
      authenticationRequired: false,
      authenticationFailureRedirecturl:'/',
      canActivate:[AuthActivate]
    }
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate:[AuthActivate],
    data:{
      authenticationRequired: true,
      authenticationFailureRedirecturl:'/login'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }