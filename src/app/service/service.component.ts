import { Component } from '@angular/core';
import { ServicesService } from '../services/service.service';
import { services } from '../shared/model/service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  services:services[]=[];
  constructor(private sr:ServicesService){}

  ngOnInit():void{
    this.services=this.sr.getAll()
    console.log(this.services)
  }


}
