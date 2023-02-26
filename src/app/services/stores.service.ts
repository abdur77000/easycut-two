import { Injectable } from '@angular/core';
import { stores } from '../shared/model/stores';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor() { }
  getAll():stores[]{
    return[
      {
        id:1,
        name:'satyam salon',
        favorite:false,
        star:4.0,
        imageurl:'/assets/s1.jpg',
        address:'santacruz west',
        services:['men','women'],
        },
        {
        id:2,
        name:'Enrich salon',
        favorite:true,
        star:3.0,
        imageurl:'/assets/s2.jpg',
        address:'khar east',
        services:['men','women'],
        },
        {
        id:3,
        name:'Rosez salon $ spa',
        favorite:false,
        star:2.0,
        imageurl:'/assets/s3.jpg',
        address:'mahim',
        services:['men','women'],
        },
        
        {
        id:4,
        name:'shahnuz salon',
        favorite:true,
        star:5.0,
        imageurl:'/assets/s4.jpg',
        address:'bandra west',
        services:['men','women'],
        },
        
        {
        id:5,
        name:'Alim hakim',
        favorite:true,
        star:5.0,
        imageurl:'/assets/s5.jpg',
        address:'pali hill',
        services:['men','women'],
        },
        
        {
        id:6,
        name:'street style hair',
        favorite:false,
        star:4.0,
        imageurl:'/assets/s6.jpg',
        address:'colaba',
        services:['men','women'],
        },
        
        {
        id:7,
        name:'crezza beauty salon',
        favorite:true,
        star:2.0,
        imageurl:'/assets/s7.jpg',
        address:'lokhandwala',
        services:['men','women'],
        },
        
        {
        id:8,
        name:'estilo salon',
        favorite:false,
        star:4.0,
        imageurl:'/assets/s8.jpg',
        address:'juhu',
        services:['men','women'],
        }
        
     
      
    ];
  }
}
