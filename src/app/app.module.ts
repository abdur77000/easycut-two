import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './stores/list/list.component';
import { FooterComponent } from './footer/footer.component';
import {LoginComponent} from './login/login.component'
import {MenuComponent} from './menu/menu.component'
import{RegisterComponent} from './register/register.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ServiceComponent } from './service/service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { EditComponent } from './edit/edit.component';
import { AddmenuComponent } from './addmenu/addmenu.component';



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
    MerchantComponent,
    ServiceComponent,
    AppointmentComponent,
    AboutusComponent,
    ContactComponent,
    AddserviceComponent,
    EditComponent,
    AddmenuComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
