import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './../services/data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent{
  public orders: any;
  public orderSandwich: string = '';
  public userName: string = '';
  public items: any;


  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.items = [];
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data;
    });
    
   }

  addOrder(userName: string, orderSandwich : any) {
    orderSandwich=JSON.stringify(orderSandwich.item).replace(/['"]+/g, ''); 
    console.log(orderSandwich)   
    if (!userName) {
      this.toastr.error("non hai inserito dati giusti");
      return
    }
//----------------------------------------------------------------------------------------------------------
    this.dataService.addOrders(orderSandwich,userName).subscribe((data) => {
        this.orders=[];
        this.orders = data;
        this.toastr.success('Ordine aggiunto correttamente!');
        this.userName="";
        this.orderSandwich="";
      });     
  }
}
