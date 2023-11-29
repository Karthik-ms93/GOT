import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { PersonsService } from '../services/persons.service';
import { HousesService } from '../services/houses.service'
import { Person } from '../model/person'
import { Observable } from 'rxjs/internal/Observable';
import { MatListModule } from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { QuotesService } from '../services/quotes.service';


@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatListModule, MatCardModule, MatButtonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss',
  providers: [ PersonsService, QuotesService, HousesService ]
})
export class PersonsComponent {

  listOfCharacters$: Observable<any[]>| undefined;
  listOfQuotes$: Observable<any[]>| undefined;
  showDetailsOfaCharacter: boolean = false;
  showDetailsOfaHouse: boolean = false;
  personSelected : Person = {
    name: '',
    slug: '',
    house: {name:'',slug:''},
    quotes: []
  }
  houseSelected : any= { name:'', slug:'', members: [{ name: '', slug: ''}]};
  currentIndex: number = 0;
  quotesofSelectedPeron: any[] = [];
    
  constructor(
    private personsService: PersonsService,
    private houseService: HousesService
    ) {}

  ngOnInit() { 
    this.listOfCharacters$ = this.personsService.getListOfCharacters()
  }

  showTheDetailsOfCharacter(person: Person) {
    this.showDetailsOfaCharacter = true;
    this.quotesofSelectedPeron = person.quotes;
    this.personSelected = person;
    this.getOtherQuote();
  }

  showTheDetailsOfHouse(house: any) {
    this.houseService.getDetailsofHouse(house.slug).subscribe(house=>{
      this.houseSelected = house[0];
    });
    this.showDetailsOfaHouse = true;
  }


  getOtherQuote() {
    this.personSelected.quotes = this.quotesofSelectedPeron.slice(this.currentIndex, this.currentIndex + 1);
    this.currentIndex += 1;
    if (this.currentIndex >= this.quotesofSelectedPeron.length) {
      this.currentIndex = 0; 
    }
  }    

  cancelTheDetailsOfPerson() {
    this.showDetailsOfaCharacter = false;
    this.showDetailsOfaHouse = false;
  }

  cancelTheDetailsOfHouse() {
    this.showDetailsOfaHouse = false;
  }

}
