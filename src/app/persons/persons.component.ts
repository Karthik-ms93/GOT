import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient , HttpClientModule } from '@angular/common/http'
import { PersonsService } from '../services/persons.service';
import {Person} from '../model/person'
import { Observable } from 'rxjs/internal/Observable';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatListModule, MatCardModule, MatButtonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.scss',
  providers: [ PersonsService ]
})
export class PersonsComponent {

  listOfCharacters$: Observable<any[]>| undefined;
  showDetailsOfaCharacter: boolean = false;
  personSelected : Person = {
    name: '',
    slug: '',
    house: {name:'',slug:''},
    quotes: []
  }
    

  constructor(
    private personsService: PersonsService
    ) {}

  ngOnInit() { 
    this.listOfCharacters$ = this.personsService.getListOfCharacters()
  }

  showTheDetailsOfCharacter(person: Person) {
    this.showDetailsOfaCharacter = true;
    this.personSelected = person;
  }

    

}
