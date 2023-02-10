import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  constructor() { }
  getAll():string[]{
    return[
      '/assets/s1.jpg',
      '/assets/s2.jpg',
      '/assets/s3.jpg',
      '/assets/s4.jpg',
      '/assets/s5.jpg',
      '/assets/s6.jpg',
      '/assets/s7.jpg',
      '/assets/s8.jpg',
      '/assets/s9.jpg',
      
    ]
  }
}
