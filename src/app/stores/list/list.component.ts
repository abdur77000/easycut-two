import { Component } from '@angular/core';
import{StoresService} from '../../services/stores.service';
import { stores } from 'src/app/shared/model/stores';
import { Router } from '@angular/router';
import { CheckUser } from 'src/app/services/checkuser.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent { 
  stores:stores[]=[];
  merchant: boolean = false;
  user: boolean = false;
  constructor(private st:StoresService, private router: Router, private checkUser: CheckUser){}

  ngOnInit():void{
    this.stores=this.st.getAll();
    const getUser = this.checkUser.checkUser();
    if(getUser.registeras == 'User'){
      this.user = true;
    }
    if(getUser.registeras == 'Merchant'){
      this.merchant = true;
    }
  }

  navigateToServive(){
    if(this.user) {
    this.router.navigate(['service']);
    }
  }
  

  

}
