import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http:HttpClient) { }
  jokes:any;
  getjokes(){
    return this.http.get("https://api.chucknorris.io/jokes/random")
  }
}
