import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { IProvince } from '../models/province.model';

@Component({
  selector: 'app-province-gallery',
  templateUrl: './province-gallery.component.html',
  styleUrls: ['./province-gallery.component.css']
})
export class ProvinceGalleryComponent implements OnInit{
  provinces: IProvince[] = []

  constructor(private locationService: LocationService){}

  ngOnInit(): void {
    //mostrar todas las provincias
    this.locationService.findAllProvinces().subscribe(data => this.provinces = data)
  }

  //filtro por comunidad autónoma
  
}
