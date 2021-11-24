import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-pane',
  templateUrl: './add-pane.component.html',
  styleUrls: ['./add-pane.component.scss']
})
//----------------------------------------------------------------------------------------------------------
export class AddPaneComponent  {
  public nomePanino: string = '';
  public items: any;
  public descrizione: string = ''
  constructor(private dataService: DataService,private toastr: ToastrService) { 
  }
  //----------------------------------------------------------------------------------------------------------
  addItem(nomePanino: String, descrizione:String) {
    if (!nomePanino) {
      this.toastr.error("non hai inserito dati giusti primo");
    return;
    }
//----------------------------------------------------------------------------------------------------------
    this.dataService.addItem(nomePanino,descrizione).subscribe((data) => {
      this.items=[]
      this.items=data
        this.toastr.success("panino aggiunto correttamente");
        this.nomePanino = '';
      });
  }
//----------------------------------------------------------------------------------------------------------

  
}