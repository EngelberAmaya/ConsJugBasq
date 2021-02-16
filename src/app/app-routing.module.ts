import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeComponent } from './components/see/see.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DataPlayersComponent } from './components/data-players/data-players.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {
    path: 'see',
    component: SeeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { 
    path: 'player/:id',
    component: DetailComponent
  },
  {
    path: 'data',
    component: DataPlayersComponent
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
