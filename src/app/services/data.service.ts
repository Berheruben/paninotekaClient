import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root',
})

export class DataService {
  constructor(private http: HttpClient,private toastr: ToastrService) {}

  getItems() {
    return this.http.get(`https://paninoteka.herokuapp.com/api/items`);
  }

  addItem(item: any, descrizione: any) {
    return this.http.post(`https://paninoteka.herokuapp.com/api/items`, {
      item,
      descrizione,
    }).pipe(
      catchError((err, caught) => {
        this.toastr.error(err.error.error);
        return throwError(err)
      }),
    );
  }

  getOrders(){
    return this.http.get(`https://paninoteka.herokuapp.com/api/orders`);
  }

  addOrders(item: any, userName :any ) {
    return this.http.post(`https://paninoteka.herokuapp.com/api/orders`, {
      item,
      userName
    }).pipe(
      catchError((err, caught) => {
        this.toastr.error(err.error.error);
        return throwError(err)
      }),
    );
  }
  
  getUser(name : String){
    return this.http.get(`https://paninoteka.herokuapp.com/api/orders/`+name).pipe(
      catchError((err, caught) => {
        this.toastr.error(err.error.error);
        return throwError(err)
      }),
    );;
  }

  deleteOrders(userName:String , item:String){
    return this.http.delete(`https://paninoteka.herokuapp.com/api/delete/orders/`+userName+`/`+item, { 
    }).pipe(
      catchError((err, caught) => {
        this.toastr.error(err.error.error);
        return throwError(err)
      }),
    );
  }

  deleteAllOrders(){
    return this.http.delete(`https://paninoteka.herokuapp.com/api/delete/orders`,{
    }).pipe(
      catchError((err, caught) => {
        this.toastr.error(err.error.error);
        return throwError(err)
      }),
    );
  }

  deleteItem(id :String){
    return this.http.delete(`https://paninoteka.herokuapp.com/api/delete/item/`+id,{
    }).pipe(
      catchError((err, caught) => {
        this.toastr.error(err.error.error);
        return throwError(err)
      }),
    );
  }

  deleteAllItem(){
    return this.http.delete(`https://paninoteka.herokuapp.com/api/delete/item`,{
    }).pipe(
      catchError((err, caught) => {
        this.toastr.error(err.error.error);
        return throwError(err)
      }),
    );
  }

}
