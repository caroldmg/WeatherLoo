import { Component } from '@angular/core';
import { LocationModule } from 'src/app/location/location.module';
import { SearchComponent } from 'src/app/location/search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  showMenu: boolean = false
 
}
