import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
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
  private bufferUsername :any ;
  private bufferItem :any;

  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.items = [];
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data;
    });
   }

  addOrder(userName: string, orderSandwich : any) {
    orderSandwich=JSON.stringify(orderSandwich.item).replace(/['"]+/g, ''); 
    this.bufferItem = orderSandwich;
    this.bufferUsername=userName;
    this.userName="";
    this.orderSandwich="";
    let prezzo
    for(let c of this.items){
      if(orderSandwich==c.item){
        prezzo=c.prezzo;
      }
    }
    if(prezzo===null){
      this.toastr.success('Qualcosa è andata storto');
    }
    // console.log(orderSandwich)   
    // if (!/[^a-zA-Z]/.test(userName)==false) {
    //   this.toastr.error("non deve contenere numeri e caratteri speciali");
    //   return
    // }
//----------------------------------------------------------------------------------------------------------
    this.dataService.addOrders(this.bufferItem,this.bufferUsername,prezzo).subscribe((data) => {
        this.orders=[];
        this.orders = data;
        this.toastr.success('Ordine aggiunto correttamente!');
      });
           
  }
}
