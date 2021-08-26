import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent{

  get historial(){
    return this.gifServices.historial;
  }

  constructor(private gifServices: GifsService) { }

  buscar(termino:string){
    this.gifServices.buscarGifs(termino)
  }

}
