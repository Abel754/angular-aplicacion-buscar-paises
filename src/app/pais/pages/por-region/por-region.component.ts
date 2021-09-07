import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  activarRegion( region: string ) {

    if( region === this.regionActiva ) return; // No carregarà de nou si pressionem en la mateixa regió activa

    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(this.regionActiva)
    .subscribe( paises => { // Hem d'indicar el subscribe per fer la petició
      this.paises = paises;
      console.log(paises)
    }, (err) => {
      console.log(err);
      this.paises = [];
    } )

  }

}
