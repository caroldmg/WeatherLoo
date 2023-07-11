import { Component } from '@angular/core';
import { ITown } from '../models/town.model';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-popular-locations',
  templateUrl: './popular-locations.component.html',
  styleUrls: ['./popular-locations.component.css']
})
export class PopularLocationsComponent {

  municipio: ITown [] = []
 /**
  popularTowns = [] = [{
 
     Alicante: '03014',
     Barcelona: '08019',
     Bilbao: '48020',
     Burgos: '',
     Cadiz: '',
     Cordoba: '',
     Cuenca: '',
     Girona: '',
     Granada: '',
     LaCoruna: '',
     Leon: '',
     Malaga: '',
     SanSebastian: '',
     Segovia: '',
     Sevilla: '',
     Tenerife: '',
     Valencia: ''
   } ]
   }
  *  
  * */ 
 
 constructor(private activatedRoute: ActivatedRoute,
  private locationService: LocationService){}

              ngOnInit(): void {
                //mostrar todas las provincias
                this.loadTowns();
              }
            
              loadTowns(){
                this.activatedRoute.params.subscribe((params) => {
                  const townCode = params['townCode'];
                  if (townCode) {
                    
                    this.locationService.findTownsByProvinceId(townCode).subscribe(data => {
                      this.municipio = data;
                      
                      console.log(this.municipio);
                      
                    })
                  } 
                })
            
              }
 

}
