import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home/home.component' ;
import {AuthComponent} from './auth/auth.component' ;
import {AddProductComponent} from './add-product/add-product.component' ;
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { from } from 'rxjs';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'add-product', component: AddProductComponent },
]; // sets up routes constant where you define your routes


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
