import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CheckUser } from '../services/checkuser.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor( private checkUser: CheckUser,  private router: Router,  private cdRef: ChangeDetectorRef  ) { }

  merchant: boolean = false;
  user: boolean = false;;
  random = true;
  loggedInUser:any
  ngOnInit(){
    console.log(this.loggedInUser)
    this.loggedInUser = this.checkUser.checkUser();
    if(this.loggedInUser.registeras == 'User'){
      this.user = true;
    }
    if(this.loggedInUser.registeras == 'Merchant'){
      this.merchant = true;
    }
  }
  // ngAfterViewInit(){
  //   const getUser = this.checkUser.checkUser();
  //   console.log("getUser", getUser)
  //   if(getUser.email && getUser.password){
  //     console.log("asdfjk")
  //     this.loggedIn = true;
  //     this.cdRef.detectChanges(); 
  //   }
  // }

  goToHome(){
    if(this.loggedInUser == 'User')
    this.router.navigate(['home'])
  }

  onLogout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
    this.user = false;
    this.merchant = false;
  }
}
