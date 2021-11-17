import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent {

  public user_orders:any
  public name: string = '';
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
      console.log(userName);
      console.log(this.user_orders);

    })
  }


}
