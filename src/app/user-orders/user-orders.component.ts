import { Component } from '@angular/core';
import { DataService } from './../services/data.service';
import { ToastrService } from 'ngx-toastr';
import {Observable, OperatorFunction} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent {
  public user_orders:any
  public name: string = '';
  public states: any;
  public orders: any;

  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.user_orders = [];
    this.orders=[]
    this.dataService.getOrders().subscribe((data: any) => {
      this.user_orders = data;
      for( const oders of this.user_orders){
      
        this.orders.push(oders.userName)
      }
    });
    console.log(this.orders)
    //this.orders.filter()
    // console.log(this.orders)

   }

   find_user_order(userName: string) {
    if (!userName) {
      this.toastr.error("non hai inserito il nome utente");
    return;
    }
    this.dataService.getUser(userName).subscribe((data: any) => {
      this.user_orders = [];
      this.user_orders= data;
    })
  }

  public model: any;


  search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.states.filter((v: string) => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )




}
