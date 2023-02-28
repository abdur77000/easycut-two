import { Injectable } from '@angular/core';
import { services } from '../shared/model/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
  getAll(){
    return[
      
      {
      name:'Hair Cut',
      price: 200,
      },

      {
        name:'Hair wash',
        price: 150,
        },

        {
          name:'Hair Cut',
          price: 200,
          },

          {
            name:'Hair Cut',
            price: 200,
            },

            {
              name:'Hair Cut',
              price: 200,
              },

              {
                name:'Hair Cut',
                price: 200,
                },



    ];
}
}