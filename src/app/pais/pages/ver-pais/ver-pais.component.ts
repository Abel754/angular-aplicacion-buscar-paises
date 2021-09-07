import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators"; // Recull un Observable i en retorna un altre

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; // Li indiquem que pais pot ser null

  constructor( 
    private activatedRoute: ActivatedRoute, // ActivatedRoute ho necessitem quan venen valors per paràmetre (per exemple, una ID com en aquest cas)
    private paisService: PaisService
    ) { }

  ngOnInit(): void { // Un cop estigui carregat el component

    this.activatedRoute.params
       .pipe(
         switchMap((param) => this.paisService.getPaisPorId(param.id)),
         tap( console.log )
        )
        .subscribe( pais => {
           this.pais = pais;
        })

    // UN ALTRE MÈTODE DE FER-HO
    // this.activatedRoute.params
    //   .subscribe( ({ id }) => { // Desestructurem l'id de la resposta
    //     console.log( id ); // Si la URL és: http://localhost:4200/pais/CR, la id serà CR
    //     this.paisService.getPaisPorId( id )
    //       .subscribe(pais => { // Obtenim la resposta del mètode
    //         console.log(pais); // La mostrem
    //       })
    //   } )

     
     

  }

}
