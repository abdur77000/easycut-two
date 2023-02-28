import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
interface LoginFormData {
  email: string;
  mobile: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

constructor() { }

ngOnInit(): void {

}
loginForm = new FormGroup({
  email: new FormGroup("", [Validators.required, Validators.email]),
  pwd: new FormGroup("", [Validators.required, Validators.minLength(6), Validators.maxLength(15),])
});
loginSubmited() {
  
}

get Email(): FormControl {
  return this.loginForm.get('email') as FormControl;
}
get PWD(): FormControl {
  return this.loginForm.get('pwd') as FormControl;
}
  }
