import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { signUp } from '../shared/merchant';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CheckUser {
  isSellerLoggedIn= new BehaviorSubject<boolean>(false);

  constructor() { }

  checkUser(){
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}

