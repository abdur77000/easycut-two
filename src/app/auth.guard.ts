import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchantService } from './services/merchant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  merchantservice: any;
  constructor(private Merchant:MerchantService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('signUp')){
        return true;
      }
      return this.merchantservice.isSellerLoggedIn;
    
  }
  
}
