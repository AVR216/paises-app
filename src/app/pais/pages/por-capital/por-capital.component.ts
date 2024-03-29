import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  paises: Country[] = [];
  hayError: boolean = false;
  termino: string = '';

  constructor(private  paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPaisPorCapital( this.termino )
    .subscribe( resp => {
      this.paises = resp;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }
}
