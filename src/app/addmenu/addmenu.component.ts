import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ServicesService } from '../services/service.service';
import { services } from '../shared/model/service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent {
  constructor(private http:HttpClient){}
  onSubmit(data: any){
    this.http.post('http://localhost/ci/service',data)
    .subscribe((result)=>{
      console.warn('result',result)
    })
    console.warn(data);
    

  }

  // onSubmit(form: NgForm) {
  //   if (form.valid) {
  //     // submit form data to server or do something with the data
  //   }
  // }
  

}
