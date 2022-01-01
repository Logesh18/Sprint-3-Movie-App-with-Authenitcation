import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyHomeComponent } from './my-home/my-home.component';
import { MyMovieComponent } from './my-movie/my-movie.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
   {path:'', redirectTo:'login', pathMatch: 'full'},
   { path:'home/:token', component:MyHomeComponent},
   { path:'login', component:LoginComponent},
   { path:'signup', component:SignupComponent},
   { path: 'movie/:id/:token', component:MyMovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route=[LoginComponent,SignupComponent,MyHomeComponent,MyMovieComponent];