import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { HousesComponent } from "./houses/houses.component";
import { PersonsComponent } from "./persons/persons.component";
import { QuotesComponent } from "./quotes/quotes.component";
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, 
              RouterOutlet, 
              RouterLink, 
              RouterLinkActive, 
              HousesComponent, 
              PersonsComponent, 
              QuotesComponent, 
              MatCardModule,
              MatListModule,
              MatButtonModule,
              MatSelectModule]
})
export class AppComponent {
  title = 'GAME OF THRONES';

  constructor() {
  }

}
