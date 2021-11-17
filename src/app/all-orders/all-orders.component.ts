import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent  {
  public orders: any;
  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.orders = [];
    this.dataService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }
}
