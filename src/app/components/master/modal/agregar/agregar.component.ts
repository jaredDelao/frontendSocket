import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalService } from '../../../../services/modal.service';
import { DatosService } from 'src/app/services/datos.service';
import { Router } from '@angular/router';

import { Usuario } from '../../../../intefaces/usuarios';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: []
})
export class AgregarComponent implements OnInit {

  form: FormGroup;
  data: any;


  mensaje: Usuario;
  mensajes: Usuario[]=[];

  constructor(private dialogRef: MatDialogRef<AgregarComponent>,
              public modalServ: ModalService,
              public servDatos: DatosService,
              public router: Router) {
              
               }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      correo: new FormControl('')
    });

     // webSockets
  
  }

  // guardar() {
  //   this.servDatos.post(this.form.value).subscribe(res => {
  //     console.log(res);
  //   });
  //   this.servDatos.getDatosForm(this.form.value);

   

    // this.client.publish({
    // destination: '/app/mensaje', body: JSON.stringify(this.form),
    // });
    // this.mensaje.nombre = '';
    // this.mensaje.apellido = '';
    // this.mensaje.correo = '';
  }

  // cerrar(){
  //   this.dialogRef.close();
  // }


