import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient , HttpClientModule } from '@angular/common/http'
import { QuotesService } from '../services/quotes.service';

@Component({
  selector: 'app-quotes',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './quotes.component.html',
  styleUrl: './quotes.component.scss',
  providers: [QuotesService]
})
export class QuotesComponent {
  constructor(
    private http: HttpClient,
    private quotesService: QuotesService
    ) {}

  ngOnInit() {      
    // Simple GET request with response type <any>
    this.quotesService.getRandomQuote().subscribe(randomQuote=>{
      console.log("The random quote is");
      console.log(randomQuote);
    })

    this.quotesService.getQuotesFromCharacter().subscribe(quotesFromCharacter=> {
      console.log("Quotes From a Character are");
      console.log(quotesFromCharacter);
    })
    
    this.quotesService.getSeveralRandomQuotes().subscribe(severalRandomQuotes=> {
      console.log("several random Quotes are")
      console.log(severalRandomQuotes);
    })
    
   
  }



}
