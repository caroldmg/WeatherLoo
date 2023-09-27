import { Component } from '@angular/core';
import { ITown } from '../models/town.model';
import { IProvince } from '../models/province.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../services/location.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/users/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { IUser } from 'src/app/users/models/user.model';

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
    public authService: AuthService,
    private userService: UserService,
    private snackbar: MatSnackBar
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
  
  

  addFavTown(townCode: string){
    this.userService.addFavTown(townCode).subscribe( data =>
          this.snackbar.open('Se ha añadido la localidad a favoritos', 'Cerrar', {duration: 3000})
    )
  }

}
