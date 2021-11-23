import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './../services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-sandwich',
  templateUrl: './all-sandwich.component.html',
  styleUrls: ['./all-sandwich.component.scss']
})
export class AllSandwichComponent  {
  public items: any;

  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.items = [];
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data;
    });
   }
  rimuoviItem(item :String){
    this.dataService.deleteItem(item).subscribe((data) => {
      this.toastr.success("PANINO eliminato corretamente correttamente");
    });
  }

}
