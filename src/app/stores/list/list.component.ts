import { Component } from '@angular/core';
import{StoresService} from '../../services/stores.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent { 
  stores:string[]=[];
  constructor(private st:StoresService){}

  ngOnInit():void{
    this.stores=this.st.getAll()
  }
  

  

}
