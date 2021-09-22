import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country; //esto evita probleamas al dejar la propiedad null

  constructor(private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    //mejor manera de hacer lo mismo
    //switchMap recibe un observable y retorna otro
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.paisService.obtenerInfoPais(id)),
      tap(console.log)// recibe el producto del obesrvable de arriba y lo imprime
    )
    .subscribe( pais =>{
      this.pais = pais;
    });

    /*
    this.activatedRoute.params
    .subscribe( ({id}) => {
      console.log(id);
      this.paisService.obtenerInfoPais( id )
      .subscribe( pais => {
        console.log(pais);
      });
    });*/

  }

}
