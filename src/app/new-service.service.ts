import { Url } from './url';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URLSERVER } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class NewServiceService {

  constructor(private http: HttpClient) {}
  getData(){
    return this.http.get<any>(URLSERVER+'URLShortenerEngine/GetAllURL');
  }
  addUrl(url:Url){
    return this.http.post<any>(URLSERVER+'URLShortenerEngine/Add',url); 
  }
}
