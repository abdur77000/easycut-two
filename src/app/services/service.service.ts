import { Injectable } from '@angular/core';
import { services } from '../shared/model/service';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // getAll(): services[] {
  //   throw new Error('Method not implemented.');
  // }
  constructor(  
    private http:HttpClient
  ) { }

  getservices()
  {
    return this.http.get('http://localhost/ci/service');
  }
}

//   constructor() { }
//   getAll(){
//     return[
      
//       {
//       name:'Hair Cut',
//       price: 200,
//       },

//       {
//         name:'Hair wash',
//         price: 150,
//         },

//         {
//           name:'Hair Cut',
//           price: 200,
//           },

//           {
//             name:'Hair Cut',
//             price: 200,
//             },

//             {
//               name:'Hair Cut',
//               price: 200,
//               },

//               {
//                 name:'Hair Cut',
//                 price: 200,
//                 },



//     ];
// }
// }