import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PersonsService {

  constructor(private http: HttpClient) { }

  // get the list of characters with their quotes
  public getListOfCharacters(): Observable<any[]> { 
    return this.http.get<any>('https://api.gameofthronesquotes.xyz/v1/characters');
  }

  // get the character's details with his quotes
  public getDetailsOFCharacter(slug: string): Observable<any> {
      return this.http.get<any>('https://api.gameofthronesquotes.xyz/v1/character/'+ slug); 
  }

}

