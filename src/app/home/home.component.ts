import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public items: any;

  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.items = [];
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data;
    });
   }

}
