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
  public prezzo: number = 0
  public descrizione: string = ''
  constructor(private dataService: DataService,private toastr: ToastrService) { 
  }
  //----------------------------------------------------------------------------------------------------------
  addItem(nomePanino: String, descrizione:String, prezzo:number) {
    if (!nomePanino) {
      this.toastr.error("non hai inserito dati giusti primo");
    return;
    }
//----------------------------------------------------------------------------------------------------------
    this.dataService.addItem(nomePanino,descrizione,prezzo).subscribe((data) => {
      this.items=[]
      this.items=data
        this.toastr.success("panino aggiunto correttamente");
        this.nomePanino = '';
        this.descrizione='';
        this.prezzo=0
      });
  }
//----------------------------------------------------------------------------------------------------------

  
}
