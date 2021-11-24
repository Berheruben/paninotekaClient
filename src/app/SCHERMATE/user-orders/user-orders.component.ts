import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
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







}
