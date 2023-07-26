import { Component } from '@angular/core';
import { ITown } from '../models/town.model';
import { IProvince } from '../models/province.model';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../services/location.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-town-list',
  templateUrl: './town-list.component.html',
  styleUrls: ['./town-list.component.css']
})
export class TownListComponent {


  towns: ITown[] = []
  province: IProvince | undefined;
  provinces: IProvince[] = [];
  isLoggedIn = false;

  constructor(
    private locationService: LocationService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
    ){}

  ngOnInit(): void {
    //mostrar todas las provincias
    
    this.loadTowns();
    this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
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
