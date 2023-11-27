import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient , HttpClientModule } from '@angular/common/http'
import {HousesService} from '../services/houses.service'
import { Observable } from 'rxjs/internal/Observable';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {House} from '../model/house'


@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatListModule, MatCardModule, MatButtonModule],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss',
  providers: [ HousesService ]
})

export class HousesComponent {

  listOfHouses$: Observable<any[]>| undefined;
  showDetailsOfaHouse: boolean = false;
  houseSelected : any = {
    name:'',
    slug:'',
    members: [{
      name: '',
      slug: ''}]
  }

  constructor(
    private housesService: HousesService
    ) {}

  ngOnInit() { 
    this.listOfHouses$ = this.housesService.getListOfHouses();
  }

  showTheDetailsOfHouse(house:any){
    this.showDetailsOfaHouse = true;
    this.houseSelected = house;
  }

}
