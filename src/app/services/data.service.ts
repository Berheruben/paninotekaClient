import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Data } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get<data>(this.configUrl);
  }
  
  constructor(private http: HttpClient) { 
    
  }
  
}
export interface data {
  heroesUrl: string;
  textfile: string;
  date: any;
}