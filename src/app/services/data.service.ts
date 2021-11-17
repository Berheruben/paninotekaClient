import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get(`https://paninoteka.herokuapp.com/api/items`);
  }

  addItem(item: any) {
    return this.http.post(`https://paninoteka.herokuapp.com/api/items`, {
      item,
    });
  }

  getOrders(){
    return this.http.get(`https://paninoteka.herokuapp.com/api/orders`);
  }

  addOrders(item: any, userName :any ) {
    return this.http.post(`https://paninoteka.herokuapp.com/api/orders`, {
      item,
      userName
    });
  }
  getUser(name : String){
    return this.http.get(`https://paninoteka.herokuapp.com/api/orders/`+name);
  }

}
