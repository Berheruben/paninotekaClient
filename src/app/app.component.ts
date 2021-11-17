import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

//----------------------------------------------------------------------------------------------------------

export class AppComponent {
  public items: any;
  public nomePanino: string = '';
  public orderSandwich: string = '';
  public userName: string = '';
  public name: string = '';
  public messaggio: string = '';
  public messaggioerrore: string = '';
  public orders: any;
  public user_orders:any


  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.items = [];
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data;
    });
    this.orders = [];
    this.dataService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
   
  }



  
//----------------------------------------------------------------------------------------------------------

  addItem(nomePanino: String) {
    if (!nomePanino) {
      this.toastr.error("non hai inserito dati giusti");
      this.messaggioerrore = 'non hai inserito il nome del panino';
      setTimeout(() => {
        this.messaggioerrore='';
      }, 7000);
    return;
    }
    
    this.dataService.addItem(nomePanino).subscribe((data) => {
        this.items = data;
        this.toastr.success("panino aggiunto correttamente");
        this.messaggio = 'Panino aggiunto correttamente!';
        this.nomePanino = '';
        setTimeout(() => {
          this.messaggio = '';
        }, 7000);
      });
  }

//----------------------------------------------------------------------------------------------------------

  addOrder(userName: string, orderSandwich : any) {
    orderSandwich=JSON.stringify(orderSandwich.item).replace(/['"]+/g, '');    
    if (!userName) {
      this.messaggioerrore = 'non hai inserito dati giusti';
      this.toastr.error("non hai inserito dati giusti");
      setTimeout(() => {
        this.messaggioerrore='';
      }, 7000);
      return
    }
    this.dataService.addOrders(orderSandwich,userName).subscribe((data) => {
        this.orders = data;
        this.toastr.success('Ordine aggiunto correttamente!');
        this.messaggio = 'Ordine aggiunto correttamente!';
        this.userName="";
        this.orderSandwich="";
        setTimeout(() => {
          this.messaggio = '';
        }, 7000);
      });     
  }

//----------------------------------------------------------------------------------------------------------

  find_user_order(userName: string) {
    if (!userName) {
      this.toastr.error("non hai inserito il nome utente");
      this.messaggioerrore = 'non hai inserito il nome del panino';
      setTimeout(() => {
        this.messaggioerrore='';
      }, 7000);
    return;
    }

    this.dataService.getUser(userName).subscribe((data: any) => {
      this.user_orders = [];
      this.user_orders= data;
    })
  }
// ----------------------------------------------------------------------------------------------------------
}
