import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regions: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU', 'USAN', 'EEU', 'AL', 'ASEAN', 'CAIS', 'CEFTA', 'NAFTA', 'SAARC'];
  activeRegion: string= '';
  countries: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  getClaseCSS(region: string): string{
    return (region === this.activeRegion) ? 'btn btn-primary' : 'btn btn-ouline-primary';
  }

  activateRegion(region: string): void{

    if (region === this.activeRegion) { return; }

    this.activeRegion = region;
    this.countries = [];
    // TODO: llamar al servicio para traer los paises por esa region
    this.paisService.buscarRegion(region)
      .subscribe((resp) => {
        this.countries = resp;
      }, (err) => {
        this.countries = [];
      })
  }
}
