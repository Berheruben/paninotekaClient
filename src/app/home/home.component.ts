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
  public texts=["che stai aspettando ?","ordina un panino senza ricevere un panino","ecco la lista dei panini che 'facciamo':"]

  constructor(private dataService: DataService,private toastr: ToastrService) {
    this.items = [];
    this.dataService.getItems().subscribe((data: any) => {
      this.items = data;
    });
   }

}
