import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationComponent } from './notification/notification.component';
import { AddTaskPopupComponent } from './add-task-popup/add-task-popup.component';
import { EditTaskPopupComponent } from './edit-task-popup/edit-task-popup.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    NotificationComponent,
    AddTaskPopupComponent,
    EditTaskPopupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDZunc-rzQ9e6wA5jipNs5GNmgt6mYhRaQ",
      authDomain: "task-manager-f9d8c.firebaseapp.com",
      projectId: "task-manager-f9d8c",
      storageBucket: "task-manager-f9d8c.appspot.com",
      messagingSenderId: "869076596628",
      appId: "1:869076596628:web:c5568cea04d87b1de18181"
    }),
    AngularFireAuthModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
