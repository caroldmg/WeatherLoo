import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  constructor( private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{}

  onSearch(value: string){
    if(value && value.length > 3){
     console.log(value)
    }
  }
  

}
