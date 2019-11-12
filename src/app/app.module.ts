import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { DataConService } from './data-con.service';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
   ReactiveFormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [DataConService],
  bootstrap: [AppComponent]
})
export class AppModule { }
