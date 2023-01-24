import { Component, Input } from '@angular/core';
import { Developer } from '../models/developer';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent {

  myPerson = new Developer ('Laurie', 'Boucher', 25, 'female', 'parle trop vite', 
  [{name: 'javascrip', logo: 'logonike', site: 'nike.com' }, {name: 'angular', logo: 'adidas', site: 'adidas.com'}]);


}
