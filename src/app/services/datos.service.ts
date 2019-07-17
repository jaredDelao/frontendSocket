import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../intefaces/usuarios';

import { Observable } from 'rxjs';

// SocksJS
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';


@Injectable({
  providedIn: 'root'
})
export class DatosService {

  // webSockets
  // datosForm: any;

 

  constructor() {
    // webSockets
    // this.client = new Client();
    // this.client.webSocketFactory = () => {
    //   return new SockJS("http://localhost:8080/inicio");
    // }
    // this.client.onConnect = (frame) => {
    //   console.log('Conectados' + this.client.connected + ':' + frame);
    // }
    // this.client.activate();

    //  // escucha
    // this.client.subscribe('/inicio/mensaje', res => {
    //   let mensaje = JSON.parse(res.body) as Usuario;
    //   this.mensajes.push(mensaje);
    //   console.log(mensaje);
    // });
   }

  //  getDatosForm(data:Usuario) {
  //    this.datosForm = data;
  //    console.log(data);
  //  }

  //  devolverDatosForm(){
  //   console.log('devuleto:' + this.datosForm);
  //    return this.datosForm;
  //  }
 
  
   }

  // get(): Observable<Usuario[]> {
  //   return this.http.get<Usuario[]>('http://localhost:8080/inicio');
  // }

  // post(usuario: Usuario): Observable<Usuario> {
  //   return this.http.post<Usuario>('http://localhost:8080/inicio', usuario);
  // }

  // get(): Observable<Llamadas[]> {
  //   return this.http.get<Llamadas[]>('http://192.168.10.106:8096/mark43-service/v1/api-drive/get-files');
  // }


