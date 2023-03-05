import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
    
  constructor(private httpClient: HttpClient) { }
   
  getPosts(){
    return this.httpClient.get("https://dev.to/api/articles?username=katheesh");
  }
}
