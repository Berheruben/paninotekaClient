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
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  public items: any;

  public messaggio: string = '';
  public messaggioerrore: string = '';
  public orders: any;



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



//----------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------
}
//----------------------------------------------------------------------------------------------------------