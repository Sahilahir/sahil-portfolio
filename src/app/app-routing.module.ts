import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from "./blog/blog.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path:'about_me', component:AboutmeComponent },
  { path:'home', component:HomeComponent},
  { path:'projects', component:ProjectsComponent},
  { path:'blog', component:BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
