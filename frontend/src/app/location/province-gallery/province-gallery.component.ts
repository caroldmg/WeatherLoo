
import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { IProvince } from '../models/province.model';
import { ActivatedRoute } from '@angular/router';
import { IAutonomy } from '../models/autonomy.model';


@Component({
  selector: 'app-province-gallery',
  templateUrl: './province-gallery.component.html',
  styleUrls: ['./province-gallery.component.css']
})
export class ProvinceGalleryComponent implements OnInit{
  provinces: IProvince[] = [];
  autonomy: IAutonomy | undefined;

  constructor(private locationService: LocationService,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.loadProvinces();
  }


  loadProvinces(){
    //mostrar todas las provincias
    this.activatedRoute.params.subscribe(params => {
      const autonomyIdStr = params['autonomyId'];

      // if(autonomyIdStr) {
      //   const id = parseInt(autonomyIdStr, 10);
      //   this.locationService.findAllByAutonomyId(id).subscribe ( data => this.provinces = data);
      // }
    })

    this.locationService.findAllProvinces().subscribe(data => this.provinces = data)
  }
  //filtro por comunidad autónoma
  
}
