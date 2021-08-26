import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent{

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsServiice: GifsService) {}

  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    if( valor.trim().length === 0){
      return
    }

    this.gifsServiice.buscarGifs( valor );

    this.txtBuscar.nativeElement.value = '';
  }

}
