import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ITown } from '../models/town.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  cities: ITown[] = [] ;
  
  constructor( private router: Router){}
  

  ngOnInit(): void{}

  onSearch(value: string){
    for ( let city of this.cities){

      if(value && value.length > 3){
        this.router.navigate(['/weather/weather-detail/',city.name]),{
          queryParams: {q: value}
        }
       console.log('Buscar =>',value)
      }
    }
  }
  

}
