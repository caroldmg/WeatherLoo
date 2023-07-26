import { Component } from '@angular/core';
import { ITown } from '../models/town.model';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../services/location.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-popular-locations',
  templateUrl: './popular-locations.component.html',
  styleUrls: ['./popular-locations.component.css']
})

export class PopularLocationsComponent {

  popularTowns: ITown[] = []

  isLoggedIn = false;

  constructor(private locationService: LocationService, public authService: AuthService) {}

  ngOnInit(): void {
    //mostrar todas las localidades
    this.loadPopularTowns();
    this.authService.isLoggedIn.subscribe(loggedIn => this.isLoggedIn = loggedIn);
  }

  loadPopularTowns() {
    this.locationService.findTownsByPopularTrue().subscribe(data => this.popularTowns = data)

  }

}
