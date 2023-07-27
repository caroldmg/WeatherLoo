import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ITown } from '../models/town.model';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  cities: ITown[] = [] ;
  value: string = ""
  city: ITown | undefined;
  
  
  constructor( private router: Router,
                private locationService: LocationService){}
  

  ngOnInit(): void{}

  
  
  
  filterByTitle(name: string){
    const nameFilter = this.cities.filter(city => city.name.includes(name));
    return nameFilter
    
  }
  
  
   onSearch(value: string){
    
    if (value && value.length > 1){

      this.locationService.searchByTownName(value).subscribe(data => {
        this.city = data;
        console.log(this.city);
        const cityCode = this.city.townCode
        console.log(cityCode)
        
      })
      console.log(value)
      return 
      
    }



    else{
      alert('')
      return console.log("fuck off")
    }
  }
  
  
  

}
