import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './stores/list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ServiceComponent } from './service/service.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { EditComponent } from './edit/edit.component';
import { AdminprofileComponent } from './adminprofile/adminprofile.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
// import { AuthGuard } from './auth.guard';


const routes: Routes = [

  {path:'home', component:HomeComponent,},
  {path:'list',component:ListComponent,},
  {path:'login',component:LoginComponent,},
  {path:'register',component:RegisterComponent,},
  {path:'merchant',component:MerchantComponent,},
  {path: 'service',component:ServiceComponent,},
  {path:'appointment',component:AppointmentComponent,},
  {path:'aboutus',component:AboutusComponent,},
  {path:'contact',component:ContactComponent,},
  {path:'addservice',component:AddserviceComponent,},
  {path:'addmenu',component:AddmenuComponent},
  {path:'edit',component:EditComponent},
  {path:'adminprofile',component:AdminprofileComponent},
//  { path:'dashboard-sidebar',canActivate:[AuthGuard],component:DashboardSidebarComponent}
 { path:'dashboard-sidebar', component: DashboardSidebarComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
