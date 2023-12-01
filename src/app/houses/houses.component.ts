import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { HousesService } from '../services/houses.service'
import { Observable } from 'rxjs/internal/Observable';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Person } from '../model/person';
import { PersonsService } from '../services/persons.service';


@Component({
  selector: 'app-houses',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatListModule, MatCardModule, MatButtonModule],
  templateUrl: './houses.component.html',
  styleUrl: './houses.component.scss',
  providers: [ HousesService, PersonsService ]
})

export class HousesComponent {

  listOfHouses$: Observable<any[]>| undefined;
  showDetailsOfaHouse: boolean = false;
  showDetailsOfaCharacter: boolean = false;
  houseSelected : any = {
    name:'',
    slug:'',
    members: [{
      name: '',
      slug: ''}]
  }
  personSelected : Person = {name:'',slug:'', house:{name:'',slug:''},quotes:[]};

  constructor(
    private housesService: HousesService,
    private personsService: PersonsService
    ) {}

  ngOnInit() { 
    this.listOfHouses$ = this.housesService.getListOfHouses();
  }

  showTheDetailsOfHouse(house:any){
    this.showDetailsOfaHouse = true;
    this.showDetailsOfaCharacter = false;
    this.houseSelected = house;
  }

  showTheDetailsOfCharacter(member:any){
    this.personsService.getDetailsOFCharacter(member.slug).subscribe(character=>{
      this.personSelected = character[0];
    });
    this.showDetailsOfaCharacter = true;
  }

  cancelTheDetailsOfHouse() {
    this.showDetailsOfaHouse = false;
    this.showDetailsOfaCharacter = false;
  }

  cancelTheDetailsOfCharacter() {
    this.showDetailsOfaCharacter = false
  }

}
