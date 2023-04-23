import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MerchantService } from '../services/merchant.service';
import { CheckUser } from '../services/checkuser.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor(private marchant: MerchantService, private checkUser: CheckUser, private router: Router) { }
users: any = [];
success: any;
failed: any;

ngOnInit(): void {
  this.marchant.getUsers().subscribe(res=>{
    console.log(res)
    this.users = res;
  });
  const getUser = this.checkUser.checkUser();
  if(getUser.registeras == 'User'){
    this.router.navigate(['home']);
  }

  if(getUser.registeras == 'Merchant'){
    this.router.navigate(['addservice']);
  }
}
loginForm = new FormGroup({
  email: new FormControl("", [Validators.required, Validators.email]),
  pwd: new FormControl("", [Validators.required, Validators.minLength(6), Validators.maxLength(15),])
});
loginSubmited() {
  
}
Login(){
  console.log(this.loginForm.value)
  const user = this.users.find((user: any)=>{
    return user.email == this.loginForm.value.email && user.pwd == this.loginForm.value.pwd;
  });
  console.log(user)
  if(user?.email && user?.pwd){
    this.success = true;
    localStorage.setItem('user',JSON.stringify(user))
    if(user.registeras == 'User'){
    this.router.navigate(['home']);
    } else {
    this.router.navigate(['merchant']);
    }
  } else {
    this.failed = true;
  }
}

get Email(): FormControl {
  return this.loginForm.get('email') as FormControl;
}
get PWD(): FormControl {
  return this.loginForm.get('pwd') as FormControl;
}
  }
