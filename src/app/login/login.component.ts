import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
export class LoginComponent {
  
//   public loginForm: FormGroup;

//   constructor() {
//     this.loginForm = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       mobile: new FormControl('', [Validators.required]),
//       password: new FormControl('', [Validators.required]),
//     });
//   }

//   get email() { return this.loginForm.get('email'); }
//   get mobile() { return this.loginForm.get('mobile'); }
//   get password() { return this.loginForm.get('password'); }

//   get isPasswordValid() { return this.password.value.length === 8; }

//   onSubmit() {
//     const formData: LoginFormData = this.loginForm.value;
//     console.log(formData);

// }

}
