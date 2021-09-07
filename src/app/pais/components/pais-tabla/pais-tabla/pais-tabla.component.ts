import { Component, Input } from '@angular/core';
import { Country } from '../../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  constructor() { }

  @Input() paises: Country[] = []; // Agafem la variable del component pare paises (por-pais.component.ts)

}
