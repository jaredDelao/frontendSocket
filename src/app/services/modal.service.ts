import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// export interface Lista {
//   nombre: string;
//   edad: number;
// }

export class ModalService {

  // listChange = new Subject();


  // private datosList: Lista[] = [
  //   {
  //     nombre: 'Araceli',
  //     edad: 22
  //   }
  // ];

  constructor() { }

  // guardarDatos(e:any) {
  //   this.datosList.push(e);
  //   this.listChange.next(this.datosList.slice());
    
  // }

  // getDatos() {
  //   return this.datosList.slice();
  // }
}
