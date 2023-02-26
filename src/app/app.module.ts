import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './stores/list/list.component';
import { FooterComponent } from './footer/footer.component';
import {LoginComponent} from './login/login.component'
import {MenuComponent} from './menu/menu.component'
import{RegisterComponent} from './register/register.component'
import { ServiceComponent } from './service/service.component';
import { AppointmentComponent } from './appointment/appointment.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListComponent,
    FooterComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    ServiceComponent,
    AppointmentComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
