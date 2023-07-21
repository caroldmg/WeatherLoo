import { Component } from '@angular/core';
import { IProvince } from '../models/province.model';
import { LocationService } from '../services/location.service';
import { ActivatedRoute } from '@angular/router';
import { IAutonomy } from '../models/autonomy.model';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent {

  displayedColumns: string[]= [
    'province',
    'autonomy'
  ]

  provinces: IProvince[] = []
  autonomy: IAutonomy | undefined;
  autonomies: IAutonomy[] = [];

  constructor(private locationService: LocationService,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //mostrar todas las provincias
    
    this.loadProvinces();
  }

  loadProvinces(){
    this.activatedRoute.params.subscribe((params) => {
      const autonomyId = params['autonomyId'];
      if (autonomyId) {

        this.locationService.findProvincesByAutonomyId(autonomyId).subscribe(data => this.provinces = data);
        this.locationService.findAutonomyById(autonomyId).subscribe(data => this.autonomy = data)
        console.log(this.autonomy);
        

      } else {
        this.locationService.findAllProvinces().subscribe(data => this.provinces = data)
      }
    });
    
    this.locationService.findAllAutonomies().subscribe(data =>{ 
      this.autonomies = data;
      console.log(this.autonomies);
      
    })
  }
}
