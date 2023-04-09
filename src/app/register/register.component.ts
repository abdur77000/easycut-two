import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MerchantService } from '../services/merchant.service';
import { signUp } from '../shared/merchant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 
repeatPass: string = 'all';
  register: any;
  signUp: any;

   constructor(private merchant:MerchantService, ) { }

   ngOnInit(): void { 
    this.signUp.reloadSeller
    }

  //  signUp(data:signUp):void{
  //   console.warn(data)
  //   this.Merchant.userSignup(data).subscribe((result)=>{
  //     console.warn(result)
  //   })
  //  }
    
   
    //validations

  registerForm = new FormGroup({
      firstname: new FormControl ('',[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
      lastname: new FormControl ('',[Validators.required,Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
      email: new FormControl ('',[Validators.required, Validators.email]), 
      mobile: new FormControl ('',[Validators.required, Validators.pattern("[0-9]*"), Validators.minLength(10), Validators.maxLength(10)]),
      registeras: new FormControl ('',[Validators.required]),
      pwd: new FormControl ('',[Validators.required, Validators.minLength(6), Validators.maxLength(15)]),
      rpwd: new FormControl (''),
    });
    registerSubmited(){
      if(this.Pwd.value == this.RPwd.value){
        console.log("Submited", this.registerForm.value);
         this.merchant.userSignup(this.registerForm.value)//.subscribe((res)=>{
        //   console.log(res)
        //   if(res){
        //     this.router.navigate(['dashboard-sidebar'])

        //   }
        // })
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

    get Registeras( ): FormControl {
      return this.registerForm.get("registeras") as FormControl;
    }
    get Pwd( ): FormControl {
      return this.registerForm.get("pwd") as FormControl;
    }
    get RPwd( ): FormControl {
      return this.registerForm.get("rpwd") as FormControl;
    }
  }