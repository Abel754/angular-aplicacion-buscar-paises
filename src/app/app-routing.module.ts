import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [

    {
        path: '', // En aquesta ruta, mostra el component PorPaisComponent
        component: PorPaisComponent,
        pathMatch: 'full' // Perquè sigui si o si en la URL de la pàgina inicial
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id', // Els : obliguen a que enviïn un paràmetre per la URL
        component: VerPaisComponent
    },
    {
        path: '**', // Qualsevol path que no sigui els d'adalt
        redirectTo: '' // Torna a la pàgina de l'inici
    }

];


@NgModule({
    imports: [
        RouterModule.forRoot( routes ) // Només hi ha un forRoot, hem d'importar amb el RouterModule perquè funcionin les rutes creades
    ],
    exports: [
        RouterModule // L'exportem a continuació
    ]
})
export class AppRoutingModule {} // Serà utilitzat en app.module.ts