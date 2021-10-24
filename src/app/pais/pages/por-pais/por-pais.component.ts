import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar( termino: string ): void {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);

    this.paisService.buscarPais(this.termino)
      .subscribe((paises) => {
        console.log(paises);
        if (!Array.isArray(paises)){
          this.hayError = true;
        }
        this.paises = paises;
      }, (err) => {
        console.log('error')
        this.paises = [];
      });
  }

  sugerencias( termino: string ): void {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe((paises) => {
        this.paisesSugeridos = paises.splice(0, 5);
      }, (err) => {
        this.paisesSugeridos = [];
      });
  }

  buscarSugerido(termino: string ): void{
    this.buscar(termino);
  }

}
