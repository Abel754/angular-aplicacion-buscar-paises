import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  constructor() { }

  @Input() placeholder: string = '';

  termino: string = '';

  // Utilitzem Output per emetre un event del component fill al pare
  @Output() onEnter: EventEmitter<string> = new EventEmitter(); // Creem un event amb nom oNEnter produïrà un event que es crida des de por-pais.component.html i s'emetrà quan es faci submit al formulari
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // S'emetrà quan la persona deixi d'escriure en el input text

  debouncer: Subject<string> = new Subject(); // Subject és un Observable i el necessitem si volem crear un Debouncer

  ngOnInit() { // ngOnInit es dispara quan el ngOnChanges s'ha executat (ngOnChanges s'executa quan es canvia el valor d'un input. En aquest cas escrivim en un input)
    this.debouncer
    .pipe(debounceTime(300)) // Indica quantes mil·Lèssimes de segons esperarà després de que l'usuari hagi acabat d'escriure, per executar el .subscribe
    .subscribe( valor => {
      console.log('debouncer: ', valor);
      this.onDebounce.emit( valor ); // Emet el onDebounce i s'executa a por.pais.component.html
    } );
  }

  buscar() { // Això s'executa quan fem un submit del formulari a pais-input.component.html
    this.onEnter.emit(this.termino);
  }

  teclaPresionada( event: any ) { // Mètode cridat a pais-input.component.html quan canvia el valor de l'input text. Torna a consultar el debouncer amb el valor escrit
    const valor = event.target.value;
    this.debouncer.next( valor );
  }

}
