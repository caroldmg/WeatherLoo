import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../models/weather.model';
import { ActivatedRoute } from '@angular/router';
import { ITown } from 'src/app/location/models/town.model';
import { MADRID_TOWNCODE } from 'src/app/shared/constants';
import { LocationService } from 'src/app/location/services/location.service';
import { IProvince } from 'src/app/location/models/province.model';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/users/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})

export class WeatherDetailComponent implements OnInit{

  weather: IWeather|undefined;
  municipio: ITown | undefined;
  provincia: IProvince | undefined;
  favTowns: ITown[]=[];
  isLoggedIn = false;
  imgSky: string = '';

  constructor(private weatherService: WeatherService,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationService,
              private authService: AuthService,
              private userService: UserService,
              private snackbar: MatSnackBar
              
              ){}


  

   ngOnInit(): void {
     this.loadWeather();
     this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
     }
    
  
   loadWeather(){    
     this.activatedRoute.params.subscribe((params) => {     
      const townCode = params['townCode'] ?? MADRID_TOWNCODE;
      console.log(townCode);
      // si no pones ningún valor en la url, debería dar el tiempo de MAdrid por defecto
      this.locationService.findTownByTownCode(townCode).subscribe(data =>{ 
        this.municipio = data;
        this.provincia = this.municipio.province
        console.log(this.provincia?.id)
        
          this.weatherService.getWeatherRealTime(townCode, this.provincia?.id).subscribe(data => {
          this.weather = data
          this.imgSky = this.weather.stateSky.description.toLocaleLowerCase().replace(' ', '') ?? 'nuboso';
  
          console.log("hola")
        });
      
          });
        
      

   })

 }
 loadImg(){
  if(!this.imgSky){

    this.imgSky ='nuboso'
  }
 }
 
 addFavTown(townCode: string){
  this.userService.addFavTown(townCode).subscribe( data =>
        this.snackbar.open('Se ha añadido la localidad a favoritos', 'Cerrar', {duration: 3000})
    )
  }

  async isFavTown(townCode: string){
    return await this.locationService.findTownByTownCode(townCode).subscribe(town =>
      (this.favTowns.findIndex(currentTown => currentTown === town) !== -1 )
    )
    
  }

}

