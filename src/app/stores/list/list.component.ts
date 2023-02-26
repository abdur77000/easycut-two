import { Component } from '@angular/core';
import{StoresService} from '../../services/stores.service';
import { stores } from 'src/app/shared/model/stores';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent { 
  stores:stores[]=[];
  constructor(private st:StoresService){}

  ngOnInit():void{
    this.stores=this.st.getAll()
  }
  

  

}
