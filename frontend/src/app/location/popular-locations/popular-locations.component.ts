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


  popularTowns: ITown[] = []




  constructor(private activatedRoute: ActivatedRoute,
    private locationService: LocationService) { 
      
    }

  ngOnInit(): void {
    
    //mostrar todas las localidades
    this.loadPopularTowns()
    
 
  }




  loadPopularTowns() {
    this.locationService.findTownsByPopularTrue().subscribe(data => this.popularTowns = data)

  }
  




}
