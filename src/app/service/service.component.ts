import { Component } from '@angular/core';
import { ServicesService } from '../services/service.service';
import { services } from '../shared/model/service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']

  
})
export class ServiceComponent {
  // services:services[]=[];
  data: any;
  constructor(private sr:ServicesService){}
  // constructor( private api:ApiService)
  // {
  // }
 
  ngOnInit():void{
    this.sr.getservices().subscribe((data) =>{
      this.data = data;
      
    })
    // console.log(this.services)
  // ngOnInit()
  // {
  //   // console.log()
  //   this.api.apiCall().subscribe((data)=>{
  //     console.warn('get api data',data)
  //     this.services = data;
  //   })

    // fetch("192.168.179.1/ci/service").then(res=>{
    //   return res.json();
    // }).then(res=>{
    //   console.log(res)
    // })
  }
  }



