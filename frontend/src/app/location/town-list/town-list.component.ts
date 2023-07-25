import { Component } from '@angular/core';
import { ITown } from '../models/town.model';
import { IProvince } from '../models/province.model';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-town-list',
  templateUrl: './town-list.component.html',
  styleUrls: ['./town-list.component.css']
})
export class TownListComponent {


  towns: ITown[] = []
  province: IProvince | undefined;
  provinces: IProvince[] = [];

  constructor(private locationService: LocationService,
    private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //mostrar todas las provincias
    
    this.loadTowns();
  }

  loadTowns(){
    this.activatedRoute.params.subscribe((params) => {
      const provinceId = params['provinceId'];
      if (provinceId) {

        this.locationService.findTownsByProvinceId(provinceId).subscribe(data => this.towns = data);
        this.locationService.findProvinceById(provinceId).subscribe(data => this.province = data)
        console.log(this.province);
        

      } else {
        this.locationService.findAllTowns().subscribe(data => this.towns = data)
      }
    });
    
    this.locationService.findAllProvinces().subscribe(data =>{ 
      this.provinces = data;
      console.log(this.provinces);
      
    })
  }
}
