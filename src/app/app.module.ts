import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './components/master/master.component';

import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule, 
        MatIconModule, 
        MatTableModule, 
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatListModule,
       } from '@angular/material/';
import { AgregarComponent} from './components/master/modal/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalService } from './services/modal.service';
import { DatosService } from './services/datos.service';



@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    // notificaciones,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule,
    FormsModule,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [
    DatosService,
  ],
  entryComponents:[
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
