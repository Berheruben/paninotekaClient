import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})

export class AllOrdersComponent  {
  public orders: any;
  public name: any;

  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.orders = [];
    this.dataService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }

  deleteOrder(userName:String , item :String){
    this.dataService.deleteOrders(userName,item).subscribe((data) => {
      this.toastr.success("ORDINE eliminato corretamente correttamente");
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  Dorders(){
    this.dataService.deleteAllOrders().subscribe((data) => {
      this.toastr.success("tutti ordini eliminati");
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }

  deleteAllOrderOfSingleUser(userName :String){
    if (!userName) {
      this.toastr.error("non hai inserito il nome utente");
    return;
    }
    this.dataService.deleteAllItemOfUser(userName).subscribe((data: any) => {
      this.toastr.success("tutti ordini eliminati del utente "+ userName);
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);

  }
}

// let deleteRow= (id: any)=>{
//   for(let i = 0; i < this.orders.length; ++i){
//       if (this.data[i].id === id) {
//           this.data.splice(i,1);
//       }
//   }
// }



// let userName=()=>{

// }
// let item=()=>{

// }





