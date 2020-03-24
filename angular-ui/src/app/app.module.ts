import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';

// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MainComponentComponent } from './main-component/main-component.component';
import { LoginComponent } from './main-component/login/login.component';
import { DashboardComponent } from './main-component/dashboard/dashboard.component';
import { NotificationComponent } from './main-component/notification/notification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { TopBarComponent } from './main-component/top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NotificationComponent,
    MainComponentComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    // AngularFontAwesomeModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
