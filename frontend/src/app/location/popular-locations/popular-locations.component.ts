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

  municipio: ITown | undefined
  
  constructor(private activatedRoute: ActivatedRoute,
              private locationService: LocationService){}

 // ngOnInit(): void {
     //this.loadLocations();
   
    // }
    
  
  //   loadLocations(){    
  //   this.activatedRoute.params.subscribe((params) => {     
     // const townCode = params['townCode']
//this.locationService.getWeatherRealTime(townCode).subscribe(data => this.weather = data)
   //})

 //}

}
