import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { QuotesService } from '../services/quotes.service';
import { Observable } from 'rxjs/internal/Observable';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, HttpClientModule, MatListModule, MatCardModule, MatButtonModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
  providers: [QuotesService]
})

export class QuotesComponent {

  listOfQuotes$: Observable<any[]>| undefined;

  constructor(
    private quotesService: QuotesService
    ) {}

  ngOnInit() {    
    this.listOfQuotes$ = this.quotesService.getSeveralRandomQuotes();  
  }

  getNextRandomQuotes() {
    this.listOfQuotes$ = this.quotesService.getSeveralRandomQuotes();
  }



}
