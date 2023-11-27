import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: HttpClient) {}
   
  // get houses with their members
  public getListOfHouses(): Observable<any[]> {  
    return this.http.get<any>('https://api.gameofthronesquotes.xyz/v1/houses');
  }

  // get house's details
  public getDetailsofHouse(): Observable<any[]> {  
    return this.http.get<any>('https://api.gameofthronesquotes.xyz/v1/house/lannister');
  }


}
