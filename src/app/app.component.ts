import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

//----------------------------------------------------------------------------------------------------------

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public items: any;
  public nomePanino: string = '';
  public orderSandwich: string = '';
  public userName: string = '';
  public messaggio: string = '';
  public messaggioerrore: string = '';
  public orders: any;
  public user_orders:any


  constructor(private dataService: DataService) {
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

  addItem(nomePanino: string) {
    if (!nomePanino) {
      this.messaggioerrore = 'non hai inserito il nome del panino';
      setTimeout(() => {
        this.messaggioerrore='';
      }, 7000);
    return;
    }
    
    this.dataService.addItem(nomePanino).subscribe((data) => {
        this.items = data;
        this.messaggio = 'Panino aggiunto correttamente!';
        this.nomePanino = '';
        setTimeout(() => {
          this.messaggio = '';
        }, 7000);
      });
  }

//----------------------------------------------------------------------------------------------------------

  addOrder(userName: string, orderSandwich : string) {
    if (!userName || !orderSandwich) {
      this.messaggioerrore = 'non hai inserito dati giusti';
      setTimeout(() => {
        this.messaggioerrore='';
      }, 7000);

      return
    }

    this.dataService.addOrders(orderSandwich,userName).subscribe((data) => {
        this.orders = data;
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
}
//----------------------------------------------------------------------------------------------------------