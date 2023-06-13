import { Component } from '@angular/core';
import { IProvince } from '../models/province.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-province-list',
  templateUrl: './province-list.component.html',
  styleUrls: ['./province-list.component.css']
})
export class ProvinceListComponent {

  provinces: IProvince[] = []

  constructor(private locationService: LocationService){}

  ngOnInit(): void {
    //mostrar todas las provincias
    this.locationService.findAllProvinces().subscribe(data => this.provinces = data)
  }
}
