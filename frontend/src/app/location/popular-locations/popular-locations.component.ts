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

  municipio: ITown [] = [];
 
  

 
 constructor(private activatedRoute: ActivatedRoute,
  private locationService: LocationService){}

              ngOnInit(): void {
                //mostrar todas las provincias
                loadPopularTowns()
                
              }
            
              
              
              
              loadPopularTowns(){
                
                
                  
                  for(let i = 0; i < this.popularTowns.length; i++ ){
                    for(let j = 0; j < this.popularTowns.length; j++){

                      let popularTown = this.popularTowns[i].townCode
                      
                    }

                  }
                  } 
                
              
              
 

}
