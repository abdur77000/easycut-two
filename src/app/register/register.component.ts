import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
repeatPass: string = 'none';

   constructor( ) { }

   ngOnInit(): void {  }
    //validations

  registerForm = new FormGroup({
      firstname: new FormGroup ('',[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
      lastname: new FormGroup ('',[Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
      email: new FormGroup ('',[Validators.required, Validators.email]), 
      mobile: new FormGroup ('',[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10),]),
      pwd: new FormGroup ('',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      rpwd: new FormGroup ('',),
    });
    registerSubmited(){
      if(this.Pwd.value == this.RPwd.value){
        console.log(("Submited"));
      }else{
        this.repeatPass = 'inline'
      }
      
    }

    get FirstName( ): FormControl {
      return this.registerForm.get("firstname") as FormControl;
    }
    get LastName( ): FormControl {
      return this.registerForm.get("lastname") as FormControl;
    }
    get Email( ): FormControl {
      return this.registerForm.get("email") as FormControl;
    }
    get Mobile( ): FormControl {
      return this.registerForm.get("mobile") as FormControl;
    }
    get Pwd( ): FormControl {
      return this.registerForm.get("pwd") as FormControl;
    }
    get RPwd( ): FormControl {
      return this.registerForm.get("rpwd") as FormControl;
    }
  }