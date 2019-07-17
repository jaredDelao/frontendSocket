import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AgregarComponent } from './modal/agregar/agregar.component';
import { ModalService } from '../../services/modal.service';
import 'rxjs';
import { MatTableDataSource, MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { FormGroup, FormControl} from '@angular/forms';
import { Usuario } from '../../intefaces/usuarios';


// SocksJS

import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';

import { Mensaje } from 'src/app/interfaces/mensaje';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})

export class MasterComponent implements OnInit {

  datos: string[] = [];
  nombre: string;
  apellido: string;
  correo: string;
  private stompClient = null;
  disabled = true;
  dataSource: any;
  newDatos:any;
  cols: any[];

 
  constructor() {}

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if(connected) {
      this.datos = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/inicio');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/task/panel/1', function (content) {
        _this.showDatos(JSON.parse(content.body));
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendDatos() {
    this.stompClient.send(
      '/tasks/saveTask/1',
      {},
      JSON.stringify({ 
        'nombre': this.nombre,
        'apellido': this.apellido,
        'correo': this.correo 
      })
    );
  }

  showDatos(message) {
    this.datos.push(message);
    this.newDatos = this.datos;
    this.dataSource = new MatTableDataSource(this.newDatos);
  }

  ngOnInit() {  
   this.connect();
   this.cols = ['nombre', 'apellido', 'correo'];
  }

}

// @Component({
//   selector: 'notificaciones',
//   templateUrl: 'notificaciones.html',
// })

// export class notificaciones {

//   constructor(private _bottomSheetRef: MatBottomSheetRef<notificaciones>
//     ) {}

    
// }


