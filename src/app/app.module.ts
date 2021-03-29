import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import * as firebase from 'firebase/app';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';

import { ProjectsComponent } from './projects/projects.component';
import { BlogComponent } from './blog/blog.component';


// firebase.initializeApp(environment.firebase)

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    HomeComponent,
    ProjectsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
