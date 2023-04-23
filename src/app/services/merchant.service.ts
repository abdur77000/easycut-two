import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { signUp } from '../shared/merchant';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }
  userSignup(data:any){
    // return this.http.post('http://localhost/ci/api/auth_controller/register',data)
    // const datas = {
    //   id:2,
    //   name:'xyz',
    //   email:'ayaz@gmail.com',
    //   password:'123'
    // }
    // console.log("datas",datas)
    const httpHeaders = new HttpHeaders({
      'content-type': 'application/json',
      Authorization: 'abcde',
    });
    return this.http.post('http://localhost:3000/users',data,{observe:'response'})
      // console.warn(result)
      // if(result.status === 201){
      //   localStorage.setItem('signUp',JSON.stringify(result.body))
      //   this.router.navigate(['login'])
      // }
    // })
  } 
  reloadSeller(){
    if(localStorage.getItem('signUp')){
      this.isSellerLoggedIn.next(true)
      this.router.navigate(['dashboard-sidebar'])
    // return fetch('http://localhost:3000/user/',{
    //   method: "POST",
    //   body: JSON.stringify(datas),
    //   // headers: {
    //   //   "Content-Type": "application/json",
    //   //   // 'Content-Type': 'application/x-www-form-urlencoded',
    //   // },
    //   // mode: "cors"
    // })


  }
  }

  getUsers(){
    return this.http.get('http://localhost:3000/users')
  }
}

