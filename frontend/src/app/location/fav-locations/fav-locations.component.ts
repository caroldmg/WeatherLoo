import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/users/models/user.model';
import { UserService } from 'src/app/users/services/user.service';
import { ITown } from '../models/town.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-fav-locations',
  templateUrl: './fav-locations.component.html',
  styleUrls: ['./fav-locations.component.css']
})
export class FavLocationsComponent implements OnInit {

  user: IUser | undefined;
  favTowns: ITown[] = []

  constructor(
    private userService: UserService,
    private locationService: LocationService
  ){}

  ngOnInit(): void{
    this.userService.findCurrentUser().subscribe(data =>{
      this.user = data;
      if(this.user.favTowns){
        this.favTowns = this.user.favTowns
      }
    })
  }

  loadFavTowns(): void{
    if (this.user?.favTowns){

    }
  }
}
