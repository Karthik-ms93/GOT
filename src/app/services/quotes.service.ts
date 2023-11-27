import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http: HttpClient) { }

  //method to get a random Quote
  public getRandomQuote(): Observable<any[]> { 
    return this.http.get<any>('https://api.gameofthronesquotes.xyz/v1/random');
  }
  
  //method to get several random quotes
  public getSeveralRandomQuotes(): Observable<any[]> { 
    return this.http.get<any>('https://api.gameofthronesquotes.xyz/v1/random/5');
  }

  //method to get get quotes from a character
  public getQuotesFromCharacter(): Observable<any[]> { 
    return this.http.get<any>('https://api.gameofthronesquotes.xyz/v1/author/tyrion/2');
  }
  


}
