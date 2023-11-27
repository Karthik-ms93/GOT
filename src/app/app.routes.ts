import { Routes } from '@angular/router';
import { HousesComponent } from './houses/houses.component';
import { PersonsComponent } from './persons/persons.component';
import { QuotesComponent } from './quotes/quotes.component';

export const routes: Routes = [
    {path: 'houses-list', component: HousesComponent},
    {path: 'persons-list', component: PersonsComponent},
    {path: 'quotes-list', component: QuotesComponent }
];

